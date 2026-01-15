// Updated: Refactored to match BlogPreview styling with framer-motion animations, gradient backgrounds, and consistent layout
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ContentMeta } from "@/lib/content";
import { CaseStudyCard } from "@/components/content/case-study-card";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface CaseStudiesPreviewProps {
  caseStudies: ContentMeta[];
  totalCaseStudies: number;
}

export function CaseStudiesPreview({ caseStudies, totalCaseStudies }: CaseStudiesPreviewProps) {
  if (caseStudies.length === 0) {
    return null; // Hide section if no case studies exist
  }

  return (
    <section
      id="case-studies-preview"
      className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#16051f] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.p
              className="text-sm uppercase tracking-widest text-purple-400"
              variants={itemVariants}
            >
              Featured Work
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white"
              variants={itemVariants}
            >
              Case{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Studies
              </span>
            </motion.h2>
          </div>

          {/* Case Studies Grid - 2x2 */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {caseStudies.slice(0, 4).map((caseStudy) => (
              <motion.div key={caseStudy.slug} variants={itemVariants}>
                <CaseStudyCard caseStudy={caseStudy} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
