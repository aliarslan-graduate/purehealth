import {BaseService} from './base-service';
import {LabRepository} from '../repositories';
import {LabDTO} from '../interfaces/dto/lab';

export class LabService extends BaseService {
  private repository = new LabRepository();

  public async create(data: {name: string; city: string}): Promise<any> {
    return this.repository.create(data);
  }

  public async findByCity(name: string, city: string): Promise<LabDTO> {
    return this.repository.findByCity(name, city);
  }

  public async findByCityId(city: string): Promise<Array<LabDTO>> {
    return this.repository.findByCityId(city);
  }
}
