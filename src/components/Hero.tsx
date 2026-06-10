import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row border-b border-gray-100 bg-white mt-16 md:mt-20">
      {/* Left Content Area - strict box padding and right border */}
      <div className="flex-1 lg:max-w-[55%] flex flex-col justify-center p-8 lg:p-16 xl:p-24 border-b lg:border-b-0 lg:border-r border-gray-100 relative z-10 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6 inline-block px-3 py-1 bg-orange-50 text-nike-orange text-xs font-bold uppercase tracking-wider rounded">
            New Collection 2026
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title mb-6"
          >
            Run Beyond <br /> Limits
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-600 max-w-md mb-10 font-medium"
          >
            Entdecke die neuesten Nike Running Schuhe für maximale Performance, Komfort und Geschwindigkeit.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary">
              Jetzt shoppen
            </button>
            <button className="btn-secondary">
              Kollektion entdecken
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Area */}
      <div className="flex-1 bg-nike-grey relative flex items-center justify-center p-8 lg:p-12 overflow-hidden min-h-[50vh]">
        {/* Floating background shape for geometry */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full bg-white/40 blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 50 }}
          className="relative z-10 w-full max-w-2xl"
        >
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            src="https://static.nike.com/a/images/w_1280,q_auto,f_auto/fd6d91e6-65aa-4895-a2d5-7e9d2db5f7ef/alphafly-3-herren-strassenlaufschuh-fur-wettkampfe-SvF5rm.png" 
            alt="Nike Alphafly 3"
            className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
