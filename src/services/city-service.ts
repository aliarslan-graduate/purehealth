import {BaseService} from './base-service';
import {CityRepository} from '../repositories';
import {CityDTO} from '../interfaces/dto/city';

export class CityService extends BaseService {
  private repository = new CityRepository();

  public async create(data: {name: string; country: string}): Promise<any> {
    return this.repository.create(data);
  }

  public async findByName(name: string): Promise<CityDTO> {
    return this.repository.findByName(name);
  }

  public async findByCountryId(country: string): Promise<Array<CityDTO>> {
    return this.repository.findByCountryId(country);
  }

  public async findById(id: string): Promise<CityDTO> {
    return this.repository.findById(id);
  }
}
