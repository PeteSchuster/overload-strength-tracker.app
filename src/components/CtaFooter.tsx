import FadeIn from './FadeIn'
import AppStoreBadge from './AppStoreBadge'

export default function CtaFooter() {
  return (
    <section className="px-6 py-20 md:py-32 bg-bg-primary">
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
        <FadeIn delay={250}>
          <p className="mt-4 text-text-tertiary text-sm">
            Free · Requires iOS 17 or later · Apple Watch app requires watchOS 10 or later
          </p>
        </FadeIn>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-bg-tertiary flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-text-tertiary text-sm">
          &copy; {new Date().getFullYear()} Overload. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="https://discord.gg/fTp3mQeyw8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Support
          </a>
          <a
            href="/privacy.html"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            Privacy
          </a>
          <a
            href="https://apps.apple.com/us/app/overload-strength-tracker/id6761222145"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            App Store
          </a>
        </nav>
      </div>
    </section>
  )
}
