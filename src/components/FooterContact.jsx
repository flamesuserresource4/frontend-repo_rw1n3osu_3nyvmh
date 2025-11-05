import { motion } from 'framer-motion';
import { Leaf, Shield, Users, Star, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function FooterContact() {
  return (
    <>
      <AboutGalleryTestimonials />
      <Contact />
      <Footer />
    </>
  );
}

function AboutGalleryTestimonials() {
  return (
    <section id="nosotros" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Nosotros</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Somos un operador turístico sostenible con más de 20 años de experiencia. Contamos con flota propia,
              estándares rigurosos de seguridad y un equipo capacitado que comparte la pasión por crear experiencias
              auténticas y responsables con el medio ambiente.
            </p>
            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature icon={<Leaf className="text-emerald-600" />} title="Sostenibilidad" subtitle="Prácticas responsables" />
              <Feature icon={<Shield className="text-blue-600" />} title="Seguridad" subtitle="Protocolos auditados" />
              <Feature icon={<Users className="text-amber-600" />} title="Equipo" subtitle="Guías certificados" />
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl grid grid-cols-2 gap-2">
              {[
                'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2070&auto=format&fit=crop',
              ].map((src) => (
                <img key={src} src={src} alt="Galería" className="h-40 w-full object-cover" />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                id="galeria"
                href="#galeria"
                className="rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800"
              >
                Ver Galería Completa
              </a>
              <div className="flex items-center text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="" />
                ))}
                <span className="ml-2 text-sm text-slate-600">4.9/5 en reseñas</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16" id="testimonios">
          <h3 className="text-2xl font-bold text-slate-900">Lo que dicen nuestros socios</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'María Flores',
                role: 'Directora de Operaciones',
                source: 'Google',
                text: 'Operación impecable para nuestras series. Logística, seguridad y atención al detalle de primer nivel.',
              },
              {
                name: 'J. Schneider',
                role: 'Product Manager',
                source: 'Trustpilot',
                text: 'Experiencias auténticas y equipo confiable. Nuestros clientes quedan encantados con cada salida.',
              },
              {
                name: 'Carlos Vega',
                role: 'DMC Partner',
                source: 'Partner Survey',
                text: 'La flota propia y su enfoque sostenible marcan la diferencia en operaciones exigentes.',
              },
            ].map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-slate-700">“{t.text}”</p>
                <footer className="mt-3 text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{t.name}</span> · {t.role} · {t.source}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contacto</h2>
            <p className="mt-2 text-slate-600">Cuéntanos cómo te podemos ayudar.</p>

            <dl className="mt-6 space-y-3 text-slate-700">
              <Info icon={<Phone />} text="(+51) 999 999 999" />
              <Info icon={<Mail />} text="ventas@tumarca.com" />
              <Info icon={<MapPin />} text="Arequipa, Perú" />
            </dl>

            <div className="mt-6 flex items-center gap-4 text-slate-600">
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram /></a>
              <a href="#" aria-label="Facebook" className="hover:text-slate-900"><Facebook /></a>
              <a href="#" aria-label="YouTube" className="hover:text-slate-900"><Youtube /></a>
            </div>
          </div>

          <motion.form
            id="reservar"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Nombre</label>
                <input className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-600 focus:ring-emerald-600" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-600 focus:ring-emerald-600" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Teléfono</label>
                <input className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-600 focus:ring-emerald-600" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Destino</label>
                <select className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-600 focus:ring-emerald-600">
                  <option>Colca</option>
                  <option>Arequipa</option>
                  <option>Extras</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Mensaje</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-emerald-600 focus:ring-emerald-600" />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700"
              >
                Solicitar Cotización
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
            <Leaf size={18} />
          </span>
          <div>
            <p className="font-semibold text-slate-900">Tu Marca</p>
            <p className="text-sm text-slate-600">Operador Turístico Sostenible</p>
          </div>
        </div>
        <div className="text-sm text-slate-600">
          © {year} Tu Marca. Todos los derechos reservados. · <a href="#" className="underline">Ver mapa</a>
        </div>
      </div>
    </footer>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-100">{icon}</span>
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-slate-500">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
