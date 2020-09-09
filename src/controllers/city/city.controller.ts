import {Request, Response} from 'express';
import {CityService, CountryService} from '../../services';
import {SuccessResponse, BadRequestResponse} from '../../util';
import {CityDTO} from '../../interfaces/dto/city';

export class CityController {
  public static async create(req: Request, res: Response): Promise<void> {
    const cityService = new CityService();
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
    const cityData = await cityService.findByName(name);
    if (cityData) {
      const response = new BadRequestResponse(
        res,
        'City with this name already exists'
      );
      return response.send();
    }
    const result = await cityService.create(data);
    const response = new SuccessResponse(res, 'success', result);
    return response.send();
  }

  public static async getByCountry(req: Request, res: Response): Promise<void> {
    const cityService = new CityService();
    const countryId = req.params.id;
    const cities: Array<CityDTO> = await cityService.findByCountryId(countryId);
    const response = new SuccessResponse(res, 'success', cities);
    return response.send();
  }
}
