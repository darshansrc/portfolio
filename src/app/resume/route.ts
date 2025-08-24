import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: NextRequest) {
  try {
    // Path to the resume PDF in the public directory
    const resumePath = path.join(process.cwd(), "public", "resume.pdf");

    // Check if the file exists
    if (!fs.existsSync(resumePath)) {
      return new NextResponse("Resume not found", { status: 404 });
    }

    // Read the PDF file
    const pdfBuffer = fs.readFileSync(resumePath);

    // Return the PDF with appropriate headers
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="resume.pdf"',
        "Cache-Control": "public, max-age=3600", // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
