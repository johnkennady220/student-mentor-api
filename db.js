import mongoose from "mongoose"

export async function createDB(){

    const params = {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    try {
        mongoose.connect("mongodb+srv://student:aQQ4DrqRHD2GPTHn@cluster0.27n3btx.mongodb.net/?retryWrites=true&w=majority",params)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);  
    }
}
createDB();