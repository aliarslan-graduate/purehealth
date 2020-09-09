import {BaseService} from './base-service';
import {CountryRepository} from '../repositories';
import {CountryDTO} from '../interfaces/dto/country';

export class CountryService extends BaseService {
  private repository = new CountryRepository();

  public async create(data: {name: string}): Promise<any> {
    return this.repository.create(data);
  }

  public async findByName(name: string): Promise<CountryDTO> {
    return this.repository.findByName(name);
  }

  public async findById(id: string): Promise<CountryDTO> {
    return this.repository.findById(id);
  }

  public async getCountries(): Promise<Array<CountryDTO>> {
    return this.repository.getCountries();
  }

  // public async findFormRecord(id: string): Promise<FormsDTO> {
  //   return this.repository.findForm(id);
  // }

  // public async deleteFormRecord(id: string): Promise<FormsDTO> {
  //   return this.repository.delete(id);
  // }
}
