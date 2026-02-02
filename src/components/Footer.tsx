import { Dumbbell } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-red-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-xl tracking-wider text-red-600">CALIFORNIA</h3>
                <p className="text-xs text-gray-400 tracking-widest">KICKBOX PETROVAC</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Gde se prave pobednici. Gde nema mesta za slabosti.
            </p>
          </div>

          {/* Quick Info */}
          <div>
            <h4 className="text-white uppercase tracking-wide mb-4">Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Teretana • Kickbox • Personalni Treninzi</li>
              <li>Treneri: Branko i Vuk "Djeka" Glasnović</li>
              <li>Suplementi dostupni</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white uppercase tracking-wide mb-4">Navigacija</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/#home" className="hover:text-red-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="/#about" className="hover:text-red-600 transition-colors">O Nama</a>
              </li>
              <li>
                <a href="/#services" className="hover:text-red-600 transition-colors">Treninzi</a>
              </li>
              <li>
                <a href="/#trainers" className="hover:text-red-600 transition-colors">Treneri</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-red-600 transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-900/30 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} California Gym & Kickbox Petrovac
          </p>
          <p className="text-gray-600 text-xs uppercase tracking-widest">
            Bez Kompromisa • Bez Izgovora • Bez Granica
          </p>
        </div>
      </div>
    </footer>
  );
}
