import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
  name:  {type: String,},
  email: {type: String,},
  subject: {type: String,},
  message: {type: String,}
},{ timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema)