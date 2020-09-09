import {Request, Response} from 'express';
import {LabService, CityService} from '../../services';
import {SuccessResponse, BadRequestResponse} from '../../util';
import {LabDTO} from '../../interfaces/dto/lab';

export class LabController {
  public static async create(req: Request, res: Response): Promise<void> {
    const labService = new LabService();
    const cityService = new CityService();
    const data = req.body;
    const {name, city} = req.body;
    const cityData = await cityService.findById(city);
    if (!cityData) {
      const response = new BadRequestResponse(
        res,
        'Invalid city Id, city not found'
      );
      return response.send();
    }
    const labData = await labService.findByCity(name, city);
    if (labData) {
      const response = new BadRequestResponse(
        res,
        `Lab with this name already exists for ${cityData.name} city`
      );
      return response.send();
    }
    const result = await labService.create(data);
    const response = new SuccessResponse(res, 'success', result);
    return response.send();
  }

  public static async getByCity(req: Request, res: Response): Promise<void> {
    const labService = new LabService();
    const cityId = req.params.id;
    const cities: Array<LabDTO> = await labService.findByCityId(cityId);
    const response = new SuccessResponse(res, 'success', cities);
    return response.send();
  }
}
