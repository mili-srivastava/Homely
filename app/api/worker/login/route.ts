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
    const { email, password } = reqBody;

    //check if worker already exists
    const worker = await Worker.findOne({ email });

    if (!worker) {
      return NextResponse.json({
        status: 400,
        message: "Worker does not exists",
      });
    }

    //compare password
    const isMatch = await bcrypt.compare(password, worker.password);

    if (isMatch) {
      return NextResponse.json({
        status: 200,
        message: "Login successful",
      });
    }

    return NextResponse.json({
      status: 400,
      message: "Invalid credentials",
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.message });
  }
};

export const GET = () => {
  return NextResponse.json({ status: 405, message: "Invalid Request" });
};
