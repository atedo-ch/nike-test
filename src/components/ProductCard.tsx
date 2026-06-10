import { motion } from 'motion/react';
import { Product } from '../data';
import { useCart } from '../CartContext';
import { Star } from 'lucide-react';

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="product-card-wrap flex flex-col h-full"
    >
      <div className="relative aspect-square flex items-center justify-center p-6 bg-nike-grey mix-blend-multiply">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-[90%] h-[90%] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
        />
        
        {/* Colors */}
        <div className="absolute top-4 right-4 flex flex-col gap-1.5">
          {product.colors.map(color => (
            <div 
              key={color} 
              className="w-3.5 h-3.5 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 lg:p-6 bg-white border-t border-gray-100">
        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
          {product.category}
        </h3>
        <h2 className="text-lg font-bold text-nike-black mb-2 line-clamp-1">{product.name}</h2>
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-3.5 h-3.5 fill-nike-orange text-nike-orange" />
          <span className="text-xs font-bold text-gray-600">{product.rating}</span>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-black tracking-tight">CHF {product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-nike-black text-white px-5 py-2.5 rounded text-[11px] font-bold uppercase tracking-wider hover:bg-nike-orange transition-colors"
          >
            In den Warenkorb
          </button>
        </div>
      </div>
    </motion.div>
  );
}
