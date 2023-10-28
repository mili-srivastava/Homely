import mongoose from "mongoose";

const WorkerSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    code: {
      type: String,
      required: true,
      default: "+91",
    },
    number: {
      type: Number,
      required: true,
    },
  },

  address: {
    house: {
      type: String,
    },
    area: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      required: true,
      default: "India",
    },
  },
});

export default mongoose.models.Worker ||
  mongoose.model("Worker", WorkerSchema, "workers");
