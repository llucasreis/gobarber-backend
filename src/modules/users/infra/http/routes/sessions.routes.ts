import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// SoC : Separtion of of Concerns (Separação de Preocupação)
// DTO -> Data Transfer Object
// Rota: Recebe a requisição, chamar outro arquivo, devolver uma resposta

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionsController.create,
);

export default sessionsRouter;
