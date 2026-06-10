import { motion } from 'motion/react';

export function Newsletter() {
  return (
    <section className="py-24 bg-nike-black text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.03]">
        <svg className="h-[800px] w-[800px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 7.8c-2.4 1.2-5.4 3.1-8.5 5.6-3.7 3-6.9 6.2-9 8.8C5 24 3.7 24.3 2.6 23.4c-1.3-1.1-.9-3 1.1-5C6.1 16.1 10 11.2 13 8c2.4-2.5 4.8-4.3 6.6-5.3 1.1-.6 2.3-.9 3.5-.9C25 1.5 25.1 6.5 24 7.8z" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <span className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mb-2 block">Ein Teil der Community werden</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Bleib auf dem <br /><span className="text-nike-orange italic">Laufenden</span>
          </h2>
          <p className="text-sm md:text-base font-medium text-gray-400 max-w-sm">
            Erhalte neue Releases, exklusive Angebote und Tipps.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-auto flex gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input 
            type="email" 
            placeholder="E-Mail Adresse" 
            className="w-full md:w-72 bg-zinc-900 border border-zinc-800 text-white placeholder:text-gray-500 px-5 py-4 rounded text-sm outline-none focus:border-gray-500 transition-colors font-medium"
            required
          />
          <button 
            type="submit"
            className="bg-white text-nike-black px-8 py-4 rounded font-bold uppercase tracking-widest text-xs hover:bg-nike-orange hover:text-white transition-colors"
          >
            Join
          </button>
        </motion.form>
      </div>
    </section>
  );
}
