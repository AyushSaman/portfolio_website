import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  {type: String, unique: true},
  shortDesc: {type: String, unique: true},
  slug: {type: String, unique: true}
},{ timestamps: true });

//   body:   {type: String},
//   comments: [{ body: String, date: Date }],
// mongoose.models = {}

export default mongoose.models.Blogs || mongoose.model("Blogs", blogSchema)