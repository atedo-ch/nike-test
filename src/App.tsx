/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Featured } from './components/Featured';
import { Benefits } from './components/Benefits';
import { Bestseller } from './components/Bestseller';
import { Story } from './components/Story';
import { Reviews } from './components/Reviews';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CartProvider } from './CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <CartDrawer />
        
        <main>
          <Hero />
          <TrustBar />
          <Featured />
          <Benefits />
          <Bestseller />
          <Story />
          <Reviews />
          <Newsletter />
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
