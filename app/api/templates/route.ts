import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const templates = await prisma.template.findMany({
      where: { isPublic: true },
      orderBy: { name: "asc" },
    });
    return NextResponse.json(templates);
  } catch (error) {
    console.error("Failed to fetch templates:", error);
    return NextResponse.json(
      { error: "Failed to fetch templates" },
      { status: 500 }
    );
  }
}
