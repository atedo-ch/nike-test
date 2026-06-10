import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function CartDrawer() {
  const { isOpen, setIsOpen, items, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          
          {/* Drawer */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-black uppercase tracking-tight">Warenkorb</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                  <div className="w-24 h-24 mb-6 opacity-20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-lg">Dein Warenkorb ist leer.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="mt-6 font-semibold uppercase tracking-wider text-nike-orange border-b-2 border-nike-orange pb-1"
                  >
                    Jetzt einkaufen
                  </button>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 p-4 border-l-2 border-transparent hover:border-nike-orange transition-colors">
                    <div className="w-24 h-24 bg-white border border-gray-100 flex items-center justify-center p-2 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-nike-black leading-tight mb-1">{item.name}</h3>
                          <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">{item.category}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded border border-gray-200">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="hover:text-nike-orange">
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-bold text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="hover:text-nike-orange">
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="font-black text-sm tracking-tight">CHF {(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-white">
                <div className="flex justify-between items-center mb-6 text-lg">
                  <span className="font-bold uppercase tracking-widest text-xs text-gray-500">Total</span>
                  <span className="font-black text-2xl tracking-tighter">CHF {totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full btn-primary text-sm flex justify-center">
                  Zur Kasse
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
