import express from 'express';
import {FormsRouter} from './controllers/forms';
import {CountryRouter} from './controllers/country';
import {CityRouter} from './controllers/city';
import {StateRouter} from './controllers/state';
import {LabRouter} from './controllers/lab';
export const AppRouter = express.Router();

AppRouter.use('/forms', FormsRouter);
AppRouter.use('/country', CountryRouter);
AppRouter.use('/city', CityRouter);
AppRouter.use('/state', StateRouter);
AppRouter.use('/lab', LabRouter);
