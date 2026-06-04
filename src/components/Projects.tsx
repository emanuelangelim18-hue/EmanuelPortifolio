import { Folder, Github, Code2, Cpu, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#020617] border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs font-mono">
            <Folder className="w-3.5 h-3.5" />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-normal">
            Aplicações focadas em resolver problemas reais de automatização, gestão estruturada e lógica de programação avançada.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project) => {
            const isC = project.language.toLowerCase().includes('c');
            return (
              <div
                key={project.id}
                className="flex flex-col justify-between glass-card rounded-2xl p-6 glow-card transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Upper block */}
                <div>
                  {/* Card Header: Folder icon and Language Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400">
                      {isC ? <Cpu className="w-5 h-5 text-sky-400" /> : <Code2 className="w-5 h-5 text-yellow-405 text-sky-400" />}
                    </div>
                    
                    <span
                      className={`text-[10px] uppercase tracking-wider font-mono font-bold px-2.5 py-1 rounded-md ${
                        isC
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/25'
                          : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/25'
                      }`}
                    >
                      {project.language}
                    </span>
                  </div>

                  {/* Project Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Features List (Bullets) */}
                  <div className="space-y-2 mb-6 border-t border-slate-900 pt-4">
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold mb-2">
                      Destaques da Implementação
                    </h4>
                    {project.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-normal">
                        <span className="text-sky-450 text-sky-400 font-bold select-none pt-0.5">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom block */}
                <div className="space-y-5 pt-4 border-t border-slate-900">
                  {/* Tooling Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA button: Ver Código */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium text-xs font-mono text-slate-200 bg-slate-900/60 hover:bg-sky-500 hover:text-[#020617] border border-slate-800 hover:border-sky-400 transition-all duration-300 shadow-md group animate-none"
                  >
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-[#020617] transition-colors" />
                    <span>Ver Código</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
