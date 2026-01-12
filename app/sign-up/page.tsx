import { Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - CircleKit",
  description:
    "Create your free CircleKit account and start running professional group support sessions with evidence-based templates.",
  alternates: {
    canonical: "https://circlekit.vercel.app/sign-up",
  },
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Users className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">CircleKit</span>
          </a>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Already have an account?</span>
            <a
              href="/sign-in"
              className="text-teal-600 font-medium hover:text-teal-700"
            >
              Sign In
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Create Your Free Account
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Start running professional support groups today
            </p>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  I want to...
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-teal-500">
                    <input
                      type="radio"
                      name="role"
                      value="facilitator"
                      className="text-teal-600"
                      defaultChecked
                    />
                    <div>
                      <span className="font-medium text-gray-900">
                        Run support groups
                      </span>
                      <p className="text-sm text-gray-600">
                        I am a facilitator, coach, or peer specialist
                      </p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-teal-500">
                    <input
                      type="radio"
                      name="role"
                      value="participant"
                      className="text-teal-600"
                    />
                    <div>
                      <span className="font-medium text-gray-900">
                        Join a support group
                      </span>
                      <p className="text-sm text-gray-600">
                        I am looking for group support
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              By signing up, you agree to our{" "}
              <a href="/terms" className="text-teal-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-teal-600 hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6">
            CircleKit is free to start. No credit card required.
          </p>
        </div>
      </main>
    </div>
  );
}
