"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    question: "What kind of companies do you prefer working with?",
    answer:
      "I thrive in high-growth, innovative environments, particularly those seeking to dominate the market through cutting-edge technology. My expertise spans across Web 3.0, AI, SaaS, eCommerce, and CPGs—industries that benefit from agile strategies and forward-thinking execution. I'm especially drawn to smaller to mid-sized companies, where I can make a direct, substantial impact, driving strategy and execution.",
  },
  {
    question: "Are you open to remote work?",
    answer:
      "Yes, I am fully prepared for remote operations. Over the course of my career, I've led distributed teams across multiple time zones, ensuring seamless collaboration and communication. Remote environments allow me to maintain a flexible, global approach while leveraging digital tools and platforms to drive results.",
  },
  {
    question: "What roles are you currently interested in?",
    answer:
      "I am primarily targeting leadership roles such as Head of Product, Senior Technical Product Manager, Product Manager (Core), Product Marketing Manager, Head of Growth, and Head of Ecosystem Relations. I excel when I can bring a mix of strategy, operations, and execution to the table.",
  },
  {
    question: "What's your approach to launching a new product?",
    answer:
      "My approach is deeply rooted in deep competitive analysis, market and trend analysis, data-driven insights, exhaustive user research, and marketing/design personas. I start by identifying market gaps and crafting a strategy that ensures we capture and create value. From there, I focus on building cross-functional teams, ensuring tight coordination across product, marketing, sales, and development. My launch strategies maximize for stickiness and achieve market penetration allowing us to tactically introduce commercialization.",
  },
  {
    question: "Can you share some examples of your past successes?",
    answer:
      "Certainly. I have a dedicated section on my website that details case studies from previous missions, showcasing my ability to drive growth, secure funding, and bring innovative products to market. I have led Web 3.0 projects that raised millions in capital, scaled SaaS platforms, and executed product launch campaigns. You can find these detailed breakdowns in the Case Studies Section.",
  },
  {
    question: "What sets you apart from other candidates?",
    answer:
      "I bring the mindset of a commander—decisive, strategic, tactical, and relentlessly focused on outcomes. My experience spans both startup war rooms and high-level planning. I've been on the front lines of product management, frontend development, growth strategy, fundraising, and go-to-market execution, while also maintaining a strong technical foundation. This duality allows me to communicate effectively with technical teams while keeping business objectives at the forefront.",
  },
  {
    question: "How quickly are you able to step into a new role and make an impact?",
    answer:
      "I am fully prepared to deploy rapidly and begin making an impact within the first 30 days. My onboarding process is structured for quick immersion: I focus on aligning with the company's mission, identifying immediate opportunities for optimization, and setting a 90-day strategic action plan. My goal is to drive early wins while building a sustainable long-term strategy.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "You can reach me directly through the contact form below or connect with me via LinkedIn. I'm open to direct conversations with executive leadership, and I am always ready to discuss how I can bring value and leadership to your company. Let's explore how we can win together.",
  },
];

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a0118] via-[#1a0b2e] to-[#16051f] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Some Doubts
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-400">Your answers await right here</p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - CTA */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2C1250]/50 to-[#1a0b2e]/50 backdrop-blur-xl border border-purple-500/20 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Have any more questions or want to start collaborating?
                </h3>
                <p className="text-gray-400 mb-6">
                  Let's connect and explore how we can work together.
                </p>
              </div>
              <div>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all"
                >
                  Let's talk
                </Link>
                <p className="text-xs text-gray-500 mt-4">
                  Response time is typically around 12 hours
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-purple-500/20 overflow-hidden bg-gradient-to-br from-[#2C1250]/30 to-[#1a0b2e]/30 backdrop-blur-sm hover:border-purple-400/50 transition-colors"
                initial={false}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-600/5 transition-colors"
                >
                  <span className="text-left text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t border-purple-500/10 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
