import { useState } from 'react';
import { Award, Clock, Code2, Binary, Terminal, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS, SKILLS } from '../data';
import { Certification } from '../types';
import ImageModal from './ImageModal';

export default function SkillsAndCertifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Helper function to map dynamic string name to Lucide components
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-sky-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="competencias" className="py-24 bg-[#020617] border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>Qualificações</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competências e Certificações
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-normal">
            Fundamentos sólidos construídos com foco em algoritmos, lógica robusta, arquitetura limpa e administração de sistemas.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Skills Categories (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 mb-2 font-mono uppercase tracking-wider text-xs">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              Matriz de Conhecimento
            </h3>

            {SKILLS.map((category) => (
              <div
                key={category.title}
                className="p-5 glass-card rounded-2xl flex flex-col gap-4 glow-card"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-900/60 rounded-xl border border-slate-850">
                    {renderSkillIcon(category.icon)}
                  </div>
                  <h4 className="font-semibold text-slate-100 text-sm tracking-wide">{category.title}</h4>
                </div>
                
                <div className="flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 bg-sky-500/60 rounded-full" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Certifications Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 mb-2 font-mono uppercase tracking-wider text-xs">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
              Credenciais Oficiais
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => {
                const isUnderway = cert.status === 'em_andamento';
                return (
                  <div
                    key={cert.id}
                    className={`relative p-5 rounded-2xl border transition-all flex flex-col justify-between h-48 group ${
                      isUnderway
                        ? 'bg-slate-950/40 border-slate-900 text-slate-400'
                        : 'glass-card cursor-pointer glow-card'
                    }`}
                    onClick={() => {
                      if (!isUnderway && cert.imageUrl) {
                        setSelectedCert(cert);
                      }
                    }}
                  >
                    {/* Header: Title and Status badge */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isUnderway
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                          }`}
                        >
                          {isUnderway ? (
                            <>
                              <Clock className="w-2.5 h-2.5 animate-spin" />
                              <span>Em andamento</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-2.5 h-2.5" />
                              <span>Verificado</span>
                            </>
                          )}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-200 text-sm leading-snug group-hover:text-white transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono font-medium">{cert.issuer}</p>
                    </div>

                    {/* Bottom Prompt / Call to action */}
                    <div className="pt-4 border-t border-slate-900/40 flex items-center justify-between text-[11px] font-mono">
                      {isUnderway ? (
                        <span className="text-slate-600">Red Hat Academy</span>
                      ) : (
                        <span className="text-sky-400 group-hover:underline flex items-center gap-1 cursor-pointer">
                          Ver Credencial <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note about credentials */}
            <p className="text-xs text-slate-500 font-mono mt-2 tracking-wide text-center lg:text-left">
              * Clique em qualquer certificado verificado para visualizar o comprovante oficial emitido de forma direta.
            </p>
          </div>

        </div>

      </div>

      {/* Lightbox Credential Zoomer Modal */}
      {selectedCert && (
        <ImageModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          imageUrl={selectedCert.imageUrl}
          title={selectedCert.title}
          issuer={selectedCert.issuer}
        />
      )}
    </section>
  );
}
