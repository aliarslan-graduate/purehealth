import {Request, Response} from 'express';
import {StateService, CountryService} from '../../services';
import {SuccessResponse, BadRequestResponse} from '../../util';
import {StateDTO} from '../../interfaces/dto/state';

export class StateController {
  public static async create(req: Request, res: Response): Promise<void> {
    const stateService = new StateService();
    const countryService = new CountryService();
    const data = req.body;
    const {name, country} = req.body;
    const countryData = await countryService.findById(country);
    if (!countryData) {
      const response = new BadRequestResponse(
        res,
        'Invalid country Id, country not found'
      );
      return response.send();
    }
    const cityData = await stateService.findByName(name);
    if (cityData) {
      const response = new BadRequestResponse(
        res,
        'State with this name already exists'
      );
      return response.send();
    }
    const result = await stateService.create(data);
    const response = new SuccessResponse(res, 'success', result);
    return response.send();
  }

  public static async getByCountry(req: Request, res: Response): Promise<void> {
    const stateService = new StateService();
    const countryId = req.params.id;
    const cities: Array<StateDTO> = await stateService.findByCountryId(
      countryId
    );
    const response = new SuccessResponse(res, 'success', cities);
    return response.send();
  }
}
