import {StateDTO} from '../interfaces/dto/state';
import {MongooseState} from '../models';

export class StateRepository {
  async create(data: {name: string; country: string}): Promise<any> {
    const result = await MongooseState.create(data);
    return {
      id: result.id,
    };
  }

  async findByName(name: string): Promise<StateDTO> {
    const result = await MongooseState.findOne({name});
    return result;
  }

  async findByCountryId(country: string): Promise<Array<StateDTO>> {
    const result = await MongooseState.find({country});
    return result;
  }
}
