import FadeIn from './FadeIn'

const base = import.meta.env.BASE_URL

export default function ProgressiveOverload() {
  return (
    <section className="px-6 py-20 md:py-32 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Progressive overload, <span className="text-accent">simplified</span>
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-6 text-text-secondary text-lg leading-relaxed">
                One number matters: the weight you hit failure on set 1.
                Overload tracks that number for every exercise and shows you the trend.
                When you break a PR, you'll know.
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="mt-4 text-text-secondary text-lg leading-relaxed">
                Reps moving around? Switch the chart to <span className="text-text-primary font-medium">estimated 1RM</span> and
                every session becomes comparable — so a set of 172.5&nbsp;&times;&nbsp;8 reads as the win it is
                over 175&nbsp;&times;&nbsp;5.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              {/* Metric selector, mirroring the in-app control */}
              <div className="mt-8 inline-flex gap-1 p-1 bg-bg-secondary rounded-[10px]">
                <span className="px-4 py-1.5 text-sm rounded-lg text-text-tertiary">Weight</span>
                <span className="px-4 py-1.5 text-sm rounded-lg bg-bg-tertiary text-text-primary">Est. 1RM</span>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div className="mt-4 flex gap-4">
                <div className="bg-bg-secondary border border-bg-tertiary rounded-xl p-4 flex-1">
                  <p className="text-text-tertiary text-xs uppercase tracking-wider">Last 1RM</p>
                  <p className="text-2xl font-mono font-medium text-text-primary mt-1">218.5 <span className="text-text-tertiary text-sm">lbs</span></p>
                </div>
                <div className="bg-bg-secondary border border-bg-tertiary rounded-xl p-4 flex-1">
                  <p className="text-text-tertiary text-xs uppercase tracking-wider">Best 1RM</p>
                  <p className="text-2xl font-mono font-medium text-accent mt-1">218.5 <span className="text-accent-muted text-sm">lbs</span></p>
                </div>
                <div className="bg-bg-secondary border border-bg-tertiary rounded-xl p-4 flex-1">
                  <p className="text-text-tertiary text-xs uppercase tracking-wider">Trend</p>
                  <p className="text-2xl font-mono font-medium text-success-green mt-1">+3.2 <span className="text-success-green/60 text-sm">lbs</span></p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Screenshot */}
          <FadeIn delay={150} className="md:w-1/2 flex justify-center">
            <div className="w-[260px] md:w-[300px]">
              <img
                src={`${base}screenshots/iphone-progress.png`}
                alt="Overload progress chart showing set 1 failure weight and estimated 1RM over time"
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
