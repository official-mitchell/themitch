import Link from "next/link";
import { ContactForm } from "@/components/sections/contact-form";
import { Toaster } from "sonner";

export const metadata = {
  title: "Contact | Mitchell Opatowsky",
  description: "Get in touch about full-time roles, fractional work, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Toaster position="top-right" />
      <section className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          {/* Back to Home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-12"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-xl text-gray-400">
              Have an opportunity or question? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Form Section */}
          <div className="relative">
            {/* Gradient background glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-100" />

            {/* Form Container */}
            <div className="relative bg-gradient-to-br from-[#2C1250]/50 to-[#1a0b2e]/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-8 lg:p-12">
              <ContactForm />
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-16 pt-16 border-t border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Email */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email
                </h3>
                <p className="text-gray-400">
                  <a href="mailto:mitchellopatowsky@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                    mitchellopatowsky@gmail.com
                  </a>
                </p>
              </div>

              {/* Response Time */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Response Time
                </h3>
                <p className="text-gray-400">
                  Typically within 24 hours during business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
