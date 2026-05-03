import Link from 'next/link';

const creativeItems = [
  '/img/audrey 993 far.webp',
  '/img/zr1.webp',
  '/img/taqueria.webp',
  '/img/taylorswift 964.webp',
  '/img/steve mcqueen.webp'
];

export default function MiscPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">
      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">Gallery / Misc</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">Lifestyle, art direction, and supporting studio imagery that completes the Weissach portfolio.</p>
          </div>
        </div>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {creativeItems.map((src, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-white/10">
              <img src={src} alt={`Misc item ${index + 1}`} className="w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Back to Gallery Index</Link>
        </div>
      </section>
    </main>
  );
}
