"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/IMG_1247.jpeg",
  "/images/IMG_9581.jpeg",
  "/images/IMG_1333.jpeg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageCount = images.length; // 3 images
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageCount);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const reservationLink =
    "https://www.marriott.com/event-reservations/reservation-link.mi?id=1768277720060&key=GRP&app=resvlink&fbclid=IwY2xjawPVt3VleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEen42QAJrQR5CShOCNRqMmJ6gVPSEnRBhebOh7YzNcjXK5agCQWmUfWMmAQlo_aem_EBLdJOXgyw5YiqqqwxF5UQ&_branch_match_id=1406406953040176418&_branch_referrer=H4sIAAAAAAAAAxWPy1KDMABF%2F4ZlwSigzjCdwIAWpZB0SosbBtLwKiEQoqFd%2BO3i7p45m3MbKcf5VdeLcdywQoiWS7khnOmCzn07XLercNb98w9aVZK%2BvTg7lYGlK1SSyse0p%2B%2F4G4KgL9FuiZB7JwPuXBYoEryMX9BXEPp0eAIIhgJh0zs0sbfHU8RCq06Tgz9gt6Fl3NjZfU%2B684dZ1B46sWN1ihhEPc8LynLf%2FbyE8bm%2BKTNrp2lSS2Aekba2PNjWM7BtGxiGZWhXenPecKL9ClrR9c1Q56XgaqbC8RrBGf0DPiHRQvAAAAA%3D";

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Letter opening animation overlay */}
      <div className="letter-container pointer-events-none fixed inset-0 z-50">
        <div className="letter-left absolute left-0 top-0 h-full w-1/2 bg-white shadow-[4px_0_30px_rgba(0,0,0,0.1)]">
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e0e0e0] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-end pr-12 opacity-20">
            <svg className="h-32 w-32 text-[#d0d0d0]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        <div className="letter-right absolute right-0 top-0 h-full w-1/2 bg-white shadow-[-4px_0_30px_rgba(0,0,0,0.1)]">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e0e0e0] to-transparent" />
          <div className="absolute inset-0 flex items-center justify-start pl-12 opacity-20">
            <svg className="h-32 w-32 text-[#d0d0d0]" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="animate-pulse-subtle absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#f0f0f0] to-transparent" />
        <div className="animate-pulse-subtle absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#f5f5f5] to-transparent" style={{ animationDelay: "2s" }} />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#f8f8f8] via-transparent to-transparent opacity-60" />
        
        {/* Decorative corner flourishes */}
        <svg className="absolute left-6 top-6 h-24 w-24 text-[#e8e8e8]" viewBox="0 0 100 100" fill="none">
          <path d="M0 50 Q0 0, 50 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q0 0, 70 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
        <svg className="absolute right-6 top-6 h-24 w-24 rotate-90 text-[#e8e8e8]" viewBox="0 0 100 100" fill="none">
          <path d="M0 50 Q0 0, 50 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q0 0, 70 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-6 left-6 h-24 w-24 -rotate-90 text-[#e8e8e8]" viewBox="0 0 100 100" fill="none">
          <path d="M0 50 Q0 0, 50 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q0 0, 70 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
        <svg className="absolute bottom-6 right-6 h-24 w-24 rotate-180 text-[#e8e8e8]" viewBox="0 0 100 100" fill="none">
          <path d="M0 50 Q0 0, 50 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q0 0, 70 0" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>

        {/* Subtle diagonal lines pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              #000 30px,
              #000 31px
            )`
          }}
        />

        {/* Soft center vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(245,245,245,0.5)_70%,rgba(240,240,240,0.8)_100%)]" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-4xl text-center">
          
          {/* Photo Slideshow - Main Focus */}
          <div className="animate-hidden animate-fade-in delay-[1800ms] relative mx-auto mb-8 aspect-[4/5] w-full max-w-[220px] overflow-hidden border-[6px] border-double border-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.15),0_8px_20px_rgba(0,0,0,0.1)]">
            
            {/* Images with crossfade */}
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Georgia and James - Photo ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Subtle vignette overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-black/5" />
          </div>

          {/* Names - Below Photos */}
          <div className="animate-hidden animate-fade-in-up delay-[2200ms] mb-6">
            <h1 className="font-display text-5xl font-light italic tracking-wider text-[#1a1a1a] sm:text-6xl md:text-7xl">
              Georgia
            </h1>
            <div className="my-2 flex items-center justify-center">
              <span className="font-display text-2xl font-light text-[#c0c0c0]">&</span>
            </div>
            <h1 className="font-display text-5xl font-light italic tracking-wider text-[#1a1a1a] sm:text-6xl md:text-7xl">
              James
            </h1>
          </div>

          {/* Date */}
          <div className="animate-hidden animate-fade-in delay-[2400ms] divider mt-6 mb-12">
            <span className="font-body text-xs font-medium uppercase tracking-[0.4em] text-[#6b6b6b]">
              17th October 2026
            </span>
          </div>

          {/* Accommodation section */}
          <div className="animate-hidden animate-fade-in-up delay-[2600ms] rounded-sm border border-[#e5e5e5] bg-[#fafafa]/50 p-8 shadow-[0_4px_40px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-12">
            <h2 className="font-display text-3xl font-normal tracking-wide text-[#1a1a1a] sm:text-4xl">
              Stay with Us
            </h2>

            <div className="mx-auto mt-2 h-px w-12 bg-gradient-to-r from-transparent via-[#d4d4d4] to-transparent" />

            <p className="mx-auto mt-8 max-w-md font-body text-[15px] leading-relaxed text-[#6b6b6b]">
              We would be delighted for you to join us at{" "}
              <span className="font-medium text-[#1a1a1a]">The Ritz-Carlton</span>{" "}
              for our celebration.
            </p>

            <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-[#6b6b6b]">
              A special rate has been arranged for our guests—please click the
              link below to reserve your room.
            </p>

            {/* Event details */}
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="group flex items-center gap-3 transition-all duration-300 hover:gap-4">
                <svg
                  className="h-4 w-4 text-[#9a9a9a] transition-colors duration-300 group-hover:text-[#1a1a1a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-body text-sm text-[#6b6b6b] transition-colors duration-300 group-hover:text-[#1a1a1a]">
                  Saturday, 17th October 2026
                </span>
              </div>
              <div className="group flex items-center gap-3 transition-all duration-300 hover:gap-4">
                <svg
                  className="h-4 w-4 text-[#9a9a9a] transition-colors duration-300 group-hover:text-[#1a1a1a]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="font-body text-sm text-[#6b6b6b] transition-colors duration-300 group-hover:text-[#1a1a1a]">
                  The Ritz-Carlton
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href={reservationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve inline-flex items-center gap-3 border border-[#1a1a1a] bg-[#1a1a1a] px-10 py-4 font-body text-xs font-medium uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
              >
                <span>Reserve Your Room</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Closing message */}
          <p className="animate-hidden animate-fade-in delay-[2800ms] mt-14 font-display text-xl font-light italic text-[#9a9a9a]">
            We look forward to sharing this unforgettable day with you.
          </p>

          {/* Footer flourish */}
          <div className="animate-hidden animate-fade-in delay-[2800ms] mt-10 flex justify-center">
            <svg
              className="h-6 w-20 text-[#d4d4d4]"
              viewBox="0 0 100 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15 Q25 5, 50 15 Q75 25, 100 15"
                stroke="currentColor"
                strokeWidth="0.75"
                fill="none"
              />
              <circle cx="50" cy="15" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
