import {Request, Response} from 'express';
import {CountryService} from '../../services';
import {SuccessResponse, BadRequestResponse} from '../../util';
import {CountryDTO} from '../../interfaces/dto/country';

export class CountryController {
  public static async create(req: Request, res: Response): Promise<void> {
    const countryService = new CountryService();
    const data = req.body;
    const {name} = req.body;
    const countryData = await countryService.findByName(name);
    if (countryData) {
      const response = new BadRequestResponse(
        res,
        'Country with this name already exists'
      );
      return response.send();
    }
    const result = await countryService.create(data);
    const response = new SuccessResponse(res, 'success', result);
    return response.send();
  }

  public static async getCountry(req: Request, res: Response): Promise<void> {
    const countryService = new CountryService();
    const countryId = req.params.id;
    const country: CountryDTO = await countryService.findById(countryId);
    const response = new SuccessResponse(res, 'success', country);
    return response.send();
  }

  public static async getAll(req: Request, res: Response): Promise<void> {
    const countryService = new CountryService();
    const countries: Array<CountryDTO> = await countryService.getCountries();
    const response = new SuccessResponse(res, 'success', countries);
    return response.send();
  }
}
