import express from 'express';
import {FormsController} from './forms.controller';
import {FormsValidation} from './forms.validator';
import {validator} from '../../middleware/validator';
import {asyncWrapper} from '../../middleware/async-wrapper';
export const FormsRouter = express.Router();

// FormsRouter.get('/', asyncWrapper(UserController.list));

FormsRouter.post('/', [
  validator(FormsValidation.create, 'body'),
  asyncWrapper(FormsController.create),
]);

FormsRouter.put('/:id', [
  validator(FormsValidation.create, 'body'),
  asyncWrapper(FormsController.update),
]);

FormsRouter.delete('/:id', [asyncWrapper(FormsController.deleteForm)]);

FormsRouter.get('/', asyncWrapper(FormsController.getAllForms));

FormsRouter.get('/:id', asyncWrapper(FormsController.getForm));
