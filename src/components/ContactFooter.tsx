import { Mail, Linkedin, Github, Terminal, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-900 py-16 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        {/* Terminal decorative output */}
        <div className="w-full max-w-lg glass-card rounded-2xl p-5 mb-10 text-center font-mono text-xs glow-card">
          <div className="flex items-center gap-1.5 justify-center mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-500/80" />
            <span className="text-slate-500">contato.sh</span>
          </div>
          <p className="text-slate-400 mb-4 text-xs leading-relaxed">
            Interessado em agendar uma entrevista para estágio ou desenvolvimento júnior?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-sky-500/40 rounded-xl text-sky-400 hover:text-sky-300 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Brand signature and quick links */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-slate-900 pt-8 gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-600/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs text-slate-400 font-mono tracking-wider">
              {PERSONAL_INFO.name} • PORTFÓLIO DE REQUISITOS
            </span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-800">|</span>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition-all hover:border-slate-700 cursor-pointer"
            aria-label="Voltar para o topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Standard simple credits */}
        <div className="mt-8 text-[10px] text-slate-600 font-mono text-center">
          &copy; {new Date().getFullYear()} Emanuel Sousa. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}
