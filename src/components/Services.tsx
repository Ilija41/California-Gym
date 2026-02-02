import { Link } from 'react-router-dom';
import { Dumbbell, Swords, UserCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    title: 'Teretana',
    subtitle: 'California Gym',
    description: 'Slobodan pristup kompletno opremljenoj teretani sa tegovima, spravama za sve mišićne grupe i kardio zonom.',
    icon: Dumbbell,
    image: 'https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MjkzNzQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Slobodan ulaz', 'Kompletna oprema', 'Klimatizovano'],
    link: '/teretana'
  },
  {
    title: 'Kickbox',
    subtitle: 'Kickbox Petrovac',
    description: 'Grupni i individualni kickbox treninzi za sve nivoe - od početnika do naprednih.',
    icon: Swords,
    image: 'https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwdHJhaW5pbmclMjBmaWdodGVyfGVufDF8fHx8MTc2Mjk2Nzg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Grupni treninzi', 'Individualni treninzi', 'Svi nivoi'],
    link: '/kickbox'
  },
  {
    title: 'Personalni Trening',
    subtitle: '1 na 1 sa Trenerima',
    description: 'Individualan program prilagođen tvojim ciljevima. Treneri Branko i Vuk Glasnović.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1758875568823-34bdf47b82dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBtdXNjdWxhcnxlbnwxfHx8fDE3NjI5Njc4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    features: ['Prilagođen program', 'Iskusni treneri', 'Maksimalni rezultati'],
    link: '/personalni-trening'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-black relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
            Naši <span className="text-red-600">Treninzi</span>
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Izaberi svoj put ka savršenstvu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-zinc-950 border-2 border-red-900/30 overflow-hidden hover:border-red-600 transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Icon className="w-12 h-12 text-red-600" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl text-white uppercase tracking-wide mb-1">{service.title}</h3>
                    <p className="text-red-600 text-sm tracking-widest uppercase">{service.subtitle}</p>
                  </div>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-red-600"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link}
                    className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
                  >
                    Saznaj Više
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
}