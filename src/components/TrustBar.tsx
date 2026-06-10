import { CheckCircle2, RefreshCcw, ShieldCheck, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  { icon: CheckCircle2, text: "Kostenloser Versand ab CHF 100" },
  { icon: RefreshCcw, text: "30 Tage Rückgaberecht" },
  { icon: ShieldCheck, text: "Offizieller Nike Partner" },
  { icon: CreditCard, text: "Sichere Bezahlung" },
];

export function TrustBar() {
  return (
    <div className="bg-nike-black text-white py-3 border-b border-nike-black overflow-hidden relative z-40 hidden sm:block">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <ul className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-300">
          {trustItems.map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-nike-orange font-black">✓</span>
              <span>{item.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
