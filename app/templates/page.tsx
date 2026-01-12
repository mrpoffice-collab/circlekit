import { Users, Clock, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Session Templates - CircleKit",
  description:
    "Browse 8 evidence-based group support session templates for grief, divorce, anxiety, self-esteem and more. Each includes facilitator guides and participant worksheets.",
  alternates: {
    canonical: "https://circlekit.vercel.app/templates",
  },
};

const templates = [
  {
    name: "Grief and Loss Support",
    category: "Grief",
    weeks: 8,
    duration: 90,
    framework: "CBT + Grief-Informed Care",
    description:
      "Help adults who have lost a loved one process their grief through structured sessions covering understanding grief, naming emotions, challenging unhelpful thoughts, and moving forward.",
  },
  {
    name: "Divorce Recovery",
    category: "Life Transitions",
    weeks: 6,
    duration: 90,
    framework: "CBT + Solution-Focused",
    description:
      "Support individuals navigating divorce with sessions on emotional processing, co-parenting strategies, identity rebuilding, and creating a new life chapter.",
  },
  {
    name: "Step-Parenting Adjustment",
    category: "Family",
    weeks: 8,
    duration: 90,
    framework: "CBT + Family Systems",
    description:
      "Guide step-parents through the challenges of blended families, including boundary setting, building relationships with stepchildren, and managing family dynamics.",
  },
  {
    name: "Caregiver Burnout Prevention",
    category: "Wellness",
    weeks: 6,
    duration: 60,
    framework: "CBT + Self-Compassion",
    description:
      "Help caregivers recognize burnout signs, set healthy boundaries, practice self-care, and build support systems while caring for loved ones.",
  },
  {
    name: "Life Transitions",
    category: "Life Transitions",
    weeks: 6,
    duration: 90,
    framework: "ACT + Solution-Focused",
    description:
      "Support people navigating major life changes like career shifts, relocations, retirement, or empty nest with skills for adaptation and growth.",
  },
  {
    name: "General Anxiety Management",
    category: "Mental Health",
    weeks: 8,
    duration: 90,
    framework: "CBT",
    description:
      "Teach evidence-based techniques for managing anxiety including cognitive restructuring, exposure exercises, relaxation skills, and worry management.",
  },
  {
    name: "Building Self-Esteem",
    category: "Personal Growth",
    weeks: 6,
    duration: 90,
    framework: "CBT + Self-Compassion",
    description:
      "Guide participants through exercises to challenge negative self-talk, identify strengths, set boundaries, and develop a healthier self-image.",
  },
  {
    name: "Substance Use Recovery Support",
    category: "Recovery",
    weeks: 12,
    duration: 90,
    framework: "CBT + Motivational Interviewing",
    description:
      "Provide ongoing support for individuals in recovery with sessions on trigger management, relapse prevention, building healthy habits, and creating a sober support network.",
  },
];

export default function TemplatesPage() {
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
            Each template includes week-by-week session outlines, facilitator
            guides, participant worksheets, and homework assignments based on
            proven therapeutic frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {templates.map((template) => (
            <div
              key={template.name}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded">
                  {template.category}
                </span>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Clock className="w-4 h-4" />
                  {template.weeks} weeks
                </div>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <FileText className="w-4 h-4" />
                  {template.duration} min
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
