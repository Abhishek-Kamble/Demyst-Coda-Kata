import mongoose from "mongoose";

const accountSoftwareListSchema = mongoose.Schema({
  softId: { type: Number, required: true },
  softName: { type: String, required: true },
});

export default mongoose.model("AccountingSoftware", accountSoftwareListSchema);
