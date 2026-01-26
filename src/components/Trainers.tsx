import { ImageWithFallback } from './figma/ImageWithFallback';

const trainers = [
  {
    name: 'Branko Glasnović',
    nickname: '"Djeka"',
    title: 'Glavni Trener',
    specialization: 'Kickbox & Kondicija',
    image: 'https://images.unsplash.com/photo-1609519734087-abdf808c6ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJvbmclMjBtYW4lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI5Njc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Specijalizovan za kickbox treninge i kondicione programe. Iskustvo u radu sa sportistima svih nivoa.'
  },
  {
    name: 'Vuk Glasnović',
    nickname: '"Djeka"',
    title: 'Trener',
    specialization: 'Personalni Trening & Bodybuilding',
    image: 'https://images.unsplash.com/photo-1561532325-7d5231a2dede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBneW0lMjBkYXJrfGVufDF8fHx8MTc2Mjk2Nzg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Fokusiran na personalne programe i bodybuilding. Pomoć u postizanju ciljeva kroz individualan pristup.'
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-20 bg-zinc-950 relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
            Naši <span className="text-red-600">Treneri</span>
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Branko i Vuk Glasnović - profesionalni treneri sa godinama iskustva
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="bg-black border-2 border-red-900/30 overflow-hidden hover:border-red-600 transition-all duration-300 group"
            >
              <div className="relative h-96 overflow-hidden">
                <ImageWithFallback
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h3 className="text-2xl text-white uppercase tracking-wide mb-1">{trainer.name}</h3>
                    <p className="text-red-600 text-sm mb-1">{trainer.nickname}</p>
                    <p className="text-red-600 uppercase tracking-widest text-sm mb-1">{trainer.title}</p>
                    <p className="text-gray-400 text-sm">{trainer.specialization}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-black">
                <div className="border-l-4 border-red-600 pl-4">
                  <p className="text-gray-300">{trainer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-black border-2 border-red-900/30 p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl text-white uppercase tracking-wide mb-4">
              Iskusni Profesionalci
            </h3>
            <p className="text-gray-400 mb-4">
              Branko i Vuk Glasnović, obojica poznati kao "Djeka", vode California Gym i Kickbox Srbija. 
              Sa godinama iskustva u radu sa sportistima svih nivoa, kreiraju treninge 
              prilagođene individualnim potrebama i ciljevima.
            </p>
            <p className="text-gray-300">
              Bilo da treniraš samostalno ili želiš personalni program, naši treneri su tu 
              da ti pomognu da postigneš najbolje rezultate.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
}