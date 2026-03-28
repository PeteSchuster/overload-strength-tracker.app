import FadeIn from './FadeIn'
import AppStoreBadge from './AppStoreBadge'

export default function CtaFooter() {
  return (
    <section className="px-6 py-20 md:py-32 bg-bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to lift <span className="text-accent">smarter</span>?
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="mt-4 text-text-secondary text-lg leading-relaxed">
            Download Overload and start tracking your strength from your wrist.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <AppStoreBadge className="mt-8" />
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-bg-tertiary">
        <p className="text-text-tertiary text-sm text-center">
          &copy; {new Date().getFullYear()} Overload. All rights reserved.
        </p>
      </div>
    </section>
  )
}
