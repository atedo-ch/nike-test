import { motion } from 'motion/react';

export function Story() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto">
        <div className="relative min-h-[400px] lg:h-auto border-b lg:border-b-0 lg:border-r border-gray-100 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1571008882582-149021e86095?auto=format&fit=crop&q=80&w=1500" 
            alt="Athlete running on track" 
            className="absolute inset-0 w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div className="flex flex-col justify-center p-8 lg:p-16 xl:p-24 bg-white relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="w-12 h-1.5 bg-nike-orange mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-nike-black mb-6 leading-none">
              Jeder Schritt bringt dich <span className="text-nike-orange italic block mt-2">näher ans Ziel.</span>
            </h2>
            <p className="text-base text-gray-500 mb-10 leading-relaxed font-medium">
              Ob Marathon, Tempolauf oder tägliches Training – die neuesten Nike Running Modelle unterstützen dich auf jedem Kilometer mit bahnbrechender Technologie und optimalem Komfort.
            </p>
            <button className="btn-primary inline-flex flex-shrink-0">
              Mehr erfahren
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
