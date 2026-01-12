import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { cookies } from "next/headers";

async function getCurrentUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;
  if (!sessionId) return null;

  return prisma.user.findUnique({
    where: { id: sessionId },
  });
}

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (user.role === "FACILITATOR") {
      // Get groups created by this facilitator
      const groups = await prisma.group.findMany({
        where: { facilitatorId: user.id },
        include: {
          template: true,
          _count: { select: { enrollments: true } },
        },
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json(groups);
    } else {
      // Get groups this participant is enrolled in
      const enrollments = await prisma.enrollment.findMany({
        where: { userId: user.id },
        include: {
          group: {
            include: {
              template: true,
              facilitator: { select: { name: true } },
            },
          },
        },
        orderBy: { enrolledAt: "desc" },
      });
      return NextResponse.json(enrollments.map((e) => e.group));
    }
  } catch (error) {
    console.error("Failed to fetch groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    if (user.role !== "FACILITATOR") {
      return NextResponse.json(
        { error: "Only facilitators can create groups" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const {
      name,
      description,
      templateId,
      format,
      maxParticipants,
      price,
      startDate,
      dayOfWeek,
      timeOfDay,
      timezone,
    } = body;

    // Validate required fields
    if (!name || !templateId || !startDate) {
      return NextResponse.json(
        { error: "Name, template, and start date are required" },
        { status: 400 }
      );
    }

    // Check template exists
    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    // Create group
    const group = await prisma.group.create({
      data: {
        name,
        description: description || template.description,
        facilitatorId: user.id,
        templateId,
        format: format || "ONLINE",
        maxParticipants: maxParticipants || 10,
        price: price || 0,
        status: "OPEN",
        startDate: new Date(startDate),
        dayOfWeek: dayOfWeek || new Date(startDate).getDay(),
        timeOfDay: timeOfDay || "19:00",
        timezone: timezone || "America/New_York",
      },
      include: { template: true },
    });

    return NextResponse.json(group, { status: 201 });
  } catch (error) {
    console.error("Failed to create group:", error);
    return NextResponse.json(
      { error: "Failed to create group" },
      { status: 500 }
    );
  }
}
