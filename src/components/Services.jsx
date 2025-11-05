import { motion } from 'framer-motion';
import { ArrowRight, MountainSnow, Map, Waypoints } from 'lucide-react';

const categories = [
  {
    name: 'Colca',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1974&auto=format&fit=crop',
    services: ['Full Day', '2D / 1N', 'Traslados', 'Mirador del Cóndor'],
  },
  {
    name: 'Arequipa',
    image:
      'https://images.unsplash.com/photo-1609882473158-5d1e4b39aa15?q=80&w=2069&auto=format&fit=crop',
    services: ['City Tour', 'Monasterio de Santa Catalina', 'Gastronomía', 'Caminatas'],
  },
  {
    name: 'Extras',
    image:
      'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2070&auto=format&fit=crop',
    services: ['Tour Privado', 'Operación para DMCs', 'MICE', 'Experiencias a medida'],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_10%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(700px_300px_at_90%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Tours / Servicios</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Operamos para agencias, operadores y DMCs con enfoque en sostenibilidad y seguridad.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-slate-600">
            <MountainSnow className="text-emerald-600" />
            <Map className="text-blue-600" />
            <Waypoints className="text-amber-600" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.article
              key={cat.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: 0.05 * i, duration: 0.6 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative h-52">
                <img src={cat.image} alt={cat.name} className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <div className="absolute left-4 bottom-4 text-white">
                  <h3 className="text-xl font-bold drop-shadow">{cat.name}</h3>
                </div>
              </div>
              <div className="p-5">
                <ul className="text-slate-600 space-y-1 list-disc list-inside">
                  {cat.services.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800"
                  >
                    Obtén información
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
