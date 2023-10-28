import User from "@/models/User";
import connectDB from "@/utils/mongoose"
import { NextRequest, NextResponse } from "next/server";

connectDB();
export const POST = async(request:NextRequest) =>{
    try {
        const reqBody = await request.json();

    //destructuring
    const {name, email, password, phone, address} = reqBody;

    // check if user already exists
    const user =  await User.findOne({email});

    if(user){
        return NextResponse.json({status:400, message:"User already exists"})
    }

    // create new user
    const newUser = new User({
        name:name,
        email:email,
        password:password,
        phone:phone,
        address:address
    });

    // save user
    const savedUser = await newUser.save();

    return NextResponse.json({status:201, message:"User created successfully", savedUser})
        
    } catch (error:any) {
        return NextResponse.json({status:500, message:error.message})
    }
    


}

export const GET =() =>{
   return NextResponse.json({status:405, message:"Invalid Request"});
}