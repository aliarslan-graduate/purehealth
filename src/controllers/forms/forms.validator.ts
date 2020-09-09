import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().label('Form Name').min(4).required(),
  data: Joi.string().label('Form Data').min(4).required(),
});

export const FormsValidation = {
  create,
};
