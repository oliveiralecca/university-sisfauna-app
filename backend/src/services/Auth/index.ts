import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IErrors } from "../types";
import { IAuthService } from "./types";
import { PrismaClient } from "@prisma/client";
import { NextFunction } from 'express';

const prisma = new PrismaClient();

export class AuthService implements IAuthService {
  errors: IErrors;

  constructor() {
    this.errors = {};
  }

  async createUser(name: string, email: string, password: string, confirmPassword: string) {
    try {
      if (!name && !email && !password && !confirmPassword) {
        this.errors['invalidData'] = {
          message: 'Dados obrigatórios não informados'
        };
        return;
      }

      if (!name) {
        this.errors['invalidName'] = {
          message: 'O nome é obrigatório'
        };
        return;
      }

      if (!email) {
        this.errors['invalidEmail'] = {
          message: 'O email é obrigatório'
        };
        return;
      }

      if (!password) {
        this.errors['invalidPassword'] = {
          message: 'A senha é obrigatória'
        };
        return;
      }

      if (password !== confirmPassword) {
        this.errors['invalidPasswordConfirm'] = {
          message: 'Senhas não conferem'
        };
        return;
      }

      const userExists = await prisma.users.findUnique({
        where: {
          email
        }
      })

      if (userExists) {
        this.errors['invalidUser'] = {
          message: 'E-mail já cadastrado, por favor, tente outro'
        };
        return;
      }

      const salt = bcrypt.genSaltSync(10);
      const passwordHash = await bcrypt.hash(password, salt);

      await prisma.users.create({
        data: {
          name,
          email,
          password: passwordHash
        }
      });
    
      return 'Usuário cadastrado com sucesso';    
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async userLogin(email: string, password: string) {
    try {
      if (!email) {
        this.errors['invalidEmail'] = {
          message: 'O email é obrigatório'
        };
        return;
      }

      if (!password) {
        this.errors['invalidPassword'] = {
          message: 'A senha é obrigatória'
        };
        return;
      }

      const user = await prisma.users.findUnique({
        where: {
          email
        }
      })

      if (!user) {
        this.errors['invalidUser'] = {
          message: 'Usuário não encontrado'
        };
        return;
      }

      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        this.errors['wrongPassword'] = {
          message: 'Senha incorreta'
        };
        return;
      }

      const secret = process.env.SECRET_KEY!;
      const token = jwt.sign({ id: user.id }, secret);
    
      return { token, user };    
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }

  async checkToken(next: NextFunction, token?: string) {
    try {
      if (!token) {
        this.errors['invalidToken'] = {
          message: 'Acesso negado'
        };
        return;
      }

      const secret = process.env.SECRET_KEY!;
      jwt.verify(token, secret);
    
      next();   
    } catch (e) {
      this.errors['invalidDecode'] = {
        message: 'Token inválido'
      };
    } finally {
      await prisma.$disconnect();
    }
  }

  // TODO: just for test
  async getUser(id: string) {
    try {
      if (!id) {
        this.errors['invalidUserId'] = {
          message: 'O id do usuário é obrigatório'
        };
        return;
      }

      const user = await prisma.users.findUnique({
        where: {
          id
        },
        select: {
          id: true,
          name: true,
          email: true,
        }
      })

      if (!user) {
        this.errors['invalidUser'] = {
          message: 'Usuário não encontrado'
        };
        return;
      }
    
      return user;    
    } catch (e) {
      console.error(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}
