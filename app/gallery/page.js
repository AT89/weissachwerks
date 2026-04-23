import Link from 'next/link';
import { ImageIcon } from 'lucide-react';

const frontBackItems = [
  {
    front: '/img/CGT-dahlias-front.webp',
    rear: '/img/CGT-dahlias-rear.webp',
    title: 'CGT "Dahlia" Series'
  },
  {
    front: '/img/Red Roses F40.webp',
    rear: '/img/Red Roses F40 rear.webp',
    title: 'F40 "Red Rose" Edition'
  },
  {
    front: '/img/MC20 Arabella.webp',
    rear: '/img/MC20 rear Arabella.webp',
    title: 'MC20 "Arabella" Concept'
  },
  {
    front: '/img/White Roses 918.webp',
    rear: '/img/White Roses 918 rear.webp',
    title: '918 Spyder "White Rose"'
  },
  {
    front: '/img/R34 HYDRANGEA.webp',
    rear: '/img/R34 HYDRANGEA rear.webp',
    title: 'R34 "Hydrangea" Variant'
  },
  {
    front: '/img/SALVIA Supra MK4.webp',
    rear: '/img/SALVIA Supra MK4 rear.webp',
    title: 'MK4 Supra "Salvia"'
  },
  {
    front: '/img/sunflower x lfa.webp',
    rear: '/img/sunflower x lfa rear.webp',
    title: 'LFA "Sunflower" Concept'
  },
  {
    front: '/img/fuschia x ford gt.webp',
    rear: '/img/fuschia x ford gt rear.webp',
    title: 'Ford GT "Fuschia" Edition'
  },
  {
    front: '/img/evija x lotus.webp',
    rear: '/img/evija x lotus rear.webp',
    title: 'Lotus Evija Concept'
  }
];

const creativeItems = [
  '/img/audrey 993 far.webp',
  '/img/zr1.webp',
  '/img/taqueria.webp',
  '/img/taylorswift 964.webp',
  '/img/steve mcqueen.webp'
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">
      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-4 text-center">
            <img src="/img/WW logo transparent bg HD.png" alt="Weissach Werks Logo" className="h-64 w-auto" />
            <h1 className="text-4xl font-semibold">The Creative Lab</h1>
            <p className="max-w-2xl text-slate-300">From AI-generated automotive concepts to market-ready apparel prototypes. Personalized logo or refactor in SVG, EPS, PDF formats</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">The Front/Back Collection</h2>
            <p className="text-slate-300">Symmetrical branding paired with high-impact surrealism.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frontBackItems.map((item, index) => (
              <div key={index} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-white/10">
                <div className="relative aspect-square">
                  <img src={item.front} alt={`${item.title} Front`} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 hover:opacity-0" />
                  <img src={item.rear} alt={`${item.title} Rear`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Lifestyle & Art</h2>
          </div>

          <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
            {creativeItems.map((src, index) => (
              <div key={index} className="break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-white/10">
                <img src={src} alt={`Creative item ${index + 1}`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Return to Agency</Link>
        </div>
      </section>
    </main>
  );
}
