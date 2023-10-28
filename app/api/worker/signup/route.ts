import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Worker from "@/models/Worker";
import connectDB from "@/utils/mongoose";
import * as bcrypt from "bcryptjs";

connectDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();

    //destructuring
    const { name, email, password, phone, address } = reqBody;

    //check if worker already exists
    const worker = await Worker.findOne({ email });

    if (worker) {
      return NextResponse.json({
        status: 400,
        message: "Worker already exists",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new worker
    const newWorker = new Worker({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone,
      address: address,
    });

    //save worker
    const savedWorker = await newWorker.save();
    return NextResponse.json({
      status: 201,
      message: "Worker created successfully",
      savedWorker,
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.message });
  }
};


export const GET = async (request: NextRequest) => {
    return NextResponse.json({ status: 200, message: "Invalid Request" });
};