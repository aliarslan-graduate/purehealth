import {BaseService} from './base-service';
import {StateRepository} from '../repositories';
import {StateDTO} from '../interfaces/dto/state';

export class StateService extends BaseService {
  private repository = new StateRepository();

  public async create(data: {name: string; country: string}): Promise<any> {
    return this.repository.create(data);
  }

  public async findByName(name: string): Promise<StateDTO> {
    return this.repository.findByName(name);
  }

  public async findByCountryId(country: string): Promise<Array<StateDTO>> {
    return this.repository.findByCountryId(country);
  }
}
