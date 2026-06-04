import { Project, Certification, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: 'Emanuel Sousa',
  role: 'Estudante de Engenharia de Software',
  location: 'Brasil',
  bio: 'Estudante de Engenharia de Software terminando o 1º período em busca de oportunidades de estágio ou desenvolvimento júnior, focado em consolidar conhecimentos em lógica de programação, estrutura de dados e desenvolvimento de software.',
  avatarUrl: 'https://github.com/emanuelangelim18-hue.png', // Fallback direct fetch of user GitHub avatar
  githubUrl: 'https://github.com/emanuelangelim18-hue',
  linkedinUrl: 'https://www.linkedin.com/in/emanuel-sousa-dev/',
  email: 'emanuelangelim18@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Sistema de Gestão de Formatura',
    language: 'Linguagem C',
    description: 'Desenvolvimento de uma solução de console robusta e estruturada para gerenciamento de eventos de formatura e controle financeiro.',
    bullets: [
      'Implementação de registros estruturados (structs) altamente organizados para formandos, fornecedores, cupons e transações do fluxo de caixa.',
      'Desenvolvimento de módulos de pagamentos robustos (PIX, dinheiro e cartões) com controle automatizado e auditoria simples de saldos.',
      'Criação de interface via terminal CLI polida com mecanismos de login de administrador, navegação interativa e animações de barras de progresso.',
      'Motor de geração de relatórios automatizados informando saldos parciais, despesas e status de adimplência geral.'
    ],
    repoUrl: 'https://github.com/emanuelangelim18-hue/Logica-C/blob/main/TRABALHO%20P2%20SNYDER%20FORMATURA%203%20ANOO.c',
    tags: ['C', 'Estruturas de Dados', 'Lógica Estruturada', 'Interface CLI', 'Controle Financeiro']
  },
  {
    id: '2',
    title: 'Simulador Bancário',
    language: 'Linguagem C',
    description: 'Aplicação interativa que simula o funcionamento lógico de um terminal de autoatendimento bancário clássico.',
    bullets: [
      'Consolidação prática de fluxos condicionais complexos, validação rigorosa de entradas de usuário e manipulação segura de variáveis em escopo.',
      'Implementação segura de rotinas de depósitos, retiradas, verificação de extrato ativo e controle persistente de saldo em memória.'
    ],
    repoUrl: 'https://github.com/emanuelangelim18-hue/Logica-C/blob/main/Banco.c',
    tags: ['C', 'Lógica de Programação', 'Algoritmos', 'Interface CLI']
  },
  {
    id: '3',
    title: 'Projeto de Automatização diária',
    language: 'Python',
    description: 'Script utilitário inteligente desenvolvido para otimizar fluxos de trabalho do dia a dia e manter o desenvolvedor bem informado.',
    bullets: [
      'Automatização de rotinas repetitivas como inicialização coordenada de apps de estudo/desenvolvimento e seleção de contas de usuário de forma autônoma.',
      'Módulo de web scraping ou consulta de feeds integrado para capturar, formatar e apresentar compilados diários com as top 5 notícias tech do mundo.'
    ],
    repoUrl: 'https://github.com/emanuelangelim18-hue/Python/blob/main/Rotina.py',
    tags: ['Python', 'Automação', 'Produtividade', 'Notícias Tech', 'Scripts de OS']
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert_1',
    title: 'Curso de Git para Iniciantes',
    issuer: 'ICEV',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQFGrD8Ui6cQ2A/feedshare-shrink_480/B4EZ3J8UrQKYAk-/0/1777209527276?e=1782345600&v=beta&t=zSxscetBAd1B-Kh-GEBQLN7d9AjHwqtEPN_G94AoHho',
    url: 'https://media.licdn.com/dms/image/v2/D4E22AQFGrD8Ui6cQ2A/feedshare-shrink_480/B4EZ3J8UrQKYAk-/0/1777209527276?e=1782345600&v=beta&t=zSxscetBAd1B-Kh-GEBQLN7d9AjHwqtEPN_G94AoHho',
    status: 'concluido'
  },
  {
    id: 'cert_2',
    title: 'Curso de Algoritmos',
    issuer: 'Curso em Vídeo',
    imageUrl: 'https://i.postimg.cc/qq2RjjBN/algoritmos-curso.png',
    url: 'https://i.postimg.cc/qq2RjjBN/algoritmos-curso.png',
    status: 'concluido'
  },
  {
    id: 'cert_3',
    title: 'Linux Fundamentals',
    issuer: 'Red Hat Academy',
    imageUrl: '', // Will treat empty image as placeholder/badge
    url: '',
    status: 'em_andamento'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Linguagens & Fundamentos',
    skills: ['Linguagem C', 'Python', 'Algoritmos recomendados', 'Lógica de Programação'],
    icon: 'Code2'
  },
  {
    title: 'Estruturas & Métodos',
    skills: ['Estruturas de Dados', 'Git & Versionamento', 'Fluxo de Caixa / Relatórios', 'Interface CLI'],
    icon: 'Binary'
  },
  {
    title: 'Sistemas & Infra',
    skills: ['Linux Fundamentals (Red Hat)', 'Automatização de Tarefas', 'Ambiente CLI Bash', 'Configuração de rotinas'],
    icon: 'Terminal'
  }
];
