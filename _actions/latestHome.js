'use server'
import connectDB from "@/config/mongodb"
import foodModel from "@/models/foodModel"


export default async function homeFood1() {
    try{
        await connectDB();
        const dataImg = JSON.parse(JSON.stringify(await foodModel.find({})
        .sort({ _id: -1 }) // Sort by _id in descending order
        .limit(3))); //selecting the last3 docs
        
        // throw new Error('Error')

        return {dataImg}
        console.log("done")
    } catch(error){
        return{errdata:error.message}
    }
}
