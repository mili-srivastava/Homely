import User from "@/models/User";
import connectDB from "@/utils/mongoose";
import { NextRequest, NextResponse } from "next/server"

connectDB();

export const POST = async (request:NextRequest) =>{
    try {
        const reqBody = await request.json();

        // destructring
        const {email, password} = reqBody;
        
        // check if user exists
         const user =  await User.findOne({email});

         // if user does not exist
         if (!user){
                return NextResponse.json({status:404, message:"User not found"})
         }

         // check if password is correct

         if(password===user.password){
            return NextResponse.json({status:200, message:"Login successful"})
         }

         return NextResponse.json({status:401, message:"Invalid credentials"})
        
    } catch (error:any) {
        return NextResponse.json({status:500, message:error.message})
    }


}

export const GET =() =>{
   return NextResponse.json({status:405, message:"Invalid Request"});
}