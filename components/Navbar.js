import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white">
        <Link href="/" className="flex items-center gap-3">
          <img src="/img/Weissach Werks Logo.webp" alt="Weissach Werks Logo" className="h-12 w-auto rounded-lg ring-1 ring-white/10" />
          <div className="hidden sm:block">
            <p className="font-semibold uppercase tracking-[0.25em]">Weissach Werks</p>
            <p className="text-xs text-white/70">High-performance web & AI</p>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/80 transition hover:text-white">Services</Link>
          <Link href="/about" className="text-white/80 transition hover:text-white">About</Link>
          <Link href="/gallery" className="text-white/80 transition hover:text-white">Gallery</Link>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-black transition hover:bg-white/90">
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
