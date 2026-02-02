import { Link } from 'react-router-dom';
import { ArrowLeft, Dumbbell, Clock, Users, Award, CheckCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const gymFeatures = [
  'Moderna teretana sa najnovijom opremom',
  'Slobodan ulaz - treniraš kada želiš',
  'Klimatizovan prostor',
  'Fitness oprema',
  'Sprave za sve mišićne grupe',
  'Kardio zona sa trake i bicikli',
  'Svlačionice',
  'Suplement Shop'
];

const pricingOptions = [
  {
    name: 'Dnevna Karta',
    price: '250 RSD',
    description: 'Jedan trening, 2 sata'
  },
  {
    name: 'Mesečna Članarina',
    price: '2.500 RSD',
    description: 'Neograničen pristup celokupnoj teretani',
    popular: true
  },
  {
    name: 'Godišnja Članarina',
    price: '25.000 RSD',
    description: 'Uštedi 5.000 RSD, neograničen pristup'
  }
];

export function GymPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3ltJTIwYm9keWJ1aWxkaW5nfGVufDF8fHx8MTc2Mjk2Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="California Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
          <div className="absolute inset-0 bg-red-900/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          <Dumbbell className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-600 mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider sm:tracking-widest mb-3 sm:mb-4">TERETANA</h1>
          <div className="h-0.5 sm:h-1 bg-red-600 w-32 sm:w-40 md:w-48 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider sm:tracking-widest text-red-500 mb-3 sm:mb-4">CALIFORNIA GYM</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Moderna teretana sa kompletnom opremom za sve vrste treninga
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
            <div>
              <h2 className="text-4xl md:text-6xl mb-6 text-white tracking-widest uppercase">
                O <span className="text-red-600">Teretani</span>
              </h2>
              <div className="w-32 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg text-gray-300 mb-6">
                Sportski centar California Gym je moderna teretana opremljena najnovijim spravama i opremom. 
                Nudimo slobodan pristup tokom radnog vremena, što znači da treniraš kada ti odgovara, 
                bez obaveza i ograničenja.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Imamo sve što ti treba: sprave za sve mišićne grupe, kardio zonu, 
                klimatizovan prostor i svlačionice. Iskusni treneri su dostupni za savete i pomoć.
              </p>

              <div className="bg-black border-l-4 border-red-600 p-6 mb-8">
                <p className="text-gray-300">
                  Bilo da treniraš samostalno ili želiš personalni program, naša teretana 
                  nudi uslove za postizanje svih fitness ciljeva.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-zinc-900 border-2 border-red-900/30 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1676109829011-a9f0f3e40f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2MjkzNzQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Gym Equipment"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="h-64 bg-zinc-900 border-2 border-red-900/30 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3ltJTIwYm9keWJ1aWxkaW5nfGVufDF8fHx8MTc2Mjk2Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Training"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-64 bg-zinc-900 border-2 border-red-900/30 overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1609519734087-abdf808c6ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJvbmclMjBtYW4lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI5Njc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Strong Training"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                  <div className="h-48 bg-zinc-900 border-2 border-red-900/30 flex items-center justify-center">
                    <Award className="w-16 h-16 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              Šta <span className="text-red-600">Nudimo</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gymFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-zinc-950 border-2 border-red-900/30 p-6 hover:border-red-600 transition-all group"
              >
                <CheckCircle className="w-8 h-8 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-gray-300">{feature}</p>
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
            {/* <p className="text-xl text-gray-400">
              Bez skrivenih troškova. Samo čista cena za čist rad.
            </p> */}
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
                      Najpopularnije
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

      {/* Schedule Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-950 border-2 border-red-900/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-12 h-12 text-red-600" />
              <h2 className="text-3xl text-white uppercase tracking-wide">
                Radno Vreme
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-xl text-white mb-2">Ponedeljak - Petak</p>
                <p className="text-3xl text-red-600">08:00 - 23:00</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-xl text-white mb-2">Subota</p>
                <p className="text-3xl text-red-600">08:00 - 23:00</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6">
                <p className="text-xl text-white mb-2">Nedelja</p>
                <p className="text-3xl text-red-600">Slobodan dan</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6 flex items-center">
                <div>
                  <p className="text-xl text-white mb-2">Slobodan Ulaz</p>
                  <p className="text-gray-400">Treniraš kad želiš</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-900/10 border-2 border-red-600 p-8 text-center">
            <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl text-white uppercase tracking-wide mb-4">
              Spreman da počneš?
            </h3>
            <p className="text-gray-300 mb-6">
              Dođi da vidiš teretanu uživo. Prvi trening je besplatan za nove članove!
            </p>
            <Link
              to="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
            >
              Kontaktiraj Nas
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}