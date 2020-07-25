import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// SoC : Separtion of of Concerns (Separação de Preocupação)
// DTO -> Data Transfer Object
// Rota: Recebe a requisição, chamar outro arquivo, devolver uma resposta

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
