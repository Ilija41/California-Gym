import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3ltJTIwYm9keWJ1aWxkaW5nfGVufDF8fHx8MTc2Mjk2Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="California Gym"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="absolute inset-0 bg-red-900/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="inline-block border-2 sm:border-4 border-red-600 p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider sm:tracking-widest mb-2">CALIFORNIA</h1>
            <div className="h-0.5 sm:h-1 bg-red-600 w-full mb-2"></div>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl tracking-wider sm:tracking-widest text-red-500">KICKBOX PETROVAC</p>
          </div>
        </div>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 tracking-wide uppercase text-gray-300">
          Profesionalna teretana i kickbox klub
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-400 mb-6 sm:mb-8 px-4">
          Moderna oprema, iskusni treneri, raznovrsni treninzi i suplementi
        </p>
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-4">
          <a 
            href="#services" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider transition-all duration-300 transform hover:scale-105 border-2 border-red-600"
          >
            Treninzi
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-red-600/20 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
          >
            Kontakt
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}