import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 text-white tracking-widest uppercase">
            <span className="text-red-600">Kontakt</span>
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pridruži se porodici. Nema čekanja, samo akcija.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* California Gym */}
          <div className="bg-zinc-950 border-2 border-red-900/30 p-8 hover:border-red-600 transition-all">
            <h3 className="text-3xl text-white uppercase tracking-wide mb-6 border-b-2 border-red-600 pb-4">
              California Gym
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white uppercase text-sm tracking-wide mb-1">Lokacija</h4>
                  <p className="text-gray-400">Adresa teretane</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white uppercase text-sm tracking-wide mb-1">Telefon</h4>
                  <p className="text-gray-400">Pozovi za info</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white uppercase text-sm tracking-wide mb-1">Radno Vreme</h4>
                  <p className="text-gray-400">Pon - Pet: 06:00 - 23:00</p>
                  <p className="text-gray-400">Sub: 08:00 - 22:00</p>
                  <p className="text-gray-400">Ned: 08:00 - 20:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kickbox Srbija */}
          <div className="bg-zinc-950 border-2 border-red-900/30 p-8 hover:border-red-600 transition-all">
            <h3 className="text-3xl text-white uppercase tracking-wide mb-6 border-b-2 border-red-600 pb-4">
              Kickbox Srbija
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white uppercase text-sm tracking-wide mb-1">Lokacija</h4>
                  <p className="text-gray-400">Ista adresa kao California Gym</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white uppercase text-sm tracking-wide mb-1">Telefon</h4>
                  <p className="text-gray-400">Pozovi za raspored treninga</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="text-white uppercase text-sm tracking-wide mb-1">Treninzi</h4>
                  <p className="text-gray-400">Grupni: Uto, Čet, Sub</p>
                  <p className="text-gray-400">Individualni: Dogovor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Call to Action */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-red-900/10 border-2 border-red-600 p-8 text-center">
            <h3 className="text-2xl text-white uppercase tracking-wide mb-4">
              Spreman si?
            </h3>
            <p className="text-gray-300 mb-6">
              Dođi i vidi sam zašto smo najbolji. Prva probna sesija je na nas.
            </p>
            <div className="flex gap-4 justify-center mb-6">
              <a 
                href="tel:+381000000000" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
              >
                Pozovi Sad
              </a>
              <a 
                href="#services" 
                className="bg-transparent hover:bg-red-600/20 text-white px-8 py-3 uppercase tracking-wider transition-all duration-300 border-2 border-red-600"
              >
                Saznaj Više
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 justify-center">
              <a 
                href="#" 
                className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-black border-2 border-red-600 flex items-center justify-center hover:bg-red-600 transition-all"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    </section>
  );
}
