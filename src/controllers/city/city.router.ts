import express from 'express';
import {CityController} from './city.controller';
import {CityValidation} from './city.validator';
import {validator} from '../../middleware/validator';
import {asyncWrapper} from '../../middleware/async-wrapper';
export const CityRouter = express.Router();

CityRouter.post('/', [
  validator(CityValidation.create, 'body'),
  asyncWrapper(CityController.create),
]);

CityRouter.get('/:id', [
  validator(CityValidation.getByCountry, 'params'),
  asyncWrapper(CityController.getByCountry),
]);
