import { Link } from 'react-router-dom';
import { ArrowLeft, Swords, Users, Target, Award, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const kickboxBenefits = [
  {
    icon: Target,
    title: 'Profesionalna Tehnika',
    description: 'Naučićeš pravilne udarce, kretanje i odbranu od iskusnih trenera'
  },
  {
    icon: Award,
    title: 'Fizička Kondicija',
    description: 'Kickbox poboljšava snagu, izdržljivost, brzinu i koordinaciju'
  },
  {
    icon: Users,
    title: 'Grupni Treninzi',
    description: 'Treniraš sa ljudima koji dele istu strast prema sportu'
  }
];

const trainingTypes = [
  {
    name: 'Početni Nivo',
    description: 'Za one koji prvi put stupaju na tatami. Osnove, tehnike, kondicija.',
    duration: '60 minuta',
    days: 'Utorak, Četvrtak - 18:00'
  },
  {
    name: 'Srednji Nivo',
    description: 'Napredne kombinacije, sparinzi, taktika. Za one sa iskustvom.',
    duration: '75 minuta',
    days: 'Ponedeljak, Sreda, Petak - 19:00'
  },
  {
    name: 'Takmičarski Tim',
    description: 'Priprema za meč. Maksimalna intenzivnost. Samo za posvećene.',
    duration: '90 minuta',
    days: 'Svaki dan po dogovoru'
  }
];

const pricingOptions = [
  {
    name: 'Jedna Sesija',
    price: '800 RSD',
    description: 'Probaj i vidi da li je za tebe'
  },
  {
    name: 'Mesečna Članarina',
    price: '5.000 RSD',
    description: 'Neograničen broj grupnih treninga',
    popular: true
  },
  {
    name: 'Personalni Trening',
    price: '2.500 RSD',
    description: 'Jedan na jedan sa trenerom - po sesiji'
  }
];

export function KickboxPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwdHJhaW5pbmclMjBmaWdodGVyfGVufDF8fHx8MTc2Mjk2Nzg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Kickbox Petrovac"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
          <div className="absolute inset-0 bg-red-900/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          <Swords className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-600 mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider sm:tracking-widest mb-3 sm:mb-4">KICKBOX</h1>
          <div className="h-0.5 sm:h-1 bg-red-600 w-32 sm:w-40 md:w-48 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider sm:tracking-widest text-red-500 mb-3 sm:mb-4">KICKBOX PETROVAC</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Profesionalni kickbox treninzi za sve nivoe
          </p>
        </div>

        <Link 
          to="/"
          className="absolute top-20 sm:top-24 left-4 sm:left-8 flex items-center gap-2 text-white hover:text-red-600 transition-colors z-20"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="uppercase tracking-wide text-xs sm:text-sm">Nazad</span>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative h-[500px] border-4 border-red-900/30 overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1575747515871-2e323827539e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjByaW5nJTIwZmlnaHR8ZW58MXx8fHwxNzYyOTY3ODU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Boxing Ring"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-red-600"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-red-600"></div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-6xl mb-6 text-white tracking-widest uppercase">
                O <span className="text-red-600">Kickboxu</span>
              </h2>
              <div className="w-32 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg text-gray-300 mb-6">
                Kickbox Petrovac nudi profesionalne kickbox treninge za sve nivoe - od potpunih početnika 
                do naprednih sportista. Treninzi obuhvataju tehniku udaraca, kretanje, odbranu, 
                kao i razvoj kondicije i snage.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Pod vodstvom Branka i Vuka Glasnović, naučićeš pravilnu tehniku i poboljšaćeš 
                fizičku kondiciju. Bilo da treniraš za zdravlje ili za takmičenja, 
                nudimo programe prilagođene tvojim ciljevima.
              </p>

              <div className="space-y-4">
                {kickboxBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-black border-l-4 border-red-600 p-6 hover:bg-zinc-900 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="w-8 h-8 text-red-600 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl text-white uppercase tracking-wide mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-400">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Types Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              Tipovi <span className="text-red-600">Treninga</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Izaberi nivo koji odgovara tvom iskustvu i ciljevima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-zinc-950 border-2 border-red-900/30 p-8 hover:border-red-600 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl text-white uppercase tracking-wide">
                    {type.name}
                  </h3>
                  <Swords className="w-8 h-8 text-red-600 group-hover:rotate-12 transition-transform" />
                </div>
                <p className="text-gray-400 mb-6">{type.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-5 h-5 text-red-600" />
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Users className="w-5 h-5 text-red-600" />
                    <span>{type.days}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              <span className="text-red-600">Cenovnik</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Investicija u sebe. U svoju snagu. U svoju budućnost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingOptions.map((option, index) => (
              <div 
                key={index}
                className={`bg-black border-2 p-8 relative ${
                  option.popular 
                    ? 'border-red-600 scale-105' 
                    : 'border-red-900/30 hover:border-red-600'
                } transition-all duration-300`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 text-sm uppercase tracking-wider">
                      Preporučeno
                    </span>
                  </div>
                )}
                <h3 className="text-2xl text-white uppercase tracking-wide mb-4 text-center">
                  {option.name}
                </h3>
                <div className="text-center mb-6">
                  <p className="text-5xl text-red-600 mb-2">{option.price}</p>
                  <p className="text-gray-400 text-sm">{option.description}</p>
                </div>
                <Link
                  to="/#contact"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 uppercase tracking-wider transition-all duration-300"
                >
                  Upiši Se
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900/10 border-4 border-red-600 p-12 text-center">
            <h2 className="text-4xl md:text-5xl text-white uppercase tracking-wide mb-6">
              Zainteresovan?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Dođi na prvi besplatan trening i vidi kako izgledaju naši treninzi. 
              Nema obaveza - samo prilika da isprobamo zajedno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
              >
                Zakaži Trening
              </Link>
              <Link
                to="/#trainers"
                className="bg-transparent hover:bg-red-600/20 text-white px-8 py-4 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
              >
                Upoznaj Trenere
              </Link>
            </div>
          </div>

          <div className="mt-12 bg-black border-2 border-red-900/30 p-8">
            <h3 className="text-2xl text-white uppercase tracking-wide mb-4 text-center">
              Šta Treba da Poneseš
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>Sportska odeća</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>Patike za trening</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>Rukavice (imamo na prodaju)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>Voda i peškir</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>Spremnost da se potrudiš</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600"></div>
                <span>Odlučnost da ne odustaneš</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}