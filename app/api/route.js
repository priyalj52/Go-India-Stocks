import { NextResponse } from "next/server";
import data from "../../utils/data";

export async function GET() {
  try {
    return NextResponse.json(data);
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.error(err.message, { status: 500 });
  }
}
