import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

const features = [
  {
    title: 'Full library backup',
    description:
      'One file holds every exercise and every set. Restore it on a new phone and your history comes back — no account, no server, no waiting on a sync.',
    color: 'text-pop-teal',
    icon: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />,
  },
  {
    title: 'Pounds or kilos',
    description:
      'Switch units whenever you like. Weights snap back to increments you can actually load, and every set is stored in one canonical unit so the numbers never drift.',
    color: 'text-accent',
    icon: (
      <>
        <rect x="3" y="9" width="18" height="10" rx="2" />
        <path d="M7 9V6.5M17 9V6.5M12 9v10" />
      </>
    ),
  },
  {
    title: 'CSV export',
    description:
      'Export any exercise — date, weight, reps and estimated 1RM — and take it to a spreadsheet whenever you want to dig deeper.',
    color: 'text-pop-blue',
    icon: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zm0 0v5h5M9 17h6" />,
  },
  {
    title: 'Apple Health',
    description:
      'Optional, off by default. Turn it on and logged sets are written to Health as strength-training workouts. Overload never reads anything back.',
    color: 'text-pop-rose',
    icon: <path d="M12 20s-7-4.5-7-9.5A4 4 0 0 1 12 7a4 4 0 0 1 7 3.5C19 15.5 12 20 12 20z" />,
  },
]

export default function YourData() {
  return (
    <section className="px-6 py-20 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
            Your data, <span className="text-accent">yours to keep</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed">
            Nothing leaves your phone unless you send it somewhere. That only works if getting your
            training history out is easy — so it is.
          </p>
        </FadeIn>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Feature list */}
          <div className="md:w-1/2 space-y-4">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100 + 100}>
                <div className="bg-bg-secondary border border-bg-tertiary rounded-2xl p-5 md:p-6">
                  <div className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${feature.color}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </svg>
                    <h3 className="text-lg font-semibold text-text-primary">{feature.title}</h3>
                  </div>
                  <p className="mt-2 text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Screenshot */}
          <FadeIn delay={150} className="md:w-1/2 flex justify-center">
            <div className="w-[260px] md:w-[300px]">
              <img
                src={`${base}screenshots/iphone-menu.png`}
                alt="Overload menu — units, Apple Health toggle, and back up or restore all data"
                width={660}
                height={1434}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-[2rem] shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
