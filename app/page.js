import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] flex flex-col font-sans selection:bg-[#ff8a1f]/20">
      {/* Navigation */}
      <header className="px-6 py-8 flex justify-between items-center max-w-5xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[linear-gradient(130deg,#ffd447_0%,#ff8a1f_45%,#ff4e2f_100%)] text-white text-xl font-serif shadow-lg">
            P
          </div>
          <span className="text-2xl font-serif font-bold text-[#2b160f]">Pigeon Post</span>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="px-5 py-2 text-sm font-semibold text-[#2b160f] hover:text-[#ff8a1f] transition-colors">
            Log in
          </Link>
          <Link href="#" className="px-5 py-2 text-sm font-semibold bg-black text-white rounded-full hover:bg-black/80 transition-all shadow-sm">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto pb-20">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#ff8a1f]/10 text-[#7c2514] text-xs font-bold uppercase tracking-[0.1em] border border-[#ff8a1f]/20">
          Coming Soon
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2b160f] leading-[1.1] mb-8">
          Turn family photos into <span className="italic">weekly dispatches</span> in minutes.
        </h1>
        
        <p className="text-lg md:text-xl text-black/60 max-w-2xl mb-12 leading-relaxed">
          Pigeon Post helps you share the magic of your week with the people who care most. Just drop your photos, and we'll help you tell the story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href="#" className="flex-1 bg-black text-white text-lg font-bold py-4 rounded-2xl hover:bg-black/90 transition-all shadow-xl hover:scale-[1.02] active:scale-[0.98]">
            Join the beta
          </Link>
        </div>

        {/* Features Preview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-3xl bg-white/50 border border-black/5 shadow-sm">
            <div className="text-2xl mb-4">ðŸ“¸</div>
            <h3 className="font-serif font-bold text-xl mb-2 text-[#2b160f]">Easy Upload</h3>
            <p className="text-black/50 text-sm">Drop up to 5 photos from your week. We'll handle the compression and metadata.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/50 border border-black/5 shadow-sm">
            <div className="text-2xl mb-4">âœ¨</div>
            <h3 className="font-serif font-bold text-xl mb-2 text-[#2b160f]">AI Interview</h3>
            <p className="text-black/50 text-sm">We'll ask a few thoughtful questions to draw out the stories behind your favorite moments.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/50 border border-black/5 shadow-sm">
            <div className="text-2xl mb-4">ðŸ“¬</div>
            <h3 className="font-serif font-bold text-xl mb-2 text-[#2b160f]">Instant Dispatch</h3>
            <p className="text-black/50 text-sm">One click to generate a beautiful, Substack-style newsletter ready to share with family.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5 text-center px-6">
        <p className="text-black/30 text-sm">
          Â© 2026 Pigeon Post. Made with love for family.
        </p>
      </footer>
    </div>
  );
}
