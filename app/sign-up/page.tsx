import { Users } from "lucide-react";
import type { Metadata } from "next";
import SignUpForm from "@/app/components/SignUpForm";

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

            <SignUpForm />

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
