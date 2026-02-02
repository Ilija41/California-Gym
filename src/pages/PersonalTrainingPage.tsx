import { Link } from 'react-router-dom';
import { ArrowLeft, UserCheck, Target, TrendingUp, Award, Zap, Calendar } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const benefits = [
  {
    icon: Target,
    title: 'Prilagođen Program',
    description: 'Plan treninga kreiran samo za tebe - tvoje ciljeve, tvoje mogućnosti, tvoj tempo'
  },
  {
    icon: TrendingUp,
    title: 'Brži Rezultati',
    description: 'Sa profesionalnim trenerom napredak je efikasniji i rezultati vidljiviji.'
  },
  {
    icon: Award,
    title: 'Ekspertiza Trenera',
    description: 'Branko i Vuk Glasnović imaju godine iskustva u radu sa sportistima svih nivoa'
  },
  {
    icon: Zap,
    title: 'Individualna Pažnja',
    description: 'Trener posvećen samo tebi tokom celog treninga - korekcija tehnike, motivacija, praćenje'
  }
];

const trainingGoals = [
  {
    title: 'Mršavljenje',
    description: 'Izgubi kilograme zdravo i efikasno. Kombinacija kardio i snage.',
    image: 'https://images.unsplash.com/photo-1758875568823-34bdf47b82dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBtdXNjdWxhcnxlbnwxfHx8fDE3NjI5Njc4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Hipertrofija',
    description: 'Gradnja mišićne mase. Program za povećanje snage i volumena.',
    image: 'https://images.unsplash.com/photo-1609519734087-abdf808c6ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJvbmclMjBtYW4lMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjI5Njc4NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Kondicija',
    description: 'Poboljšaj izdržljivost, brzinu, eksplozivnost. Priprema za sport.',
    image: 'https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWNrYm94aW5nJTIwdHJhaW5pbmclMjBmaWdodGVyfGVufDF8fHx8MTc2Mjk2Nzg1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Rehabilitacija',
    description: 'Oporavak posle povrede. Vraćanje u formu sa oprezom i stručnošću.',
    image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3ltJTIwYm9keWJ1aWxkaW5nfGVufDF8fHx8MTc2Mjk2Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const packages = [

  {
    name: '12 Treninga',
    sessions: '12 sesija',
    price: '12.000 RSD',
    perSession: '1.000 RSD po treningu',
    description: '',
    popular: true,
    savings: ''
  },

];

const howItWorks = [
  {
    step: '01',
    title: 'Konsultacija',
    description: 'Pričamo o tvojim ciljevima, iskustvu, zdravstvenom stanju. Sve što trener mora da zna.'
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Trener kreira individualan program treninga i ishrane prilagođen samo tebi.'
  },
  {
    step: '03',
    title: 'Izvođenje',
    description: 'Svaki trening je pod nadzorom. Trener prati tehniku, intenzitet, progres.'
  },
  {
    step: '04',
    title: 'Prilagođavanje',
    description: 'Program se menja kako napreduješ. Stalno usavršavanje i optimizacija.'
  }
];

export function PersonalTrainingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758875568823-34bdf47b82dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBtdXNjdWxhcnxlbnwxfHx8fDE3NjI5Njc4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Personal Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
          <div className="absolute inset-0 bg-red-900/20"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
          <UserCheck className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-600 mx-auto mb-4 sm:mb-6" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl tracking-wider sm:tracking-widest mb-2 sm:mb-4">PERSONALNI</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider sm:tracking-widest mb-4 sm:mb-6">TRENING</h2>
          <div className="h-0.5 sm:h-1 bg-red-600 w-48 sm:w-56 md:w-64 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider sm:tracking-widest text-red-500 mb-3 sm:mb-4">1 NA 1 SA PROFESIONALCIMA</p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Tvoj trener. Tvoj plan. Tvoji rezultati.
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

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              Zašto <span className="text-red-600">Personalni</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Razlika između rezultata i gubitka vremena je kvalitetan trener
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-black border-2 border-red-900/30 p-8 hover:border-red-600 transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-red-900/20 border-2 border-red-600 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/20 transition-all">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white uppercase tracking-wide mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-red-900/10 border-2 border-red-600 p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              Personalni trening pruža fokusiranu pažnju i prilagođen program koji omogućava 
              brže i efikasnije postizanje rezultata uz stručno vođenje profesionalnih trenera.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              Tvoji <span className="text-red-600">Ciljevi</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Bilo koji cilj imaš - imamo program za to
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingGoals.map((goal, index) => (
              <div 
                key={index}
                className="bg-zinc-950 border-2 border-red-900/30 overflow-hidden hover:border-red-600 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={goal.image}
                    alt={goal.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white uppercase tracking-wide mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              Kako <span className="text-red-600">Funkcioniše</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-24 h-24 bg-black border-4 border-red-600 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-red-600">{item.step}</span>
                </div>
                <h3 className="text-2xl text-white uppercase tracking-wide mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
              <span className="text-red-600">Paketi</span>
            </h2>
            <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-400">
              Izaberi paket koji odgovara tvojim potrebama
            </p>
          </div>

          <div className="center gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-zinc-950 border-2 p-8 relative ${
                  pkg.popular 
                    ? 'border-red-600 scale-105' 
                    : 'border-red-900/30 hover:border-red-600'
                } transition-all duration-300`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-600 text-white px-4 py-1 text-sm uppercase tracking-wider">
                      Najpopularnije
                    </span>
                  </div>
                )}
                {pkg.savings && (
                  <div className="absolute -top-4 right-4">
                    <span className="bg-green-600 text-white px-3 py-1 text-xs uppercase tracking-wider">
                      {pkg.savings}
                    </span>
                  </div>
                )}
                <h3 className="text-3xl text-white uppercase tracking-wide mb-2 text-center">
                  {pkg.name}
                </h3>
                <p className="text-red-600 text-center mb-6 uppercase tracking-wider text-sm">
                  {pkg.sessions}
                </p>
                <div className="text-center mb-4">
                  <p className="text-5xl text-red-600 mb-2">{pkg.price}</p>
                  <p className="text-gray-400 text-sm">{pkg.perSession}</p>
                </div>
                <p className="text-gray-400 text-sm text-center mb-6">{pkg.description}</p>
                <Link
                  to="/#contact"
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 uppercase tracking-wider transition-all duration-300"
                >
                  Zakaži
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-black border-2 border-red-900/30 p-8">
            <div className="flex items-start gap-6">
              <Calendar className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white uppercase tracking-wide mb-4">
                  Fleksibilnost
                </h3>
                <p className="text-gray-400 mb-4">
                  Treninge zakazuješ po dogovoru sa trenerom, prilagođeno tvom rasporedu.
                </p>
                <p className="text-gray-300">
                  Svaka sesija traje 60 minuta individualnog, fokusiranog rada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers CTA */}
      <section className="py-20 bg-zinc-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black border-4 border-red-600 p-12 text-center">
            <h2 className="text-4xl md:text-5xl text-white uppercase tracking-wide mb-6">
              Tvoji Treneri
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Branko i Vuk Glasnović vode sve personalne treninge. 
              Sa godinama iskustva i stotinama zadovoljnih klijenata, pružaju profesionalnu podršku 
              u postizanju tvojih ciljeva. Fokusirani su na pružanje kvalitetnih rezultata kroz individualno prilagođen pristup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#trainers"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
              >
                Upoznaj Trenere
              </Link>
              <Link
                to="/#contact"
                className="bg-transparent hover:bg-red-600/20 text-white px-8 py-4 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
              >
                Zakaži Konsultaciju
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}