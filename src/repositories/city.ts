import {CityDTO} from '../interfaces/dto/city';
import {MongooseCity} from '../models';

export class CityRepository {
  async create(data: {name: string; country: string}): Promise<any> {
    const result = await MongooseCity.create(data);
    return {
      id: result.id,
    };
  }

  async findByName(name: string): Promise<CityDTO> {
    const result = await MongooseCity.findOne({name});
    return result;
  }

  async findByCountryId(country: string): Promise<Array<CityDTO>> {
    const result = await MongooseCity.find({country});
    return result;
  }

  async findById(id: string): Promise<CityDTO> {
    const result = await MongooseCity.findById(id);
    return result;
  }
}
