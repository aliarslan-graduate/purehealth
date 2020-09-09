import Joi from 'joi';
import Mongoose from 'mongoose';

const create = Joi.object({
  name: Joi.string().label('Country Name').min(4).required(),
});

const isMongoId = (id: string) => {
  if (Mongoose.Types.ObjectId.isValid(id)) return id;
  else throw new Error('Invalid Id');
};

const getCountry = Joi.object({
  id: Joi.string().label('Country Id').required().custom(isMongoId),
});

export const CountryValidation = {
  create,
  getCountry,
};
