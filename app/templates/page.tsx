import { Users, Clock, FileText } from "lucide-react";
import type { Metadata } from "next";
import prisma from "@/lib/db";

export const metadata: Metadata = {
  title: "Session Templates - CircleKit",
  description:
    "Browse evidence-based group support session templates for grief, divorce, anxiety, self-esteem and more. Each includes facilitator guides and participant worksheets.",
  alternates: {
    canonical: "https://circlekit.vercel.app/templates",
  },
};

async function getTemplates() {
  return prisma.template.findMany({
    where: { isPublic: true },
    orderBy: { name: "asc" },
  });
}

export default async function TemplatesPage() {
  const templates = await getTemplates();

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
            <a href="/templates" className="text-teal-600 font-medium">
              Templates
            </a>
            <a
              href="/sign-in"
              className="px-4 py-2 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50"
            >
              Sign In
            </a>
            <a
              href="/sign-up"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Get Started Free
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Evidence-Based Session Templates
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {templates.length} professionally designed programs with week-by-week
            session outlines, facilitator guides, participant worksheets, and
            homework assignments based on proven therapeutic frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded">
                  {template.category}
                </span>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Clock className="w-4 h-4" />
                  {template.programLength} weeks
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <FileText className="w-4 h-4" />
                  {template.sessionDuration} min
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {template.name}
              </h2>
              <p className="text-gray-700 mb-4">{template.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Framework: {template.framework}
                </span>
                <a
                  href="/sign-up"
                  className="text-teal-600 font-medium hover:text-teal-700"
                >
                  Use Template →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/sign-up"
            className="inline-block px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700"
          >
            Start Using Templates Free
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>CircleKit - The group support session platform for facilitators</p>
        </div>
      </footer>
    </div>
  );
}
