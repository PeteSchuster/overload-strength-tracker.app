import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

const benefits = [
  {
    title: 'Log from your wrist',
    description: 'Scroll the Digital Crown to set weight, tap to log. No phone needed between sets.',
    icon: '⌚',
  },
  {
    title: 'Glanceable progress',
    description: "See today's exercises with your last weight displayed. Know exactly where you left off.",
    icon: '📊',
  },
  {
    title: 'Instant sync',
    description: 'Everything syncs between Watch and iPhone. Log on either device — your data is always current.',
    icon: '🔄',
  },
]

export default function WhyTheWatch() {
  return (
    <section className="px-6 py-20 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
            Why the <span className="text-accent">Watch</span>?
          </h2>
          <p className="mt-4 text-text-secondary text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed">
            Between sets, the last thing you want is to unlock your phone, find the app, and tap through screens.
            Overload puts your workout on your wrist.
          </p>
        </FadeIn>

        {/* Watch screenshots */}
        <FadeIn delay={150} className="mt-12 flex justify-center gap-6 md:gap-10">
          <div className="w-[140px] md:w-[200px]">
            <img
              src={`${base}screenshots/watch-today.png`}
              alt="Apple Watch showing today's exercises"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-[140px] md:w-[200px]">
            <img
              src={`${base}screenshots/watch-log.png`}
              alt="Apple Watch logging a set"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </FadeIn>

        {/* Benefit cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <FadeIn key={benefit.title} delay={i * 100 + 200}>
              <div className="bg-bg-tertiary border border-bg-quaternary rounded-2xl p-6 md:p-8 h-full">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed">{benefit.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
