import mongoose from "mongoose";

const connectdb = handler => (req,res) => {
    // mongoose.connect(process.env.Mongo_Url);
    console.log(process.env.Mongo_Url);
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.Mongo_Url).then(()=>{
        console.log(`successfully connected`);
        }).catch((e)=>{
        console.log(`not connected`);
        });
    return handler(req,res);
}
export default connectdb;

