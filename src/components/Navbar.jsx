import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto' },
    { href: '#reservar', label: 'Reservar' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf size={18} />
          </span>
          <span>Tu Marca</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#reservar"
            className="ml-2 inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition-colors"
          >
            Reserva ahora
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-700 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservar"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
              onClick={() => setOpen(false)}
            >
              Reserva ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
