import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../services/Auth";

export const AuthController = {
  async createUser(req: Request, res: Response) {
    const auth = new AuthService();

    try {
      const { name, email, password, confirmPassword } = req.body;
      const register = await auth.createUser(name, email, password, confirmPassword); 

      if (Object.keys(auth.errors).length && auth.errors['invalidData']) {
        return res.status(400).send({ error: auth.errors['invalidData'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidName']) {
        return res.status(400).send({ error: auth.errors['invalidName'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidEmail']) {
        return res.status(400).send({ error: auth.errors['invalidEmail'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidPassword']) {
        return res.status(400).send({ error: auth.errors['invalidPassword'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidPasswordConfirm']) {
        return res.status(400).send({ error: auth.errors['invalidPasswordConfirm'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidUser']) {
        return res.status(400).send({ error: auth.errors['invalidUser'].message });
      }

      return res.json(register);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async userLogin(req: Request, res: Response) {
    const auth = new AuthService();

    try {
      const { email, password } = req.body;
      const login = await auth.userLogin(email, password); 

      if (Object.keys(auth.errors).length && auth.errors['invalidEmail']) {
        return res.status(400).send({ error: auth.errors['invalidEmail'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidPassword']) {
        return res.status(400).send({ error: auth.errors['invalidPassword'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidUser']) {
        return res.status(400).send({ error: auth.errors['invalidUser'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['wrongPassword']) {
        return res.status(400).send({ error: auth.errors['wrongPassword'].message });
      }

      return res.json({ 
        message: 'Login realizado com sucesso', 
        user: { 
          id: login?.user.id, 
          name: login?.user.name, 
          email: login?.user.email 
        }, 
        token: login?.token 
      });
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  async checkToken(req: Request, res: Response, next: NextFunction) {
    const auth = new AuthService();

    try {
      const { authorization } = req.headers;
      const token = authorization?.replace('Bearer ', '');
      await auth.checkToken(next, token); 

      if (Object.keys(auth.errors).length && auth.errors['invalidToken']) {
        return res.status(400).send({ error: auth.errors['invalidToken'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidDecode']) {
        return res.status(400).send({ error: auth.errors['invalidDecode'].message });
      }
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },

  // TODO: just for test
  async getUser(req: Request, res: Response) {
    const auth = new AuthService();

    try {
      const { id } = req.query;
      const user = await auth.getUser(id as string); 

      if (Object.keys(auth.errors).length && auth.errors['invalidUserId']) {
        return res.status(400).send({ error: auth.errors['invalidUserId'].message });
      }

      if (Object.keys(auth.errors).length && auth.errors['invalidUser']) {
        return res.status(400).send({ error: auth.errors['invalidUser'].message });
      }

      return res.json(user);
    } catch (e: any) {
      return res.status(400).send({ error: e.message });
    }
  },
}
