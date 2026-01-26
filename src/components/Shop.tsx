import { Droplet, Pill, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    icon: Droplet,
    name: 'Voda',
    description: 'Hladna voda uvek dostupna'
  },
  {
    icon: Pill,
    name: 'Kreatin',
    description: 'Premium suplementi za maksimalan rast'
  },
  {
    icon: ShoppingBag,
    name: 'Suplementi',
    description: 'Proteini, vitamini, i sve što ti treba'
  }
];

export function Shop() {
  return (
    <section id="shop" className="py-20 bg-black relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] border-4 border-red-900/30 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1693996045346-d0a9b9470909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjBmaXRuZXNzfGVufDF8fHx8MTc2Mjk2Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Supplements"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            {/* Corner decoration */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-red-600"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-red-600"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              <span className="text-red-600">Shop</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mb-6"></div>
            <p className="text-xl text-gray-400 mb-8">
              Imamo sve što ti treba da podržiš svoj trening i oporavak
            </p>

            <div className="space-y-6 mb-8">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div 
                    key={index}
                    className="bg-zinc-950 border-2 border-red-900/30 p-6 hover:border-red-600 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/10 transition-all">
                        <Icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl text-white uppercase tracking-wide mb-2">{product.name}</h3>
                        <p className="text-gray-400">{product.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-black border-l-4 border-red-600 p-6">
              <p className="text-gray-300">
                <span className="text-red-600">★</span> Svi proizvodi dostupni direktno u teretani. 
                Pitaj trenere za preporuke i savete o suplementaciji.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
}
