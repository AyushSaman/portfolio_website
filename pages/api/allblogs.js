import Blogs from "../../models/Blogs"
import connectdb from "../../middleware/mongoose"

const handler = async (req,res)=>{
    let allBlogs = await Blogs.find({})
    res.status(200).json({ allBlogs })
}

export default connectdb(handler)