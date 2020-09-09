import mongoose from 'mongoose';

const StateSchema = new mongoose.Schema(
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

declare interface StateDocument extends mongoose.Document {
  name: string;
  country: string;
}

export const MongooseState = mongoose.model<StateDocument>(
  'State',
  StateSchema
);
