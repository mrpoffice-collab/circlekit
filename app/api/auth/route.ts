import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { cookies } from "next/headers";

// Simple email-based auth for MVP
// In production, use Clerk or proper auth with password hashing

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, role, action } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (action === "signup") {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return NextResponse.json(
          { error: "User already exists. Please sign in." },
          { status: 400 }
        );
      }

      // Create user
      const user = await prisma.user.create({
        data: {
          email,
          name: name || email.split("@")[0],
          role: role === "facilitator" ? "FACILITATOR" : "PARTICIPANT",
          clerkId: `local_${Date.now()}`, // Placeholder for non-Clerk auth
        },
      });

      // If facilitator, create profile
      if (role === "facilitator") {
        await prisma.facilitatorProfile.create({
          data: {
            userId: user.id,
            username: email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, ""),
          },
        });
      }

      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set("session", user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return NextResponse.json({
        success: true,
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
      });
    }

    if (action === "signin") {
      // Find user
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return NextResponse.json(
          { error: "User not found. Please sign up first." },
          { status: 404 }
        );
      }

      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set("session", user.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return NextResponse.json({
        success: true,
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
      });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get("session")?.value;

    if (!sessionId) {
      return NextResponse.json({ user: null });
    }

    const user = await prisma.user.findUnique({
      where: { id: sessionId },
      include: { facilitatorProfile: true },
    });

    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        facilitatorProfile: user.facilitatorProfile,
      },
    });
  } catch (error) {
    console.error("Session check error:", error);
    return NextResponse.json({ user: null });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("session");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
