import mongoose from 'mongoose';
import {dbConfig} from '../config';

export class MongoProvider {
  static async init() {
    const connectionString = dbConfig.connectionString;
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
