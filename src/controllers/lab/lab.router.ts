import express from 'express';
import {LabController} from './lab.controller';
import {LabValidation} from './lab.validator';
import {validator} from '../../middleware/validator';
import {asyncWrapper} from '../../middleware/async-wrapper';
export const LabRouter = express.Router();

LabRouter.post('/', [
  validator(LabValidation.create, 'body'),
  asyncWrapper(LabController.create),
]);

LabRouter.get('/:id', [
  validator(LabValidation.getByCity, 'params'),
  asyncWrapper(LabController.getByCity),
]);
