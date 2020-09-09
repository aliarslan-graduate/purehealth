import mongoose from 'mongoose';

const LabSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'City',
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

declare interface LabDocument extends mongoose.Document {
  name: string;
  city: string;
}

export const MongooseLab = mongoose.model<LabDocument>('Lab', LabSchema);
