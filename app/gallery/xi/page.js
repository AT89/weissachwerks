import Link from 'next/link';

export default function XiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">
      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">Gallery / Xi</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">This video was created using a Gundam Model Kit HGUC Xi that was finished and decaled (by me) and then input into a video AI generator.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Xi Video</h2>
          <div className="mt-6 overflow-hidden rounded-[2rem] bg-slate-950/80">
            <video controls className="w-full">
              <source src="/img/Xi.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>

        <div className="text-center">
          <Link href="/gallery" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Back to Gallery Index</Link>
        </div>
      </section>
    </main>
  );
}
