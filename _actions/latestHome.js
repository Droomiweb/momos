'use server'
import connectDB from "@/config/mongodb"
import foodModel from "@/models/foodModel"


export default async function homeRaw(param) {
   
    if(param=="hometry1"){
        try{
            await connectDB();
            const dataImg = JSON.parse(JSON.stringify(await foodModel.find({})
            .sort({ _id: -1 }) // Sort by _id in descending order
            .limit(3))); //selecting the last3 docs
            
            // throw new Error('Error')
            
            console.log("done")
            return {dataImg}
        } catch(error){
            return{errdata:error.message}
        }
    
    }else if(param == "hometry2"){
        try{
            await connectDB();
            const dataImg = JSON.parse(JSON.stringify(await foodModel.find({})
            .sort({ _id: -1 }) // Sort by _id in descending order
            .skip(3)           // Skip the first 3 documents
            .limit(3)          // Limit the result to the next 3 documents
        
        )); //selecting the last3 docs
            
            // throw new Error('Error')
            
            console.log("done")
            return {dataImg}
        } catch(error){
            return{errdata:error.message}
        }
    }else if(param == "orderPg"){
        try{
            await connectDB();
            const dataImg = JSON.parse(JSON.stringify(await foodModel.find({})
            .sort({ _id: -1 })         // Limit the result to the next 3 documents
        
        )); //selecting the last3 docs
            
            // throw new Error('Error')
            
            console.log("done")
            return {dataImg}
        } catch(error){
            return{errdata:error.message}
        }
    }
}
