import { Instagram, Youtube, Facebook, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-nike-black pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <svg className="h-6 w-auto fill-nike-black mb-6" viewBox="0 0 60 22" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.1 0L15.3 12.3c-2.3.9-3.4 1.4-3.4 2.8 0 .8.6 1.4 1.7 1.4 1.2 0 3.1-.9 5.8-2.6L60 3.2C56.6 9.4 51 15.6 44.2 19.3c-5.4 3-10.2 2.6-13-1.2-1.9-2.5-1.9-6.3.2-10.3L48.1 0z" />
            </svg>
            <p className="text-gray-500 text-sm font-medium mb-6 max-w-xs">
              Inspiration und Innovation für jeden Athleten weltweit.
            </p>
            <div className="flex items-center gap-4 text-nike-black">
              <a href="#" className="hover:text-nike-orange transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-nike-orange transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-nike-orange transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4A6.84 6.84 0 0 0 8.1 9 6.32 6.32 0 0 0 1.78 15.3 6.34 6.34 0 0 0 8.1 21.6a6.34 6.34 0 0 0 6.32-6.3V8.83a8.17 8.17 0 0 0 5.17 1.84v-3.38a4.83 4.83 0 0 1-3.77-4.25h3.77z"/></svg>
              </a>
              <a href="#" className="hover:text-nike-orange transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-nike-black transition-colors">Running</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">Schuhe</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">Bekleidung</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors border-b border-gray-200 pb-0.5">Sale</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-nike-black transition-colors">Versand</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">Rückgabe</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-nike-black transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-nike-black transition-colors">Nachhaltigkeit</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-nike-black">
              <MapPin className="w-3 h-3" />
              <span>Schweiz</span>
            </div>
            <span>© 2026 Nike, Inc.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-nike-black transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-nike-black transition-colors">Nutzungsbedingungen</a>
            <a href="#" className="hover:text-nike-black transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
