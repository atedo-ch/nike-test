import { Zap, Activity, Wind, Trophy } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Zap,
    title: "Carbon Energy",
    text: "Explosive Beschleunigung durch Carbon-Technologie."
  },
  {
    icon: Activity,
    title: "ZoomX Foam",
    text: "Maximale Energierückgabe bei jedem Schritt."
  },
  {
    icon: Wind,
    title: "Lightweight Design",
    text: "Ultraleichte Materialien für längere Läufe."
  },
  {
    icon: Trophy,
    title: "Race Proven",
    text: "Getragen von Spitzenathleten weltweit."
  }
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-nike-black">
            Entwickelt für <br /><span className="text-nike-orange">Höchstleistung</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card"
            >
              <h3 className="text-xl font-bold uppercase tracking-wide text-nike-black mb-2">{benefit.title}</h3>
              <p className="text-sm font-medium text-gray-500 leading-relaxed max-w-[250px]">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
