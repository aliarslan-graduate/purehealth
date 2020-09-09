import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema(
  {
    name: {type: String, unique: true, required: true},
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

declare interface CountryDocument extends mongoose.Document {
  name: string;
}

export const MongooseCountry = mongoose.model<CountryDocument>(
  'Country',
  CountrySchema
);
