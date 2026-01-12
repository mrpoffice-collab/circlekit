import { Users, Calendar, CreditCard, FileText, Video, BarChart3 } from "lucide-react";

// Server Component - NO 'use client' - content renders in HTML for SEO
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">CircleKit</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/templates" className="text-gray-700 hover:text-teal-600">
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

      <main>
        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Run Professional Support Groups Without the Hassle
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              CircleKit is a free platform for peer specialists, coaches, and facilitators
              to run structured group support sessions with evidence-based templates,
              scheduling, and payment processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/sign-up"
                className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-700"
              >
                Start Your First Group Free
              </a>
              <a
                href="/templates"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:border-gray-400"
              >
                Browse Templates
              </a>
            </div>
          </div>
        </section>

        {/* Problem/Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                <p className="text-gray-700 text-lg">
                  You know how to help people - you have the empathy, the experience,
                  and maybe even the certifications. But running a professional support
                  group means juggling Zoom links, payment collection, scheduling,
                  and creating session materials from scratch. It takes 10+ hours just
                  to set up one cohort.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                <p className="text-gray-700 text-lg">
                  CircleKit gives you everything in one place: CBT-based session templates
                  that you can customize, automatic scheduling with reminders, integrated
                  payment processing, and a participant portal. Launch your first group
                  in under an hour, not weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Everything You Need to Run Support Groups
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <FileText className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Evidence-Based Templates
                </h3>
                <p className="text-gray-700">
                  8 professionally designed programs for grief, divorce recovery,
                  anxiety, self-esteem, and more. Each includes facilitator guides,
                  worksheets, and homework assignments.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Calendar className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Automated Scheduling
                </h3>
                <p className="text-gray-700">
                  Set your recurring schedule once. Participants get automatic
                  reminders 24 hours and 1 hour before each session. Never chase
                  down attendees again.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <CreditCard className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Built-In Payments
                </h3>
                <p className="text-gray-700">
                  Participants pay through the platform. You set your price,
                  we handle the processing. Weekly payouts directly to your bank.
                  No more awkward Venmo requests.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Video className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Video Integration
                </h3>
                <p className="text-gray-700">
                  Connect your Zoom account and meetings are created automatically.
                  Join links appear in the participant dashboard. Support in-person
                  and hybrid formats too.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <Users className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Participant Portal
                </h3>
                <p className="text-gray-700">
                  Your participants get their own dashboard to see upcoming sessions,
                  download worksheets, submit homework, and track their progress
                  through the program.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <BarChart3 className="w-10 h-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Track Your Impact
                </h3>
                <p className="text-gray-700">
                  See attendance rates, program completion, and revenue at a glance.
                  Know exactly how many people you have helped and how your practice
                  is growing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Ready-to-Use Session Templates
            </h2>
            <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
              Each template includes week-by-week session outlines, facilitator guides,
              participant worksheets, and homework assignments based on proven
              therapeutic frameworks.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <span className="text-sm font-medium text-teal-600">8 Weeks</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                  Grief and Loss Support
                </h3>
                <p className="text-gray-700 mb-4">
                  Help adults who have lost a loved one process their grief through
                  structured CBT-based sessions.
                </p>
                <span className="text-sm text-gray-600">Framework: CBT + Grief-Informed Care</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <span className="text-sm font-medium text-teal-600">6 Weeks</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                  Life Transitions
                </h3>
                <p className="text-gray-700 mb-4">
                  Support people navigating career changes, relocations, empty nest,
                  and other major life shifts.
                </p>
                <span className="text-sm text-gray-600">Framework: ACT + Solution-Focused</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <span className="text-sm font-medium text-teal-600">6 Weeks</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                  Building Self-Esteem
                </h3>
                <p className="text-gray-700 mb-4">
                  Guide participants through evidence-based exercises to build
                  confidence and self-worth.
                </p>
                <span className="text-sm text-gray-600">Framework: CBT + Self-Compassion</span>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/templates"
                className="text-teal-600 font-semibold hover:text-teal-700"
              >
                View All 8 Templates →
              </a>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Built for People Who Want to Help Others
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Peer Support Specialists</h3>
                <p className="text-gray-700 text-sm">
                  Certified specialists who have their own lived experience and want
                  to help others.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Life Coaches</h3>
                <p className="text-gray-700 text-sm">
                  Coaches who want to add group programs to their individual practice.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Grief Counselors</h3>
                <p className="text-gray-700 text-sm">
                  Bereavement specialists running support groups for those who have
                  lost loved ones.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Recovery Leaders</h3>
                <p className="text-gray-700 text-sm">
                  People in recovery who want to lead structured support groups
                  for others on the same journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Critical for SEO and AEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What is CircleKit?
                </h3>
                <p className="text-gray-700">
                  CircleKit is a free platform for peer specialists, coaches, and
                  non-licensed facilitators to run structured group support sessions.
                  We provide everything you need: evidence-based session templates,
                  scheduling with automatic reminders, integrated payment processing,
                  and a participant portal. Think of it as Teachable for group therapy -
                  we handle the technology so you can focus on helping people.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How do I start a support group with CircleKit?
                </h3>
                <p className="text-gray-700">
                  Starting is simple: Sign up as a facilitator, choose from our 8
                  CBT-based templates (grief, divorce, anxiety, self-esteem, and more),
                  customize the group name and description, set your pricing, pick your
                  schedule, and share your registration link. Most facilitators launch
                  their first group in under an hour.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Is CircleKit for licensed therapists only?
                </h3>
                <p className="text-gray-700">
                  No, CircleKit is specifically designed for peer support specialists,
                  life coaches, and non-licensed facilitators who want to help others
                  through group support. Licensed therapists can also use CircleKit,
                  but our templates and tools are built for peer-led support groups,
                  not clinical therapy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  How much does CircleKit cost?
                </h3>
                <p className="text-gray-700">
                  CircleKit is free to start. We only take a small platform fee (10%)
                  from participant payments when you actually earn money. There are no
                  monthly subscriptions required to get started. This means you can
                  launch your first group with zero upfront cost - you only pay when
                  participants pay you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Is CircleKit HIPAA compliant?
                </h3>
                <p className="text-gray-700">
                  CircleKit is designed for peer support groups, not medical treatment.
                  We use secure, encrypted infrastructure and follow best practices for
                  data protection. However, since we are not a healthcare provider,
                  HIPAA does not apply to most peer support use cases. If you are a
                  licensed clinician, you are responsible for ensuring your own
                  compliance requirements are met.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  What templates are available?
                </h3>
                <p className="text-gray-700">
                  CircleKit includes 8 professionally designed templates: Grief and Loss
                  Support (8 weeks), Divorce Recovery (6 weeks), Step-Parenting Adjustment
                  (8 weeks), Caregiver Burnout Prevention (6 weeks), Life Transitions
                  (6 weeks), General Anxiety Management (8 weeks), Building Self-Esteem
                  (6 weeks), and Substance Use Recovery Support (12 weeks). Each template
                  includes session outlines, facilitator guides, worksheets, and homework.
                </p>
              </div>
            </div>

            {/* FAQ JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is CircleKit?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "CircleKit is a free platform for peer specialists, coaches, and non-licensed facilitators to run structured group support sessions. We provide everything you need: evidence-based session templates, scheduling with automatic reminders, integrated payment processing, and a participant portal.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I start a support group with CircleKit?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sign up as a facilitator, choose from our 8 CBT-based templates, customize the group details, set your pricing, pick your schedule, and share your registration link. Most facilitators launch their first group in under an hour.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is CircleKit for licensed therapists only?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No, CircleKit is specifically designed for peer support specialists, life coaches, and non-licensed facilitators. Licensed therapists can also use CircleKit, but our templates are built for peer-led support groups, not clinical therapy.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How much does CircleKit cost?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "CircleKit is free to start. We only take a small platform fee (10%) from participant payments when you actually earn money. No monthly subscriptions required to get started.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is CircleKit HIPAA compliant?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "CircleKit is designed for peer support groups, not medical treatment. We use secure, encrypted infrastructure. Since we are not a healthcare provider, HIPAA does not apply to most peer support use cases.",
                      },
                    },
                  ],
                }),
              }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Help More People?
            </h2>
            <p className="text-teal-100 text-lg mb-8">
              Join hundreds of facilitators who have launched their support group
              practice with CircleKit. Start for free today.
            </p>
            <a
              href="/sign-up"
              className="inline-block px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-lg hover:bg-teal-50"
            >
              Create Your First Group
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-teal-400" />
                <span className="text-lg font-bold text-white">CircleKit</span>
              </div>
              <p className="text-gray-400 text-sm">
                The group support session platform for facilitators who want to
                help others heal.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/templates" className="hover:text-white">Templates</a></li>
                <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="/features" className="hover:text-white">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/help" className="hover:text-white">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>CircleKit is a platform for peer support groups and is not a substitute for professional medical advice.</p>
            <p className="mt-2">If you are in crisis, please call 988 (Suicide and Crisis Lifeline).</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
