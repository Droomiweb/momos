'use server'
import connectDB from "@/config/mongodb"
import foodModel from "@/models/foodModel"

export async function insFood(req,res){

    console.log(req)
    try{
        await connectDB();
        console.log(req)
       
        const insertt = await foodModel.create(req)
        if(insertt){
            console.log("successfull")
            return ('done')
        }else{
            return("Something went wrong")
        }
    }catch(error){
        return(error.message)
    }
}