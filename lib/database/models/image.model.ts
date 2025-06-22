import { Document,models, model, Schema } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width: number;
  height: number;
  config?: object; 
  transformationUrl?: string | URL;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  createdAt?: Date;
  updatedAt?: Date;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}

const ImageSchema = new Schema({
    title : {type : String, required : true},
    transformationType : {type : String, required : true},
    publicId: {type: String, required: true},
    secureUrl: { type: String, required: true},
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    config: { type: Object },
    transformationUrl: {type: URL},
    aspectRatio : { type: String},
    color: { type: String },
    prompt: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

const Image = models?.Image || model('Image', ImageSchema);

export default Image;