import { NextFunction } from "express";

export interface IAuthService {
  createUser(name: string, email: string, password: string, confirmPassword: string): void;
  userLogin(email: string, password: string): void;
  checkToken(next: NextFunction, token?: string, ): void;
}
