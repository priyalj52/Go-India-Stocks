// app/api/route.jsx
import { NextResponse } from "next/server";
import data from '../../utils/data'; // Fixed the path and removed the extra double quote

export async function GET() {
    try {
        // Assuming you want to send all items
        return NextResponse.json(data); // Return the NextResponse
    } catch (err) {
        // Handle errors if needed
        console.error("Error:", err);
        return NextResponse.error(err.message, { status: 500 }); // Return error response
    }
}
