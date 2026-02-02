import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-red-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Dumbbell className="w-8 h-8 text-red-600" />
            <div>
              <h1 className="text-2xl tracking-wider text-red-600">CALIFORNIA</h1>
              <p className="text-xs text-gray-400 tracking-widest">KICKBOX PETROVAC</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-red-600 transition-colors tracking-wide uppercase text-sm">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-600 transition-colors tracking-wide uppercase text-sm">
              O Nama
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-600 transition-colors tracking-wide uppercase text-sm">
              Treninzi
            </button>
            <button onClick={() => scrollToSection('trainers')} className="text-gray-300 hover:text-red-600 transition-colors tracking-wide uppercase text-sm">
              Treneri
            </button>
            <button onClick={() => scrollToSection('shop')} className="text-gray-300 hover:text-red-600 transition-colors tracking-wide uppercase text-sm">
              Shop
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-600 transition-colors tracking-wide uppercase text-sm">
              Kontakt
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-900/30">
            <nav className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-red-600 transition-colors text-left tracking-wide uppercase text-sm">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-600 transition-colors text-left tracking-wide uppercase text-sm">
                O Nama
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-600 transition-colors text-left tracking-wide uppercase text-sm">
                Treninzi
              </button>
              <button onClick={() => scrollToSection('trainers')} className="text-gray-300 hover:text-red-600 transition-colors text-left tracking-wide uppercase text-sm">
                Treneri
              </button>
              <button onClick={() => scrollToSection('shop')} className="text-gray-300 hover:text-red-600 transition-colors text-left tracking-wide uppercase text-sm">
                Shop
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-600 transition-colors text-left tracking-wide uppercase text-sm">
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
