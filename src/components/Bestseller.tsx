import { products } from '../data';
import { ProductCard } from './ProductCard';
import { motion } from 'motion/react';

export function Bestseller() {
  // Duplicate products for marquee effect
  const marqueeProducts = [...products, ...products, ...products];

  return (
    <section className="py-20 lg:py-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black uppercase tracking-tight text-nike-black"
        >
          Aktuelle <br /><span className="text-nike-orange italic">Bestseller</span>
        </motion.h2>
      </div>

      <div className="marquee-container w-full py-4 relative group">
        {/* Left/Right fading edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="marquee-content gap-6 px-6">
          {marqueeProducts.map((product, i) => (
            <div key={`${product.id}-${i}`} className="w-[280px] sm:w-[320px] shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
