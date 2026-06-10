import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setIsOpen: setCartOpen, totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Running', 'Men', 'Women', 'New Releases', 'Sale'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.05)] py-3' : 'bg-white border-b border-gray-100 py-4'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo and Nav */}
        <div className="flex items-center gap-12">
          <a href="#" className="flex-shrink-0 z-50">
            <svg className="h-6 w-auto fill-nike-black" viewBox="0 0 60 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.1 0L15.3 12.3c-2.3.9-3.4 1.4-3.4 2.8 0 .8.6 1.4 1.7 1.4 1.2 0 3.1-.9 5.8-2.6L60 3.2C56.6 9.4 51 15.6 44.2 19.3c-5.4 3-10.2 2.6-13-1.2-1.9-2.5-1.9-6.3.2-10.3L48.1 0z" />
            </svg>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item} href="#" className={`nav-link ${item === 'Sale' ? 'text-red-600 hover:text-red-700' : 'text-nike-black'}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6 z-50">
          <div className="hidden lg:flex relative bg-gray-100 rounded-full px-4 py-1.5 items-center">
            <Search className="w-4 h-4 text-gray-500" />
            <input type="text" placeholder="Suchen" className="bg-transparent border-none focus:outline-none text-sm ml-2 w-32 placeholder:text-gray-500 font-medium" />
          </div>
          
          <button className="hidden sm:block hover:text-nike-orange transition-colors text-nike-black">
            <User className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setCartOpen(true)}
            className="relative hover:text-nike-orange transition-colors text-nike-black"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-nike-orange text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navItems.map((item) => (
              <a key={item} href="#" className="text-xl font-bold text-nike-black hover:text-nike-orange">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
