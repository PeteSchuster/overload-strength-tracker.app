import FadeIn from './FadeIn'

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
          <a
            href="#"
            className="inline-block mt-8 hover:opacity-80 transition-opacity"
            aria-label="Download on the App Store"
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
              alt="Download on the App Store"
              className="h-[56px]"
            />
          </a>
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
