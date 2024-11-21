import React from 'react';
import { NotebookTabs, Palette, School, Ruler, Star } from 'lucide-react';
import Navbar from './components/Navbar';
import LogoLarge from './assets/sena-creative-design-logo-large.jpeg';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Soluções de Design{' '}
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
                  src={LogoLarge}
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
            Featured Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1613979813687-1cad02a99a68?auto=format&fit=crop&q=80',
              'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
            ].map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center">
                    <Star className="w-8 h-8 text-[#ecbf82] mx-auto mb-2" />
                    <p className="text-white">View Project</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Create Together</h2>
          <p className="text-gray-300 mb-8">
            Ready to transform your brand? Get in touch with us today.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#cb6a9d]/20 focus:border-[#cb6a9d] outline-none"
            />
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#cb6a9d]/20 focus:border-[#cb6a9d] outline-none"
            ></textarea>
            <button className="w-full bg-[#cb6a9d] hover:bg-[#ecbf82] text-white px-8 py-3 rounded-lg transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 Pixelcraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
