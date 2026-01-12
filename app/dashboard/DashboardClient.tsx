"use client";

import { useState } from "react";
import { Plus, Users, Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  programLength: number;
  sessionDuration: number;
  framework: string;
}

interface Group {
  id: string;
  name: string;
  description: string;
  format: string;
  maxParticipants: number;
  price: number;
  status: string;
  startDate: string;
  timeOfDay: string;
  template: Template;
  _count: { enrollments: number };
}

interface DashboardClientProps {
  groups: Group[];
  templates: Template[];
}

export default function DashboardClient({
  groups,
  templates,
}: DashboardClientProps) {
  const router = useRouter();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCreateGroup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          description: formData.get("description"),
          templateId: formData.get("templateId"),
          format: formData.get("format"),
          maxParticipants: parseInt(formData.get("maxParticipants") as string),
          price: parseFloat(formData.get("price") as string),
          startDate: formData.get("startDate"),
          timeOfDay: formData.get("timeOfDay"),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create group");
        setLoading(false);
        return;
      }

      setShowCreateModal(false);
      router.refresh();
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Groups Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Your Groups</h2>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            <Plus className="w-5 h-5" />
            Create Group
          </button>
        </div>

        {groups.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No groups yet
            </h3>
            <p className="text-gray-600 mb-4">
              Create your first support group to get started
            </p>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              Create Your First Group
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        group.status === "OPEN"
                          ? "bg-green-100 text-green-700"
                          : group.status === "IN_PROGRESS"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {group.status}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">{group.format}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {group.template.name} • {group.template.programLength} weeks
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {group._count.enrollments}/{group.maxParticipants}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(group.startDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {group.timeOfDay}
                  </div>
                </div>
                {group.price > 0 && (
                  <p className="text-teal-600 font-medium mt-2">
                    ${group.price}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Create New Group
              </h2>
            </div>

            <form onSubmit={handleCreateGroup} className="p-6 space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Template
                </label>
                <select
                  name="templateId"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                >
                  <option value="">Select a template</option>
                  {templates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name} ({template.programLength} weeks)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Group Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g., Monday Evening Grief Support"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Describe your group..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Format
                  </label>
                  <select
                    name="format"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                  >
                    <option value="ONLINE">Online</option>
                    <option value="IN_PERSON">In Person</option>
                    <option value="HYBRID">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Max Participants
                  </label>
                  <input
                    type="number"
                    name="maxParticipants"
                    defaultValue={10}
                    min={2}
                    max={50}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    name="timeOfDay"
                    defaultValue="19:00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={0}
                  min={0}
                  step={0.01}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-gray-900"
                />
                <p className="text-sm text-gray-600 mt-1">
                  Set to 0 for free groups
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
                >
                  {loading ? "Creating..." : "Create Group"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
