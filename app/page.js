import Link from 'next/link';
import { Smartphone, TrendingUp, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="text-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-slate-950 pt-24 flex flex-col items-start justify-center">
        <video autoPlay loop muted playsInline preload="auto" poster="/img/seo.jpg" className="pointer-events-none absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto max-w-[100vw] -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.2]">
          <source src="/img/cgt.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        <div className="relative z-10 mx-auto flex h-screen max-w-7xl flex-col justify-center px-6 sm:px-8">
        <div className="">
          <img src="/img/WW logo transparent bg HD.png" alt="Weissach Werks" className="mx-auto mb-8 h-64 w-auto" />
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">High-Performance Digital Engineering</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">We build SEO-driven, mobile-first web systems integrated with custom CRM databases and autonomous AI agents for 24/7 scheduling.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-white/90">Launch Your Project</a>
            <Link href="/gallery" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">View Design Portfolio</Link>
          </div>
        </div>
      </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-10 shadow-xl shadow-black/20 backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="space-y-4 rounded-[2rem] bg-black/50 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Mobile-First SEO</h3>
              <p className="text-sm text-slate-300">Optimized for Core Web Vitals and Interaction to Next Paint (INP). We don't just build sites; we build search-ranking machines.</p>
            </article>
            <article className="space-y-4 rounded-[2rem] bg-black/50 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Proprietary CRM</h3>
              <p className="text-sm text-slate-300">Own your data. Every site includes a secure Supabase-backed database to track leads, customer history, and engagement metrics.</p>
            </article>
            <article className="space-y-4 rounded-[2rem] bg-black/50 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">AI Scheduling Agents</h3>
              <p className="text-sm text-slate-300">24/7 automated appointment setting. Our custom AI agents qualify leads and sync directly to your business calendar.</p>
            </article>
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-slate-950/90 p-8 text-white shadow-xl shadow-black/20 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold">Consulting Services</h2>
            <p className="mt-4 text-slate-400">Premium digital engineering and AI strategy for businesses that need a performance-first web presence.</p>
          </div>
          <div className="space-y-6 rounded-[2rem] bg-black/60 p-8 text-white shadow-xl shadow-black/20 backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-semibold">Full-Stack Web Systems</h3>
              <p className="mt-3 text-slate-300">Next.js architecture with real-time database integration for local service businesses.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">AI Content Strategy</h3>
              <p className="mt-3 text-slate-300">Leveraging LLMs and image generation for hyper-targeted local SEO landing pages.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">High-End Brand Assets</h3>
              <p className="mt-3 text-slate-300">From apparel prototyping to 4K video production, we maintain the Weissach aesthetic.</p>
            </div>
          </div>
        </section>
      </section>

      <footer id="contact" className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-black/80 px-6 py-16 text-center text-white sm:px-8">
        <h2 className="text-3xl font-semibold">Ready to tune your business performance?</h2>
        <a href="mailto:weissachwerks@gmail.com" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-white/90">Let's Talk</a>
      </footer>
    </main>
  );
}
