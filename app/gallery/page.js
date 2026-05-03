import Link from 'next/link';

const galleryPages = [
  {
    href: '/gallery/flowers',
    title: 'Flowers',
    description: 'All floral automotive concepts and front/back series moved into a dedicated page.'
  },
  {
    href: '/gallery/misc',
    title: 'Misc',
    description: 'Lifestyle shots, art direction, and supplemental studio visuals from the Weissach collection.'
  },
  {
    href: '/gallery/xi',
    title: 'Xi',
    description: 'Video showcase of the Gundam Model Kit HGUC Xi project, created using AI video generation.'
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">
      <section className="mx-auto max-w-6xl space-y-10 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <img src="/img/WW logo transparent bg HD.webp" alt="Weissach Werks Logo" className="h-64 w-auto" />
            <h1 className="text-4xl font-semibold">Gallery Index</h1>
            <p className="max-w-2xl text-slate-300">Browse the Gallery by section. Flowers, Misc, and Xi each now have their own dedicated page.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group rounded-[2rem] border border-white/10 bg-black/60 p-8 text-left transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{page.title}</h2>
                  <p className="mt-3 text-sm text-slate-300">{page.description}</p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition group-hover:bg-white/10">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-xl shadow-black/20 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">Xi Video Preview</h2>
          <p className="mt-3 text-slate-300">This video was created using a Gundam Model Kit HGUC Xi that was finished and decaled (by me) and then input into a video AI generator.</p>
          <div className="mt-6 overflow-hidden rounded-[2rem] bg-slate-950/80">
            <video controls className="w-full">
              <source src="/img/Xi.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}
