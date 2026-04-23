export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">
      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">About</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">About Weissach Werks</h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">Precision engineering for the digital age. We build performance-focused web systems and AI-enabled workflows for businesses that need speed, scalability, and clarity.</p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-10 rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-xl shadow-black/20 backdrop-blur-xl">
            <div>
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <p className="mt-4 text-slate-300">Weissach Werks is dedicated to delivering high-performance digital solutions that drive real business results. Named after Porsche's legendary testing facility, we bring the same precision engineering mindset to web development, AI integration, and digital strategy.</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Expertise</h2>
              <p className="mt-4 text-slate-300">With deep experience in modern web technologies, SEO optimization, and artificial intelligence, we build systems that not only look great but perform exceptionally under pressure.</p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Philosophy</h2>
              <p className="mt-4 text-slate-300">We believe in owning your digital infrastructure. Every solution we create is built to scale, secure, and integrate with your existing business processes. No black boxes, no vendor lock-in—just transparent, high-performance systems.</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
            <img src="/img/WW logo transparent bg HD.webp" alt="Weissach Werks" className="w-full max-w-sm rounded-[1.5rem] object-contain" />
          </div>
        </div>
      </section>
    </main>
  );
}
