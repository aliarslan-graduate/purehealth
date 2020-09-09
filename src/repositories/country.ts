import {CountryDTO} from '../interfaces/dto/country';
import {Container} from '@azure/cosmos';
import {MongooseCountry} from '../models';

export class CountryRepository {
  async create(data: {name: string}): Promise<any> {
    const result = await MongooseCountry.create(data);
    return {
      id: result.id,
    };
  }

  async findByName(name: string) {
    const result = await MongooseCountry.findOne({name});
    return result;
  }

  async findById(id: string) {
    const result = await MongooseCountry.findById(id);
    return result;
  }

  // async update(data: {
  //   id: string;
  //   name: string;
  //   data: string;
  // }): Promise<FormsDTO> {
  //   const collection = await CountryRepository.getCollection();
  //   const doc = await CountryRepository.getItem(data.id, collection);
  //   doc.data = data.data;
  //   doc.name = data.name;
  //   const {resource} = await collection.item(data.id).replace(doc);

  //   return {
  //     name: resource.name,
  //     data: resource.data,
  //   };
  // }

  static async getItem(itemId: string, collection: Container) {
    const {resource} = await collection.item(itemId).read();
    return resource;
  }

  // async query(query: string): Promise<any[]> {
  //   const collection = CountryRepository.getCollection();
  //   const {resources} = await (await collection).items.query(query).fetchAll();
  //   return resources;
  // }

  async delete(id: string) {
    const result = await MongooseCountry.findByIdAndDelete(id);
    return result;
  }

  async findForm(id: string) {
    const result = await MongooseCountry.findById(id);
    return result;
  }

  async getCountries(): Promise<Array<CountryDTO>> {
    const result = await MongooseCountry.find();
    return result;
  }
}
