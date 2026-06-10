export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  colors: string[];
}

export const products: Product[] = [
  {
    id: "p1",
    name: "Nike Alphafly 3",
    category: "Wettkampf-Laufschuh",
    price: 359.95,
    description: "Entwickelt für persönliche Bestzeiten. Maximale Energierückgabe durch ZoomX-Schaum und Carbonfaserplatte.",
    image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/fd6d91e6-65aa-4895-a2d5-7e9d2db5f7ef/alphafly-3-herren-strassenlaufschuh-fur-wettkampfe-SvF5rm.png",
    rating: 4.9,
    colors: ["#111111", "#FF6B00", "#FFFFFF"]
  },
  {
    id: "p2",
    name: "Nike Vomero Plus White",
    category: "Strassenlaufschuh",
    price: 189.95,
    description: "Maximale Dämpfung für tägliche Läufe und lange Distanzen.",
    image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/9e18f4cb-1a4f-4f4e-9f11-68f2b2d0d64d/vomero-plus-strassenlaufschuh-ERO8XXEF.png",
    rating: 4.7,
    colors: ["#FFFFFF", "#F5F5F5"]
  },
  {
    id: "p3",
    name: "Nike Vomero Plus Blue",
    category: "Strassenlaufschuh",
    price: 189.95,
    description: "Weiches Laufgefühl kombiniert mit hervorragender Stabilität.",
    image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/2f7169c9-c1cf-4d6d-9e3d-4e76d50f35d/vomero-plus-strassenlaufschuh-6fC359.png",
    rating: 4.8,
    colors: ["#1D4ED8", "#93C5FD", "#111111"]
  },
  {
    id: "p4",
    name: "Nike Pegasus",
    category: "Daily Trainer",
    price: 169.95,
    description: "Der vielseitige Klassiker für tägliche Trainingsläufe.",
    image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/4b0ddf08-77d0-4fd2-a96c-1ef77ec2a3f4/pegasus-strassenlaufschuh-DC1Cxh.png",
    rating: 4.6,
    colors: ["#111111", "#FFFFFF"]
  }
];

export const reviews = [
  {
    id: "r1",
    name: "Lukas M.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Der Alphafly 3 ist unglaublich. Meine Marathonzeit hat sich um 5 Minuten verbessert. Absolutes Premium-Gefühl bei jedem Schritt."
  },
  {
    id: "r2",
    name: "Sarah K.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Die Dämpfung des Vomero Plus ist genau das, was ich für meine Long Runs am Wochenende gesucht habe. Keine Knieschmerzen mehr."
  },
  {
    id: "r3",
    name: "Michael B.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 4,
    text: "Toller Allrounder! Der Pegasus begleitet mich jeden Tag. Sehr langlebig und super bequem von Anfang an."
  },
  {
    id: "r4",
    name: "Elena R.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Vomero Plus Blue sieht nicht nur super aus, er läuft sich auch fantastisch. Sehr stabil und weich."
  },
  {
    id: "r5",
    name: "Johannes T.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
    text: "Carbon Technologie im Alphafly 3 ist spürbar. Man wird förmlich nach vorne katapultiert."
  },
  {
    id: "r6",
    name: "Mia S.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 4,
    text: "Toller Schuh für schnelle Trainingsläufe. Etwas schmal geschnitten, aber nach dem Eintragen perfekt."
  }
];
