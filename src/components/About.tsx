import { Target, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Moderna Oprema',
    description: 'Najnovije sprave i oprema za sve vrste treninga - od tegova do kardio mašina.'
  },
  {
    icon: Trophy,
    title: 'Kvalitetni Treninzi',
    description: 'Različiti programi za sve nivoe - od početnika do naprednih sportista.'
  },
  {
    icon: Users,
    title: 'Iskusni Treneri',
    description: 'Profesionalni treneri Branko i Vuk Glasnović sa godinama iskustva.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
            O <span className="text-red-600">Nama</span>
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sportski centar California Gym i Kickbox Petrovac - vaša destinacija za profesionalne treninge i sport
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-black border-2 border-red-900/30 p-8 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-red-900/20 border-2 border-red-600 flex items-center justify-center group-hover:bg-red-600/20 transition-all">
                    <Icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl mb-4 text-white text-center uppercase tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-black border-2 border-red-900/30 p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Nudimo kompletnu teretanu sa modernom opremom, profesionalne kickbox treninge, 
              personalni trening sa iskusnim trenerima, kao i širok izbor suplementa. 
              Bilo da želiš da treniraš samostalno ili pod nadzorom trenera, 
              kod nas ćeš naći sve što ti treba za postizanje tvojih ciljeva.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-6"></div>
            <p className="text-gray-400 uppercase tracking-widest">Tvoj prostor za trening</p>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
}