import Link from 'next/link';

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

export default function FlowersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28">
      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-20 sm:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-black/70 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="text-center">
            <h1 className="text-4xl font-semibold">Gallery / Flowers</h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-300">A dedicated collection of floral automotive concepts and front/back visual experiments.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {frontBackItems.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-white/10">
              <div className="relative aspect-square">
                <img src={item.front} alt={`${item.title} Front`} className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 hover:opacity-0" />
                <img src={item.rear} alt={`${item.title} Rear`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
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
