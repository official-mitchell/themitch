"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface AnimatedBorderButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function AnimatedBorderButton({
  href,
  children,
  className = "",
}: AnimatedBorderButtonProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center px-8 py-3 font-medium text-purple-400 overflow-hidden group transition-colors duration-300 ${className}`}
    >
      {/* Border background that fills on hover */}
      <div className="absolute inset-0 border border-purple-400 rounded-lg group-hover:bg-purple-400 transition-colors duration-300" />

      {/* Text with color change on hover */}
      <span className="relative z-10 group-hover:text-[#0a0118] transition-colors duration-300">
        {children}
      </span>
    </Link>
  );
}
