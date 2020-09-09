import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema(
  {
    name: {type: String, unique: true, required: true},
    country: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Country',
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

declare interface CityDocument extends mongoose.Document {
  name: string;
  country: string;
}

export const MongooseCity = mongoose.model<CityDocument>('City', CitySchema);
