import express from 'express';
import {CountryController} from './country.controller';
import {CountryValidation} from './country.validator';
import {validator} from '../../middleware/validator';
import {asyncWrapper} from '../../middleware/async-wrapper';
export const CountryRouter = express.Router();

CountryRouter.post('/', [
  validator(CountryValidation.create, 'body'),
  asyncWrapper(CountryController.create),
]);

CountryRouter.get('/', asyncWrapper(CountryController.getAll));

CountryRouter.get('/:id', [
  validator(CountryValidation.getCountry, 'params'),
  asyncWrapper(CountryController.getCountry),
]);
