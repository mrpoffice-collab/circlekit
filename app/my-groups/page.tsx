import { Users, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";

export const metadata: Metadata = {
  title: "My Groups - CircleKit",
  description: "View your enrolled support groups and upcoming sessions.",
  robots: { index: false, follow: false },
};

async function getUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get("session")?.value;
  if (!sessionId) return null;

  return prisma.user.findUnique({
    where: { id: sessionId },
  });
}

async function getEnrollments(userId: string) {
  return prisma.enrollment.findMany({
    where: { userId },
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
}

export default async function MyGroupsPage() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const enrollments = await getEnrollments(user.id);

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
            <a href="/api/auth" className="text-gray-600 hover:text-gray-900">
              Sign Out
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Groups</h1>
          <p className="text-gray-600 mt-1">
            View your enrolled support groups and upcoming sessions
          </p>
        </div>

        {enrollments.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No groups yet
            </h3>
            <p className="text-gray-600 mb-4">
              You haven&apos;t joined any support groups yet
            </p>
            <a
              href="/"
              className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Find a Group
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {enrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      enrollment.status === "ACTIVE"
                        ? "bg-green-100 text-green-700"
                        : enrollment.status === "COMPLETED"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {enrollment.status}
                  </span>
                  <span className="text-sm text-gray-600">
                    {enrollment.group.format}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {enrollment.group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {enrollment.group.template.name} •{" "}
                  {enrollment.group.template.programLength} weeks
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  Facilitated by {enrollment.group.facilitator.name}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(enrollment.group.startDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {enrollment.group.timeOfDay}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
