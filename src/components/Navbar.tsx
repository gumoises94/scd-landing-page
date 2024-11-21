import React from 'react';
import { Menu, X } from 'lucide-react';
import IconImage from '../assets/sena-creative-design-logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={IconImage}
              alt="App Icon"
              style={{ width: 50, height: 50 }}
            />
            <span className="ml-2 text-2xl font-bold text-white">
              Sena Creative Design
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white hover:text-[#ecbf82] transition-colors"
              >
                Início
              </a>
              <a
                href="#services"
                className="text-white hover:text-[#ecbf82] transition-colors"
              >
                Serviços
              </a>
              <a
                href="#portfolio"
                className="text-white hover:text-[#ecbf82] transition-colors"
              >
                Portifólio
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#ecbf82] transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block text-white hover:text-[#ecbf82] px-3 py-2"
            >
              Início
            </a>
            <a
              href="#services"
              className="block text-white hover:text-[#ecbf82] px-3 py-2"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="block text-white hover:text-[#ecbf82] px-3 py-2"
            >
              Portifólio
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-[#ecbf82] px-3 py-2"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
