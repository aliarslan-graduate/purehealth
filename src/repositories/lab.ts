import {MongooseLab} from '../models';
import {LabDTO} from '../interfaces/dto/lab';

export class LabRepository {
  async create(data: {name: string; city: string}): Promise<any> {
    const result = await MongooseLab.create(data);
    return {
      id: result.id,
    };
  }

  async findByCity(name: string, city: string): Promise<LabDTO> {
    const result = await MongooseLab.findOne({name, city});
    return result;
  }

  async findByCityId(city: string): Promise<Array<LabDTO>> {
    const result = await MongooseLab.find({city});
    return result;
  }
}
