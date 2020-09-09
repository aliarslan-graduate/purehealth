import {FormsDTO} from '../interfaces/dto/forms';
import {CosmosProvider} from '../providers';
import {Container} from '@azure/cosmos';
import {MongooseForms} from '../models/forms.model';

export class FormsRepository {
  static async getCollection() {
    const instance = CosmosProvider.getInstance();
    await instance.createCollection('forms');
    return instance.getCollection('forms');
  }

  async create(data: {name: string; data: string}): Promise<any> {
    const result = await MongooseForms.create(data);
    return {
      name: result.name,
      data: result.data,
    };
  }

  // async update(data: {
  //   id: string;
  //   name: string;
  //   data: string;
  // }): Promise<FormsDTO> {
  //   const collection = await FormsRepository.getCollection();
  //   const doc = await FormsRepository.getItem(data.id, collection);
  //   doc.data = data.data;
  //   doc.name = data.name;
  //   const {resource} = await collection.item(data.id).replace(doc);

  //   return {
  //     name: resource.name,
  //     data: resource.data,
  //   };
  // }

  async update(data: {
    id: string;
    name: string;
    data: string;
  }): Promise<FormsDTO> {
    const updateData = {
      name: data.name,
      data: data.data,
    };
    const result = await MongooseForms.findByIdAndUpdate(data.id, updateData);
    return {
      name: result.name,
      data: result.data,
    };
  }

  static async getItem(itemId: string, collection: Container) {
    const {resource} = await collection.item(itemId).read();
    return resource;
  }

  async query(query: string): Promise<any[]> {
    const collection = FormsRepository.getCollection();
    const {resources} = await (await collection).items.query(query).fetchAll();
    return resources;
  }

  async delete(id: string) {
    const result = await MongooseForms.findByIdAndDelete(id);
    return result;
  }

  async findForm(id: string) {
    const result = await MongooseForms.findById(id);
    return result;
  }

  async findForms() {
    const result = await MongooseForms.find();
    return result;
  }
}
