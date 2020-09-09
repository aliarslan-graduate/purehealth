import {BaseService} from './base-service';
import {FormsRepository} from '../repositories/forms';
import {FormsDTO} from '../interfaces/dto/forms';

export class FormsService extends BaseService {
  private repository = new FormsRepository();
  // public list(): Promise<UserDTO[]> {
  //   return this.repository.find({});
  // }

  public async create(data: {name: string; data: string}): Promise<any> {
    return this.repository.create(data);
  }

  public async update(data: {
    id: string;
    name: string;
    data: string;
  }): Promise<FormsDTO> {
    return this.repository.update(data);
  }

  public async findFormRecords(): Promise<any[]> {
    return this.repository.findForms();
  }

  public async findFormRecord(id: string): Promise<FormsDTO> {
    return this.repository.findForm(id);
  }

  public async deleteFormRecord(id: string): Promise<FormsDTO> {
    return this.repository.delete(id);
  }
}
