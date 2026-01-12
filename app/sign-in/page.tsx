import { Users } from "lucide-react";
import type { Metadata } from "next";
import SignInForm from "@/app/components/SignInForm";

export const metadata: Metadata = {
  title: "Sign In - CircleKit",
  description:
    "Sign in to your CircleKit account to manage your group support sessions and connect with participants.",
  alternates: {
    canonical: "https://circlekit.vercel.app/sign-in",
  },
};

export default function SignInPage() {
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
            <span className="text-gray-600">New to CircleKit?</span>
            <a
              href="/sign-up"
              className="text-teal-600 font-medium hover:text-teal-700"
            >
              Sign Up Free
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Sign in to manage your support groups
            </p>

            <SignInForm />
          </div>

          <p className="text-center text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-teal-600 hover:underline">
              Sign up free
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
