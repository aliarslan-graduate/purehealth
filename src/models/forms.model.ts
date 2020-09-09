import mongoose from 'mongoose';

const formSchema = new mongoose.Schema(
  {
    name: {type: String, unique: true},
    data: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

declare interface formDocument extends mongoose.Document {
  name: string;
  data: string;
}

export const MongooseForms = mongoose.model<formDocument>('Forms', formSchema);
