import { reviews } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Reviews() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto border-b border-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-nike-black">
          Das sagen unsere <br /><span className="text-nike-orange italic">Läufer</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <motion.div 
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-nike-grey border-l-[3px] border-nike-black p-8 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className={`w-4 h-4 ${index < review.rating ? 'fill-nike-orange text-nike-orange' : 'fill-gray-300 text-gray-300'}`} 
                />
              ))}
            </div>
            
            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 flex-1">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-10 h-10 object-cover border border-gray-200"
              />
              <div className="font-bold text-xs uppercase tracking-widest text-nike-black">
                {review.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
