interface ResumeTimelineSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ResumeTimelineSection({ title, children }: ResumeTimelineSectionProps) {
  return (
    <div className="mb-8 print:mb-6 flex gap-8 pb-8 print:pb-6 border-b border-gray-200">
      {/* Left: Title */}
      <div className="w-48 flex-shrink-0 hidden md:block">
        <h2 className="text-2xl font-serif font-bold uppercase tracking-wider text-gray-900 sticky top-32 print:text-lg">
          {title}
        </h2>
      </div>

      {/* Middle: Timeline */}
      <div className="relative flex-shrink-0">
        <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-amber-600 shadow-sm -ml-1.5"></div>
        <div className="w-1 bg-amber-600 h-full -ml-0.5"></div>
      </div>

      {/* Right: Content */}
      <div className="flex-grow pr-8 print:pr-0">
        <h2 className="md:hidden text-lg font-bold uppercase tracking-widest text-gray-900 mb-3 print:text-base">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
