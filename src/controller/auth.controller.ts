'use-strict';

import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import  User  from '../models/user.model';
import { generaAccessToken, generaRefreshToken } from '../helper/genera-token';
import { NotFoundError, UnauthorizedError, TokenError } from '../helper';

class AuthController {
  //[login]
  static async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: email },
      });
      if (!user) {
        throw new NotFoundError('Người dùng không tồn tại', 404);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new UnauthorizedError('Mật khẩu không chính xác', 403);
      }
      const access_token = await generaAccessToken(user);
      const refresh_token = await generaRefreshToken(user);
      res.cookie('refreshToken', refresh_token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
        path: '/',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(200).json({ message: 'Đăng nhập thành công', user, access_token, refresh_token });
    } catch (error) {
      next(error);
    }
  }

  //[register]
  static async register(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const { name, email, password, confirmPassword } = req.body;

      const existsUser = await User.findOne({
        where: { email: email },
      });
      if (existsUser) {
        throw new UnauthorizedError('Email đã được đăng ký', 403);
      }

      if (password !== confirmPassword) {
        throw new UnauthorizedError('Xác nhận mật khẩu không khớp', 403);
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email,
        password: hashedPassword,
      });
      await user.save();

      return res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
      next(error);
    }
  }

	  //[logout]
		static async logout(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
			try {

				return res.status(201).json({ message: 'thành công' });
			} catch (error) {
				next(error);
			}
		}

	  //[refreshToken]
		static async refreshToken(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
			try {

				return res.status(201).json({ message: 'thành công' });
			} catch (error) {
				next(error);
			}
		}

	  //[forgotPassword]
		static async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
			try {

				return res.status(201).json({ message: 'thành công' });
			} catch (error) {
				next(error);
			}
		}

	  //[sendMail]
		static async sendMail(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
			try {

				return res.status(201).json({ message: 'thành công' });
			} catch (error) {
				next(error);
			}
		}

	  //[verifyCode]
		static async verifyCode(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
			try {

				return res.status(201).json({ message: 'thành công' });
			} catch (error) {
				next(error);
			}
		}
}

export default AuthController;
