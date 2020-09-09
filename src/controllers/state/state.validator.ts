import Joi from 'joi';
import Mongoose from 'mongoose';

const isMongoId = (id: string) => {
  if (Mongoose.Types.ObjectId.isValid(id)) return id;
  else throw new Error('Invalid Id');
};

const create = Joi.object({
  name: Joi.string().label('State Name').min(4).required(),
  country: Joi.string().label('Country Id').required().custom(isMongoId),
});

const getByCountry = Joi.object({
  id: Joi.string().label('Country Id').required().custom(isMongoId),
});

export const StateValidation = {
  create,
  getByCountry,
};
