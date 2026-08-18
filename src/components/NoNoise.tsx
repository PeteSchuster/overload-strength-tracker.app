import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

const points = [
  { text: 'No social feeds', color: 'bg-pop-rose' },
  { text: 'No AI coach', color: 'bg-pop-blue' },
  { text: 'No $14.99/month', color: 'bg-pop-amber' },
  { text: 'No account required', color: 'bg-pop-teal' },
]

export default function NoNoise() {
  return (
    <section className="px-6 py-20 md:py-32 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Screenshot */}
          <FadeIn className="md:w-1/2 flex justify-center">
            <div className="w-[260px] md:w-[300px]">
              <img
                src={`${base}screenshots/iphone-home.png`}
                alt="Overload today view — clean, minimal interface"
                width={660}
                height={1434}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[2rem] shadow-2xl"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                No noise.
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                Just a clean, dark interface that does one thing well: helps you lift more than last time.
                Your data stays on your device — no cloud, no account, no tracking.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <ul className="mt-8 space-y-3">
                {points.map((point) => (
                  <li key={point.text} className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${point.color} flex-shrink-0`} />
                    <span className="text-text-primary text-lg">{point.text}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
