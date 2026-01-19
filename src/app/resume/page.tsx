import Link from "next/link";
import { resumeData } from "@/data/resume";
import { ResumePrintButton } from "@/components/resume-print-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Mitchell Opatowsky",
  description: "Full-Stack Engineer & Technical Product Manager with 9+ years of experience.",
};

export default function ResumePage() {

  return (
    <section className="min-h-screen bg-white text-black py-12 md:py-20 print:py-0">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 print:px-6">
        {/* Back to Home & Print Button - Hide on print */}
        <div className="flex items-center justify-between mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
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
          <ResumePrintButton />
        </div>

        {/* Page Title - Hide on print */}
        <div className="mb-8 print:hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
            Resume
          </h1>
          <p className="text-gray-600 text-sm">
            Click "Download PDF" or use your browser's print function to save as PDF
          </p>
        </div>

        {/* Resume Content */}
        <div className="text-black">
          {/* Header */}
          <div className="mb-8 print:mb-4">
            <div className="border-4 border-gray-300 rounded-none p-6 print:p-4 print:border-2 mb-6 print:mb-4">
              <h1 className="text-5xl md:text-6xl font-bold text-center mb-2 print:text-4xl">
                {resumeData.name}
              </h1>
            </div>
            <p className="text-center text-sm text-gray-700 mb-4 print:mb-3 font-semibold">
              {resumeData.title}
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-gray-700 border-t border-b border-gray-300 py-3 print:py-2 print:text-xs">
              <span>
                <strong>Address:</strong> Austin, TX
              </span>
              <span>•</span>
              <span>
                <strong>Phone:</strong> {resumeData.phone}
              </span>
              <span>•</span>
              <span>
                <strong>Email:</strong> {resumeData.email}
              </span>
              <span>•</span>
              <span>
                <strong>Web:</strong> {resumeData.website}
              </span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-8 print:mb-6 relative">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-3 h-3 rounded-full bg-amber-600 border-2 border-white shadow-sm"></div>
                <div className="w-1 bg-amber-600 flex-grow mt-2" style={{ minHeight: "200px" }}></div>
              </div>
              <div className="flex-grow pb-6 print:pb-4">
                <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-3 print:text-base">
                  Profile
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {resumeData.profile}
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mb-8 print:mb-6 relative">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-3 h-3 rounded-full bg-amber-600 border-2 border-white shadow-sm"></div>
                <div className="w-1 bg-amber-600 flex-grow mt-2" style={{ minHeight: "800px" }}></div>
              </div>
              <div className="flex-grow pb-6 print:pb-4">
                <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-4 print:text-base">
                  Work Experience
                </h2>
                <div className="space-y-6 print:space-y-4">
                  {resumeData.experience.map((job, idx) => (
                    <div
                      key={idx}
                      className="pb-6 print:pb-4 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <div>
                          <h3 className="font-bold text-gray-900 print:text-sm">
                            {job.title}
                          </h3>
                          <p className="text-sm font-semibold text-gray-700">
                            {job.company}
                          </p>
                        </div>
                        <span className="text-xs text-gray-600 whitespace-nowrap">
                          {job.startDate} – {job.endDate}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">
                        {job.location}
                      </p>
                      <ul className="space-y-2">
                        {job.description.map((point, pidx) => (
                          <li
                            key={pidx}
                            className="text-sm text-gray-700 flex gap-3 print:text-xs"
                          >
                            <span className="text-amber-600 flex-shrink-0 mt-0.5">
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8 print:mb-6 relative">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-3 h-3 rounded-full bg-amber-600 border-2 border-white shadow-sm"></div>
                <div className="w-1 bg-amber-600 flex-grow mt-2" style={{ minHeight: "150px" }}></div>
              </div>
              <div className="flex-grow pb-6 print:pb-4">
                <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-4 print:text-base">
                  Education
                </h2>
                <div className="space-y-6 print:space-y-4">
                  {resumeData.education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="pb-6 print:pb-4 border-b border-gray-200 last:border-b-0"
                    >
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <div>
                          <h3 className="font-bold text-gray-900 print:text-sm">
                            {edu.degree}
                          </h3>
                          <p className="text-sm font-semibold text-gray-700">
                            {edu.school}
                          </p>
                        </div>
                        <span className="text-xs text-gray-600 whitespace-nowrap">
                          {edu.graduationDate}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2 uppercase tracking-wide">
                        {edu.location}
                      </p>
                      <ul className="space-y-1">
                        {edu.details.map((detail, didx) => (
                          <li
                            key={didx}
                            className="text-sm text-gray-700 flex gap-3 print:text-xs"
                          >
                            <span className="text-amber-600 flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-8 print:mb-6 relative">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-3 h-3 rounded-full bg-amber-600 border-2 border-white shadow-sm"></div>
                <div className="w-1 bg-amber-600 flex-grow mt-2" style={{ minHeight: "400px" }}></div>
              </div>
              <div className="flex-grow pb-6 print:pb-4">
                <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-4 print:text-base">
                  Skills
                </h2>
                <div className="space-y-4 print:space-y-3">
                  {resumeData.skills.map((skillGroup, idx) => (
                    <div
                      key={idx}
                      className="pb-4 print:pb-3 border-b border-gray-200 last:border-b-0"
                    >
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                        {skillGroup.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, sidx) => (
                          <span
                            key={sidx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Section */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div className="w-3 h-3 rounded-full bg-amber-600 border-2 border-white shadow-sm"></div>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900 mb-4 print:text-base">
                  Other
                </h2>
                <div className="space-y-4 print:space-y-3">
                  {resumeData.other.map((section, idx) => (
                    <div
                      key={idx}
                      className="pb-4 print:pb-3 border-b border-gray-200 last:border-b-0"
                    >
                      <p className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                        {section.title}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item, iidx) => (
                          <li
                            key={iidx}
                            className="text-sm text-gray-700 flex gap-3 print:text-xs"
                          >
                            <span className="text-amber-600 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
