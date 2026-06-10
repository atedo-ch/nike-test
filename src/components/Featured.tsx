import { products } from '../data';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';

export function Featured() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-nike-black">
            Featured <br/><span className="text-nike-orange italic">Highlights</span>
          </h2>
        </div>
        <div className="hidden sm:flex gap-2">
          <button className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-nike-black transition-colors">
            &larr;
          </button>
          <button className="w-10 h-10 rounded-full bg-nike-black text-white flex items-center justify-center hover:bg-nike-orange transition-colors">
            &rarr;
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-8 flex gap-2 justify-center sm:hidden">
        <button className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-nike-black transition-colors">
            &larr;
        </button>
        <button className="w-12 h-12 rounded-full bg-nike-black text-white flex items-center justify-center hover:bg-nike-orange transition-colors">
          &rarr;
        </button>
      </div>
    </section>
  );
}
