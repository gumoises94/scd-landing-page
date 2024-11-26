import React from 'react';
import "./App.css";
import { NotebookTabs, Palette, School, Ruler, Star, Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import LargeLogo from './assets/sena-creative-design-logo-large.jpeg';
import VisualIdentity from './assets/id-visual.jpeg';
import Stationery from './assets/papelaria.jpeg';
import Facade from './assets/fachada.jpeg';
import Interior from './assets/interior.jpeg';

function App() {
  const openProjectLink = (link:string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Soluções em Design{' '}
                <span className="text-[#cb6a9d]">Criativo</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforme sua marca com nossos serviços de design inovadores.
                Damos vida à sua visão com visuais impressionantes e excelência
                criativa.
              </p>
              {/*<button className="bg-[#cb6a9d] hover:bg-[#ecbf82] text-white px-8 py-3 rounded-full flex items-center gap-2 transition-colors">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>*/}
            </div>
            <div className="relative">
              <div className="w-full h-[400px] rounded-2xl overflow-hidden">
                <img
                  src={LargeLogo}
                  alt="Design workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nossos Serviços</h2>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Identidade Visual',
                desc: 'Crie uma identidade de marca única e memorável que o diferencie no mercado',
              },
              {
                icon: <NotebookTabs className="w-8 h-8" />,
                title: 'Papelaria',
                desc: 'Tudo para sua criatividade e organização: papéis, materiais e soluções personalizadas',
              },
              {
                icon: <School className="w-8 h-8" />,
                title: 'Fachadas',
                desc: 'Damos vida à sua marca com fachadas únicas que destacam seu negócio',
              },
              {
                icon: <Ruler className="w-8 h-8" />,
                title: 'Interiores',
                desc: 'Design interno que reflete a essência da sua marca"',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-black/40 border border-[#cb6a9d]/20 hover:border-[#cb6a9d] transition-colors"
              >
                <div className="text-[#ecbf82] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projetos em Destaque
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {img: VisualIdentity, link: 'https://www.instagram.com/p/C2vQnMXv5Nz/?igsh=bm5nN2IzMjNlM3h1'},
              {img: Stationery, link: 'https://www.instagram.com/p/Cy6iy-XJ0Ik/?igsh=MWJub3Qyd3Zlajd5aA=='},
              {img: Facade, link: 'https://www.instagram.com/reel/CwBQDj9J-Tn/?igsh=MWRyajVqcWhjYjM5MA=='},
              {img: Interior, link: 'https://www.instagram.com/p/Cgw1397r1ew/?igsh=djNvNmhnamZ3dm82'},
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl div-link"
                onClick={() => openProjectLink(item.link)}>
                <img
                  src={item.img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-[#ecbf82] mx-auto mb-2" />
                    <p className="text-white">
                      Visualizar projeto
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Contato
          </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="p-8 rounded-xl bg-black/40 border border-[#cb6a9d]/20 hover:border-[#cb6a9d] transition-colors"
              >
                <div className="text-[#ecbf82] mb-4"><Phone className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3">Celular/Whatsapp</h3>
                <p className="text-gray-400">(11) 93308-6480</p>
              </div>

          <div className="p-8 rounded-xl bg-black/40 border border-[#cb6a9d]/20 hover:border-[#cb6a9d] transition-colors">
            <div className="text-[#ecbf82] mb-4"><Mail className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <a href="mailto:patricia.sena21@outlook.com.br" 
              className="text-blue-400 hover:text-blue-700">
                patricia.sena21@outlook.com.br
              </a>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Sena Creative Design. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
