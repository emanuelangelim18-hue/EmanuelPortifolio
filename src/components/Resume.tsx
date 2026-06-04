import { useState, useRef } from 'react';
import { FileText, Download, Printer, ExternalLink, Mail, Phone, MapPin, Linkedin, Github, Check } from 'lucide-react';

export default function Resume() {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const printSectionRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('emanuelangelim18@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="curriculo" className="py-24 bg-[#020617] border-t border-slate-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/15 text-sky-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>Documento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Meu Currículo Profissional
          </h2>
          <p className="text-slate-400 text-sm max-w-xl font-normal">
            Visualize minha trajetória acadêmica, competências técnicas e projetos diretamente no portfólio ou salve a versão em PDF.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Quick Actions and Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 glass-card rounded-2xl space-y-6">
              <div>
                <h3 className="text-sm font-mono tracking-widest text-sky-400 uppercase font-bold mb-2">
                  Ações do Documento
                </h3>
                <p className="text-slate-400 text-xs">
                  Você pode baixar o arquivo, imprimi-lo diretamente em PDF ou acessar os links interativos.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handlePrint}
                  className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-450 text-[#020617] font-semibold text-xs font-mono transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-950/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar em PDF</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 font-semibold text-xs font-mono border border-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-sky-400" />
                  <span>Imprimir Currículo</span>
                </button>
              </div>

              <div className="border-t border-slate-900 pt-5 space-y-4">
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Contatos Rápidos
                </h4>

                <div className="space-y-3">
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-3 text-xs text-slate-400 hover:text-slate-200 w-full text-left transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-sky-400">
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-mono">E-MAIL (CLIQUE P/ COPIAR)</p>
                      <p className="font-mono text-slate-300 text-[11px] truncate">emanuelangelim18@gmail.com</p>
                    </div>
                  </button>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-sky-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-mono">TELEFONE</p>
                      <p className="font-mono text-slate-300">(86) 99985-5243</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-sky-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-mono">LOCALIDADE</p>
                      <p className="font-mono text-slate-300">Teresina, PI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hint Box */}
            <div className="p-5 bg-sky-500/5 border border-sky-500/10 rounded-2xl text-xs text-sky-300 font-mono leading-relaxed space-y-2">
              <p className="font-bold flex items-center gap-1">
                <span>💡</span> Dica de Download:
              </p>
              <p className="text-slate-400 font-sans">
                Ao clicar em "Baixar em PDF", selecione a opção <strong>"Salvar como PDF"</strong> no destino da sua impressora. Marque a opção de <strong>"Simplificar página"</strong> ou desmarque os cabeçalhos do navegador para obter um currículo acadêmico pristine e perfeito!
              </p>
            </div>
          </div>

          {/* Right panel: Modern PDF sheet render preview in theme (8 cols) */}
          <div className="lg:col-span-8">
            <div className="w-full bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-2xl overflow-hidden print:border-none print:shadow-none print:m-0">
              
              {/* Fake PDF Header bar */}
              <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-mono print:hidden select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span>curriculo_emanuel_sousa.pdf</span>
                </div>
                <span className="text-[10px] text-slate-400">Visualização A4 Integrada</span>
              </div>

              {/* The Actual Sheet (Standard high quality paper stylings) */}
              <div
                ref={printSectionRef}
                id="printable-resume-sheet"
                className="p-8 sm:p-12 md:p-14 bg-white space-y-8 font-sans print:p-0 print:text-black selection:bg-sky-100"
              >
                {/* Header Section */}
                <div className="border-b-2 border-slate-900 pb-5 space-y-2.5">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Emanuel Sousa Assunção Angelim
                  </h1>
                  
                  {/* Contacts Line */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600 text-[11px] sm:text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" /> Teresina, PI
                    </span>
                    <span className="text-slate-300 select-none hidden sm:inline">|</span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-3 h-3 text-slate-500" /> emanuelangelim18@gmail.com
                    </span>
                    <span className="text-slate-300 select-none hidden sm:inline">|</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-slate-500" /> (86) 99985-5243
                    </span>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sky-600 text-[11.5px] font-mono">
                    <a
                      href="https://www.linkedin.com/in/emanuel-sousa-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <Linkedin className="w-3 h-3 shrink-0" /> linkedin.com/in/emanuel-sousa-dev
                    </a>
                    <span className="text-slate-300 select-none hidden sm:inline">|</span>
                    <a
                      href="https://github.com/emanuelangelim18-hue"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1"
                    >
                      <Github className="w-3 h-3 shrink-0" /> github.com/emanuelangelim18-hue
                    </a>
                  </div>
                </div>

                {/* Section: Objetivo */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b border-slate-200 pb-1 font-mono">
                    Objetivo
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-705 text-slate-700 leading-relaxed font-normal">
                    Estudante de Engenharia de Software em busca de oportunidades de estágio ou desenvolvimento júnior, focado em consolidar conhecimentos em lógica de programação, estrutura de dados e desenvolvimento de software.
                  </p>
                </div>

                {/* Section: Formacao Academica */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b border-slate-200 pb-1 font-mono">
                    Formação Acadêmica
                  </h2>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        Bacharelado em Engenharia de Software
                      </h3>
                      <p className="text-xs text-slate-600">iCEV — Instituto de Ciência, Engenharia e Tecnologia</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-full">
                        1º Período (Cursando)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section: Competências Técnicas */}
                <div className="space-y-2.5">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b border-slate-200 pb-1 font-mono">
                    Competências Técnicas
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="space-y-1">
                      <p>
                        <strong className="text-slate-900 font-bold">• Linguagens de Programação:</strong> C, HTML5, CSS3, Python.
                      </p>
                      <p>
                        <strong className="text-slate-900 font-bold">• Ferramentas e Ambientes:</strong> VS Code, Git, GitHub.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p>
                        <strong className="text-slate-900 font-bold">• Sistemas Operacionais:</strong> Linux (Fundamentos).
                      </p>
                      <p>
                        <strong className="text-slate-900 font-bold">• Conceitos:</strong> Estruturas de dados, lógica, algoritmos, modularização.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section: Projetos em Destaque */}
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b border-slate-200 pb-1 font-mono">
                    Projetos em Destaque
                  </h2>

                  {/* Project 1 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        1. Sistema de Gestão de Formatura
                      </h3>
                      <span className="text-[10px] uppercase font-mono bg-slate-100 px-2 py-0.5 text-slate-700 rounded">
                        Linguagem C
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Desenvolvimento de um software de console estruturado para gerenciamento de eventos e controle financeiro. Implementação de structs, controle de fluxos de caixa e relatórios automatizados de saldo administrativo.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        2. Simulador Bancário
                      </h3>
                      <span className="text-[10px] uppercase font-mono bg-slate-100 px-2 py-0.5 text-slate-700 rounded">
                        Linguagem C
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Criação de uma aplicação interativa simulando o funcionamento de um terminal bancário de autoatendimento para consolidar conceitos de manipulação de variáveis e fluxo de execução.
                    </p>
                  </div>

                  {/* Project 3 */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                        3. Projeto de Automatização diária
                      </h3>
                      <span className="text-[10px] uppercase font-mono bg-slate-110 bg-slate-100 px-2 py-0.5 text-slate-700 rounded">
                        Python
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      Desenvolvimento de roteiros de automatização de pequenas tarefas diárias em Python (como abertura de apps e contas), com integração de web scraping de notícias técnicas para exibição de resumos tech.
                    </p>
                  </div>
                </div>

                {/* Section: Certificações */}
                <div className="space-y-2">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-800 border-b border-slate-200 pb-1 font-mono">
                    Certificações
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0" />
                      <span>Linux Fundamentals — Red Hat Academy (Em Andamento)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0" />
                      <span>Curso de Git para Iniciantes — ICEV</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0" />
                      <span>Algoritmos e Lógica de Programação — Curso em Vídeo</span>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
