"use client";

export default function Home() {
  const reservationLink =
    "https://www.marriott.com/event-reservations/reservation-link.mi?id=1768277720060&key=GRP&app=resvlink&fbclid=IwY2xjawPVt3VleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEen42QAJrQR5CShOCNRqMmJ6gVPSEnRBhebOh7YzNcjXK5agCQWmUfWMmAQlo_aem_EBLdJOXgyw5YiqqqwxF5UQ&_branch_match_id=1406406953040176418&_branch_referrer=H4sIAAAAAAAAAxWPy1KDMABF%2F4ZlwSigzjCdwIAWpZB0SosbBtLwKiEQoqFd%2BO3i7p45m3MbKcf5VdeLcdywQoiWS7khnOmCzn07XLercNb98w9aVZK%2BvTg7lYGlK1SSyse0p%2B%2F4G4KgL9FuiZB7JwPuXBYoEryMX9BXEPp0eAIIhgJh0zs0sbfHU8RCq06Tgz9gt6Fl3NjZfU%2B684dZ1B46sWN1ihhEPc8LynLf%2FbyE8bm%2BKTNrp2lSS2Aekba2PNjWM7BtGxiGZWhXenPecKL9ClrR9c1Q56XgaqbC8RrBGf0DPiHRQvAAAAA%3D";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf8f5]">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left floral accent */}
        <div className="floating-element absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-[#e8ddd0] to-transparent opacity-60" />
        {/* Bottom right floral accent */}
        <div
          className="floating-element absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-tl from-[#d4c4b0] to-transparent opacity-40"
          style={{ animationDelay: "3s" }}
        />
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8967a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl text-center">
          {/* Wedding rings icon */}
          <div className="mb-8 flex justify-center">
            <svg
              className="h-16 w-16 text-[#b8967a]"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="35"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="65"
                cy="50"
                r="20"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M50 35 C55 42, 55 58, 50 65"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Names */}
          <h1 className="font-display text-5xl font-light italic tracking-wide text-[#2c2c2c] sm:text-6xl md:text-7xl">
            Giorgia
          </h1>
          <div className="my-3 flex items-center justify-center">
            <span className="font-display text-2xl text-[#b8967a]">&</span>
          </div>
          <h1 className="font-display text-5xl font-light italic tracking-wide text-[#2c2c2c] sm:text-6xl md:text-7xl">
            James
          </h1>

          {/* Date */}
          <div className="divider mt-10 mb-12">
            <span className="font-body text-sm font-medium uppercase tracking-[0.3em] text-[#8b9a7d]">
              17th October 2026
            </span>
          </div>

          {/* Accommodation section */}
          <div className="rounded-lg border border-[#e8ddd0] bg-white/70 p-8 shadow-sm backdrop-blur-sm sm:p-12">
            <h2 className="font-display text-3xl font-medium text-[#2c2c2c] sm:text-4xl">
              Stay with Us
            </h2>

            <p className="mx-auto mt-6 max-w-md font-body text-base leading-relaxed text-[#5a5a5a]">
              We would be delighted for you to join us at{" "}
              <span className="font-medium text-[#2c2c2c]">The Ritz-Carlton</span>{" "}
              for our celebration.
            </p>

            <p className="mx-auto mt-4 max-w-md font-body text-base leading-relaxed text-[#5a5a5a]">
              A special rate has been arranged for our guests—please click the
              link below to reserve your room.
            </p>

            {/* Event details */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#b8967a]"
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
                <span className="font-body text-sm text-[#5a5a5a]">
                  Saturday, 17th October 2026
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#b8967a]"
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
                <span className="font-body text-sm text-[#5a5a5a]">
                  The Ritz-Carlton
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href={reservationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-reserve inline-flex items-center gap-3 rounded-full bg-[#b8967a] px-10 py-4 font-body text-sm font-medium uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#9a7a62] hover:shadow-xl"
              >
                <span>Reserve Your Room</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Closing message */}
          <p className="mt-12 font-display text-xl italic text-[#8b9a7d]">
            We look forward to sharing this unforgettable day with you.
          </p>

          {/* Footer flourish */}
          <div className="mt-8 flex justify-center">
            <svg
              className="h-8 w-24 text-[#d4c4b0]"
              viewBox="0 0 100 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15 Q25 0, 50 15 Q75 30, 100 15"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
              <circle cx="50" cy="15" r="3" fill="currentColor" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
