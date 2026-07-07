/**
 * Shown in place of native phone-collecting forms while A2P_REVIEW_MODE is on.
 * Directs applicants to the GHL text-opt-in widget (floating chat button) or to
 * call/email directly, so the site keeps converting without a native lead form.
 */
export default function A2PReviewNotice({ title = 'Apply by Text or Phone' }: { title?: string }) {
  return (
    <div className="gradient-border p-8 rounded-2xl">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-rogue-silver text-sm mb-6 leading-relaxed">
        To get started, tap the{' '}
        <span className="text-rogue-red font-semibold">chat button</span> in the bottom-right
        corner and send us a text &mdash; a recruiter replies fast. Prefer to talk? Reach us
        directly below.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href="tel:+17737183282"
          className="flex-1 text-center bg-rogue-red hover:bg-rogue-red-light text-white font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all duration-300"
        >
          Call (773) 718-3282
        </a>
        <a
          href="mailto:hr@roguecarrierinc.com"
          className="flex-1 text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold uppercase tracking-wider py-3.5 rounded-lg transition-all duration-300"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
