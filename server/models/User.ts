import mongoose, { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  googleId: string;
  name: string;
  imageUrl: string;
  posts: (string | Schema.Types.ObjectId)[];
}

const userSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

export default model<IUser>("User", userSchema);
