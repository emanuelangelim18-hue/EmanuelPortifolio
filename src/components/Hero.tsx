import { Github, Linkedin, Mail, ChevronRight, Terminal, User, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projetos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#020617]"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, #38bdf8 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Decorative colored ambient glows */}
      <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] min-w-[250px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none select-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] min-w-[200px] bg-sky-400/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Text and Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-12 xl:col-span-7 flex flex-col items-start space-y-6"
        >
          {/* Accent decoration bar from Elegant Dark Design */}
          <div className="w-16 h-1 bg-sky-500 rounded-full mb-2" />

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            <span>Engenharia de Software • ICEV • 1º Período</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-sm font-mono tracking-widest text-slate-500 uppercase">
              Olá, eu sou o
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6.5xl font-extralight tracking-tight text-white select-all">
              EMANUEL <span className="font-semibold text-sky-400">SOUSA</span>
            </h2>
          </div>

          <p className="text-slate-450 text-slate-350 text-base sm:text-lg leading-relaxed max-w-xl font-light">
            {PERSONAL_INFO.bio}
          </p>

          {/* Core Skill Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Algoritmos', 'Lógica de Programação', 'Linguagem C', 'Python', 'Linux Fundamentals', 'Git/GitHub'].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Social CTA & Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#020617] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-sky-950/40 group cursor-pointer"
            >
              <span>Ver Meus Projetos</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center justify-center gap-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-850/80 border border-slate-800/80 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-mono"
              >
                <Linkedin className="w-4.5 h-4.5 text-sky-400" />
                <span className="sm:hidden lg:inline text-xs">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-850/80 border border-slate-800/80 rounded-xl transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-sm font-mono"
              >
                <Github className="w-4.5 h-4.5 text-sky-400" />
                <span className="sm:hidden lg:inline text-xs">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Virtual Interactive Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-12 xl:col-span-5 hidden lg:block"
        >
          <div className="w-full bg-[#0a0f1d]/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm max-w-md mx-auto glow-card">
            {/* Terminal Top bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0c1328]/80 border-b border-slate-900">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Terminal className="w-3 h-3 text-sky-400" />
                main.c
              </span>
              <div className="w-12 h-1" />
            </div>

            {/* Terminal Body code content */}
            <div className="p-5 space-y-2.5 text-slate-400 selection:bg-sky-500/30">
              <div>
                <span className="text-sky-400 font-medium">#include</span>{' '}
                <span className="text-amber-400">&lt;stdio.h&gt;</span>
              </div>
              <div>
                <span className="text-sky-400 font-medium">#include</span>{' '}
                <span className="text-amber-400">&lt;stdbool.h&gt;</span>
              </div>
              
              <div className="pt-2">
                <span className="text-sky-300">int</span>{' '}
                <span className="text-yellow-405 text-sky-400 font-medium">main</span>() &#123;
              </div>

              <div className="pl-6 text-slate-500">// Buscando consolidar conceitos básicos</div>
              
              <div className="pl-6">
                <span className="text-purple-400">char</span> devName[] ={' '}
                <span className="text-amber-400">"Emanuel"</span>;
              </div>
              <div className="pl-6">
                <span className="text-purple-400">int</span> periodo = <span className="text-amber-400">1</span>;
              </div>
              <div className="pl-6">
                <span className="text-purple-400">bool</span> focadoEmAlgoritmos ={' '}
                <span className="text-sky-400">true</span>;
              </div>

              <div className="pl-6 pt-2 text-slate-500">// Exibindo objetivos</div>
              <div className="pl-6">
                <span className="text-sky-350">if</span> (focadoEmAlgoritmos) &#123;
              </div>
              <div className="pl-12">
                <span className="text-sky-400">printf</span>(
                <span className="text-amber-300">"Pronto para expandir!\n"</span>);
              </div>
              <div className="pl-6">&#125;</div>

              <div className="pl-6 pt-2">
                <span className="text-purple-400">return</span>{' '}
                <span className="text-amber-400">0</span>;
              </div>
              <div>&#125;</div>
            </div>

            {/* Command execute simulation line */}
            <div className="bg-[#040813]/90 p-4 text-slate-500 text-xs border-t border-slate-900 flex flex-col gap-1.5 select-none md:max-h-24 overflow-hidden">
              <span className="text-sky-400 font-bold">$ gcc main.c -o portfolio && ./portfolio</span>
              <span className="text-sky-400 font-bold">✔ Pronto para expandir!</span>
              <span className="text-slate-600 font-mono">[Process completed with exit code 0]</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
