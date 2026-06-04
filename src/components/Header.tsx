import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link tracker on scroll
      const sections = ['home', 'competencias', 'curriculo', 'projetos'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Quem Sou', id: 'home' },
    { name: 'Competências & Certificados', id: 'competencias' },
    { name: 'Currículo', id: 'curriculo' },
    { name: 'Projetos', id: 'projetos' },
  ];

  return (
    <header
      id="portfolio-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-900 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo block */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm tracking-widest text-slate-100 font-bold uppercase transition-colors group-hover:text-sky-400">
            {PERSONAL_INFO.name}
          </span>
        </button>

        {/* Desktop Links */}
        <nav aria-label="Negação principal" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer focus:outline-none relative py-1 ${
                activeSection === link.id
                  ? 'text-sky-400'
                  : 'text-slate-400 hover:text-slate-100'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-sky-500 to-indigo-505 bg-sky-400 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg transition-all"
            title="Acessar GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg transition-all"
            title="Conectar no LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 border border-transparent hover:border-slate-800 rounded-lg transition-all"
            title="Enviar E-mail"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-900 rounded-lg focus:outline-none"
            aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu panel */}
      {isOpen && (
        <div className="md:hidden absolute top-auto left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-slate-900 px-6 py-6 flex flex-col gap-5 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left text-base font-semibold py-2 border-b border-slate-900 transition-colors ${
                  activeSection === link.id ? 'text-sky-400' : 'text-slate-400'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900 border border-slate-800/80 px-4 py-2 rounded-xl hover:bg-slate-850 w-full justify-center transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900 border border-slate-800/80 px-4 py-2 rounded-xl hover:bg-slate-850 w-full justify-center transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
