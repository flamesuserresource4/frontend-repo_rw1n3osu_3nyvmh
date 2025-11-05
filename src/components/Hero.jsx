import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2070&auto=format&fit=crop"
          alt="Montañas y valle"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-white pointer-events-none" />
        {/* Subtle radial gradient accents */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(16,185,129,0.25),transparent_50%),radial-gradient(600px_circle_at_80%_0%,rgba(59,130,246,0.25),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow"
            >
              Operador Turístico Sostenible
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 text-lg md:text-xl text-slate-100 max-w-xl"
            >
              Más de 20 años de experiencia y flota propia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#reservar"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 transition-colors"
              >
                Reserva ahora
                <ArrowRight size={18} />
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-6 py-3 text-slate-900 font-medium shadow hover:bg-white"
              >
                Solicita tarifas
                <Send size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/90"
            >
              <Stat number="20+" label="Años de experiencia" />
              <Stat number="10k+" label="Viajes realizados" />
              <Stat number="100%" label="Operación segura" />
              <Stat number="24/7" label="Soporte" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=2069&auto=format&fit=crop"
                alt="Naturaleza"
                className="w-full h-[360px] md:h-[520px] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="absolute -bottom-6 left-6 right-6"
            >
              <div className="rounded-xl bg-white shadow-xl p-4 grid grid-cols-3 gap-4">
                {[
                  { label: 'Sostenibilidad', value: 'Carbono neutro' },
                  { label: 'Clientes', value: 'Agencias & DMCs' },
                  { label: 'Idiomas', value: 'ES / EN / DE' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-extrabold">{number}</div>
      <div className="text-xs md:text-sm opacity-90">{label}</div>
    </div>
  );
}
