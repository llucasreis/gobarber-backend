import { Router } from 'express';
import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

// SoC : Separtion of of Concerns (Separação de Preocupação)
// DTO -> Data Transfer Object
// Rota: Recebe a requisição, chamar outro arquivo, devolver uma resposta

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;

// index, show, create, update, delete
