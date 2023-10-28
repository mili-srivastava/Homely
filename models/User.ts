import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    middleName: {
      type: String,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  phone: {
    code: {
      type: String,
      default: "+91",
      trim: true,
    },
    number: {
      type: Number,
      trim: true,
      unique: true,
    },
  },

  address: {
    house: {
      type: String,
      trim: true,
    },

    area: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    country: {
      type: String,
      default: "India",
      trim: true,
    },
  },
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
