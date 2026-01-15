// Updated: Transformed from Figma Make Testimonials component to Next.js App Router structure
"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-[#0a0118] to-[#16051f] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What People <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Say About Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from founders and leaders who've partnered with me
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main testimonial card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
            
            <div className="relative bg-gradient-to-br from-[#2C1250]/80 to-[#1a0b2e]/80 backdrop-blur-xl rounded-3xl p-10 lg:p-16 border border-purple-500/20">
              {/* Quote icon */}
              <div className="absolute top-8 left-8">
                <div className={`p-4 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-2xl shadow-lg`}>
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-16 mb-12">
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-6">
                  {/* Avatar */}
                  <div className="relative group/avatar">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${testimonials[activeIndex].gradient} rounded-full blur opacity-60 group-hover/avatar:opacity-100 transition-opacity`} />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and role */}
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-purple-300 text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between border-t border-purple-500/20 pt-8">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all ${
                        index === activeIndex 
                          ? 'w-8 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full' 
                          : 'w-2 h-2 bg-purple-500/30 rounded-full hover:bg-purple-500/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="group/btn p-3 bg-[#2C1250] border border-purple-500/50 rounded-xl hover:bg-purple-900/50 transition-all"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-white group-hover/btn:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="group/btn p-3 bg-[#2C1250] border border-purple-500/50 rounded-xl hover:bg-purple-900/50 transition-all"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
