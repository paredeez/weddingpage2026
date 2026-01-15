"use client";

export default function Home() {
  const reservationLink =
    "https://www.marriott.com/event-reservations/reservation-link.mi?id=1768277720060&key=GRP&app=resvlink&fbclid=IwY2xjawPVt3VleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEen42QAJrQR5CShOCNRqMmJ6gVPSEnRBhebOh7YzNcjXK5agCQWmUfWMmAQlo_aem_EBLdJOXgyw5YiqqqwxF5UQ&_branch_match_id=1406406953040176418&_branch_referrer=H4sIAAAAAAAAAxWPy1KDMABF%2F4ZlwSigzjCdwIAWpZB0SosbBtLwKiEQoqFd%2BO3i7p45m3MbKcf5VdeLcdywQoiWS7khnOmCzn07XLercNb98w9aVZK%2BvTg7lYGlK1SSyse0p%2B%2F4G4KgL9FuiZB7JwPuXBYoEryMX9BXEPp0eAIIhgJh0zs0sbfHU8RCq06Tgz9gt6Fl3NjZfU%2B684dZ1B46sWN1ihhEPc8LynLf%2FbyE8bm%2BKTNrp2lSS2Aekba2PNjWM7BtGxiGZWhXenPecKL9ClrR9c1Q56XgaqbC8RrBGf0DPiHRQvAAAAA%3D";

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Letter opening animation overlay */}
      <div className="letter-container pointer-events-none fixed inset-0 z-50">
        {/* Left panel */}
        <div className="letter-left absolute left-0 top-0 h-full w-1/2 bg-white shadow-[4px_0_30px_rgba(0,0,0,0.1)]">
          {/* Decorative inner edge */}
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e0e0e0] to-transparent" />
          {/* Subtle emboss pattern */}
          <div className="absolute inset-0 flex items-center justify-end pr-12 opacity-20">
            <svg
              className="h-32 w-32 text-[#d0d0d0]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
        {/* Right panel */}
        <div className="letter-right absolute right-0 top-0 h-full w-1/2 bg-white shadow-[-4px_0_30px_rgba(0,0,0,0.1)]">
          {/* Decorative inner edge */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#e0e0e0] to-transparent" />
          {/* Subtle emboss pattern */}
          <div className="absolute inset-0 flex items-center justify-start pl-12 opacity-20">
            <svg
              className="h-32 w-32 text-[#d0d0d0]"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top decorative circle */}
        <div className="animate-pulse-subtle absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-[#f5f5f5] to-transparent" />
        {/* Bottom decorative circle */}
        <div
          className="animate-pulse-subtle absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#fafafa] to-transparent"
          style={{ animationDelay: "2s" }}
        />
        {/* Center subtle glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-[#f8f8f8] via-transparent to-transparent opacity-60" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl text-center">
          {/* Wedding rings icon */}
          <div className="animate-hidden animate-fade-in delay-[1800ms] mb-10 flex justify-center">
            <svg
              className="animate-float h-14 w-14 text-[#1a1a1a]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ animationDelay: "2s" }}
            >
              <circle
                cx="35"
                cy="50"
                r="18"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="65"
                cy="50"
                r="18"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Names */}
          <h1 className="animate-hidden animate-slide-left delay-[2000ms] font-display text-6xl font-light italic tracking-wide text-[#1a1a1a] sm:text-7xl md:text-8xl">
            Giorgia
          </h1>
          <div className="animate-hidden animate-scale-in delay-[2200ms] my-4 flex items-center justify-center">
            <span className="font-display text-3xl font-light text-[#c0c0c0]">
              &
            </span>
          </div>
          <h1 className="animate-hidden animate-slide-right delay-[2000ms] font-display text-6xl font-light italic tracking-wide text-[#1a1a1a] sm:text-7xl md:text-8xl">
            James
          </h1>

          {/* Date divider */}
          <div className="animate-hidden animate-fade-in delay-[2400ms] divider mt-12 mb-14">
            <span className="font-body text-xs font-medium uppercase tracking-[0.4em] text-[#6b6b6b]">
              17th October 2026
            </span>
          </div>

          {/* Accommodation section */}
          <div className="animate-hidden animate-fade-in-up delay-[2500ms] rounded-sm border border-[#e5e5e5] bg-[#fafafa]/50 p-8 shadow-[0_4px_40px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:p-12">
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
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
