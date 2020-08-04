import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensuredAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentController from '../controllers/ProviderAppointmentController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentController = new ProviderAppointmentController();

appointmentsRouter.use(ensuredAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointmentController.index);

export default appointmentsRouter;
