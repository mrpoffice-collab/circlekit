import { Users, Plus, FileText, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import DashboardClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard - CircleKit",
  description: "Manage your support groups and track participant progress.",
  robots: { index: false, follow: false },
};

async function getUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;
  if (!sessionId) return null;

  return prisma.user.findUnique({
    where: { id: sessionId },
    include: { facilitatorProfile: true },
  });
}

async function getGroups(userId: string) {
  return prisma.group.findMany({
    where: { facilitatorId: userId },
    include: {
      template: true,
      _count: { select: { enrollments: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

async function getTemplates() {
  return prisma.template.findMany({
    where: { isPublic: true },
    orderBy: { name: "asc" },
  });
}

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  if (user.role !== "FACILITATOR") {
    redirect("/my-groups");
  }

  const [groups, templates] = await Promise.all([
    getGroups(user.id),
    getTemplates(),
  ]);

  const totalParticipants = groups.reduce(
    (sum, g) => sum + g._count.enrollments,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Users className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">CircleKit</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Welcome, {user.name}</span>
            <form action="/api/auth" method="DELETE">
              <button
                type="submit"
                className="text-gray-600 hover:text-gray-900"
              >
                Sign Out
              </button>
            </form>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Facilitator Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your support groups and track progress
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {totalParticipants}
                </p>
                <p className="text-gray-600">Total Participants</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Calendar className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {groups.length}
                </p>
                <p className="text-gray-600">Active Groups</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <FileText className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {templates.length}
                </p>
                <p className="text-gray-600">Templates Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Client handles interactive parts */}
        <DashboardClient
          groups={JSON.parse(JSON.stringify(groups))}
          templates={JSON.parse(JSON.stringify(templates))}
        />
      </main>
    </div>
  );
}
