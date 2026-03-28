import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-bg-primary relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

      <FadeIn className="text-center max-w-4xl relative z-10">
        <div className="relative mx-auto mb-8 w-20 h-20 md:w-24 md:h-24">
          <div className="absolute inset-0 scale-[2.5] bg-accent/[0.08] rounded-full blur-2xl pointer-events-none" />
          <img
            src={`${base}app-icon.png`}
            alt="Overload app icon"
            className="relative w-full h-full rounded-[22%] shadow-lg"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          Track your strength.
          <br />
          <span className="text-accent">From your wrist.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Overload is the minimalist workout tracker that lives on your Apple Watch.
          Log sets with the Digital Crown, see your progress at a glance, and keep your phone in your bag.
        </p>
      </FadeIn>

      {/* Screenshot showcase */}
      <FadeIn delay={200} className="mt-12 md:mt-16 relative z-10">
        <div className="flex items-end justify-center gap-4 md:gap-8">
          {/* Watch screenshot */}
          <div className="flex-shrink-0 w-[120px] md:w-[180px]">
            <img
              src={`${base}screenshots/watch-log.png`}
              alt="Overload on Apple Watch — logging a set"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* iPhone screenshot — center hero */}
          <div className="flex-shrink-0 w-[200px] md:w-[280px]">
            <img
              src={`${base}screenshots/iphone-log.png`}
              alt="Overload on iPhone — logging a set"
              className="w-full rounded-[2rem] shadow-2xl"
            />
          </div>

          {/* Watch screenshot */}
          <div className="flex-shrink-0 w-[120px] md:w-[180px]">
            <img
              src={`${base}screenshots/watch-today.png`}
              alt="Overload on Apple Watch — today's exercises"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </FadeIn>

      {/* App Store badge */}
      <FadeIn delay={400} className="mt-10 relative z-10">
        <a
          href="#"
          className="inline-block hover:opacity-80 transition-opacity"
          aria-label="Download on the App Store"
        >
          <img
            src={`${base}app-store-badge.svg`}
            alt="Download on the App Store"
            className="h-[52px]"
          />
        </a>
      </FadeIn>
    </section>
  )
}
