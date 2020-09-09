import express from 'express';
import {StateController} from './state.controller';
import {StateValidation} from './state.validator';
import {validator} from '../../middleware/validator';
import {asyncWrapper} from '../../middleware/async-wrapper';
export const StateRouter = express.Router();

StateRouter.post('/', [
  validator(StateValidation.create, 'body'),
  asyncWrapper(StateController.create),
]);

StateRouter.get('/:id', [
  validator(StateValidation.getByCountry, 'params'),
  asyncWrapper(StateController.getByCountry),
]);
