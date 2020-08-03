import { Request, Response } from 'express';
import { container } from 'tsyringe';

// index, show, create, update, delete

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { password, token } = req.body;

    const resetPassword = container.resolve(ResetPasswordService);

    const user = await resetPassword.execute({
      token,
      password,
    });

    console.log(user);

    return res.status(200).json(user);
  }
}
