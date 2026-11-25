/** Conteúdo do portfólio. Para atualizar o site, edite apenas este arquivo. */

export interface ExperienceProject {
  client: string;
  title: string;
  period?: string;
  current?: boolean;
  highlights: string[];
  technologies: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  projects: ExperienceProject[];
}

export interface Product {
  id: 'liftme' | 'greentips';
  name: string;
  tagline: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  area: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const PROFILE = {
  firstName: 'Gabriel',
  lastName: 'Leite',
  role: 'Engenheiro de Software Sênior',
  intro:
    'Especialista em Angular e em aplicações com IA. Hoje, na IBM, lidero a arquitetura frontend de uma plataforma jurídica com IA para o Itaú Unibanco.',
  location: 'São Paulo, Brasil',
  email: 'galeite.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/-gabriel-leite/',
  github: 'https://github.com/galeite-repo',
  about: [
    'Sou engenheiro full stack com mais de 10 anos de experiência e visão 360° do ciclo de desenvolvimento: design de arquitetura, código, infraestrutura, CI/CD e produto final.',
    'Na IBM, atuo em projetos de grande porte para Itaú Unibanco e Petrobras, com Angular, Java Spring Boot, Node.js, NestJS, cloud (AWS, Azure e GCP) e DevOps.',
    'Mais recentemente, lidero o desenvolvimento de produtos AI First, com engenharia de prompts, integração com LLMs e interfaces conversacionais. Também sou empreendedor, com dois SaaS próprios em produção.',
  ],
};

export const CLIENTS = [
  'Itaú Unibanco',
  'Petrobras',
  'TIM',
  'Oi',
  'VTAL',
  'Porto Seguro',
  'Hospital Municipal de Osasco',
  'Workhäuss',
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'IBM',
    role: 'Engenheiro Full Stack Sênior',
    period: 'Dez 2023 – presente',
    projects: [
      {
        client: 'Itaú Unibanco',
        title: 'Plataforma jurídica com IA',
        period: 'Out 2025 – presente',
        current: true,
        highlights: [
          'Especialista frontend (Angular) em time com cientistas de dados, engenheiros de dados e engenheiros de IA, responsável por toda a camada de interface e experiência do usuário.',
          'Liderança da arquitetura frontend da plataforma, que substitui sistemas legados usados por departamentos internos do banco.',
          'Interface conversacional no estilo ChatGPT, integrada a múltiplos modelos e serviços de IA, para análise avançada de documentos e fluxos jurídicos.',
          'Orquestração de pipelines com AWS Lambda: OCR, extração de dados e inferência de IA em larga escala.',
          'Padrões avançados de Angular (SSR, arquitetura reativa, gerenciamento de estado) para experiências de alto desempenho e em tempo real.',
          'Elo estratégico entre as equipes de frontend, backend e engenharia de IA.',
        ],
        technologies: ['Angular', 'SSR', 'AWS Lambda', 'OCR', 'LLMs'],
      },
      {
        client: 'Petrobras',
        title: 'Gestão e monitoramento de sondas',
        period: 'Dez 2023 – Out 2025',
        highlights: [
          'Aplicação robusta e escalável para monitoramento e gestão de operações em plataformas de petróleo.',
          'Frontend em Angular com Lazy Loading, NgRx para gerenciamento de estado e SSR para performance e SEO.',
          'Backend com microsserviços em Java Spring Boot, com JPA e Hibernate para persistência.',
          'Mentoria de desenvolvedores júnior, promovendo boas práticas e aprendizado contínuo.',
          'Pipelines de CI/CD com Docker e Kubernetes para automação de builds e deploys.',
        ],
        technologies: ['Angular', 'NgRx', 'SSR', 'Java', 'Spring Boot', 'Hibernate', 'Docker', 'Kubernetes'],
      },
    ],
  },
  {
    company: 'IBM',
    role: 'Tech Lead, Automação',
    period: '2020 – 2023',
    projects: [
      {
        client: 'TIM, Oi e VTAL',
        title: 'Automação para telecomunicações',
        highlights: [
          'Ambiente de testes automatizados para projetos de telecomunicações, com Robot Framework e Python.',
          'Frontend em Angular integrado às APIs de backend para visualização e interação com dados de testes.',
          'Backend em Node.js para as funcionalidades de UI e dashboards.',
          'Liderança de equipe focada em automação e testes de regressão, garantindo qualidade e entrega contínua.',
          'Integração de processos de automação com Salesforce, otimizando fluxos de trabalho.',
          'Pipeline Jenkins + Docker para execução de testes em containers isolados, com paralelização e escalabilidade como serviço.',
        ],
        technologies: ['Robot Framework', 'Python', 'Angular', 'Node.js', 'Salesforce', 'Jenkins', 'Docker'],
      },
    ],
  },
  {
    company: 'WFS Web Cloud',
    role: 'Fundador e desenvolvedor líder',
    period: '2015 – 2020',
    projects: [
      {
        client: 'LIFT',
        title: 'Gestão empresarial para o setor de içamentos',
        highlights: [
          'Solução end-to-end para gestão de processos de negócio: orçamentos, vendas, financeiro, relatórios, logística e dashboards.',
          'Frontend em Angular com Bootstrap e RxJS para programação reativa.',
          'Backend em Java Spring Boot e Spring Cloud, com microsserviços, Eureka para service discovery e API Gateway.',
          'Atendimento direto aos clientes, levantamento de requisitos e entrega de soluções personalizadas.',
        ],
        technologies: ['Angular', 'RxJS', 'Bootstrap', 'Java', 'Spring Boot', 'Spring Cloud', 'Eureka'],
      },
      {
        client: 'Hospital Municipal de Osasco',
        title: 'Contrato de suporte de TI',
        highlights: [
          'Gestão do contrato de suporte técnico de TI, com equipe própria de 5 profissionais alocados.',
          'Responsável exclusivamente pela gestão: coordenação da equipe, SLAs, relacionamento com o cliente e supervisão das entregas.',
          'Atendimento estruturado com Gerente de TI e Suporte Nível 1, 2 e 3, de chamados básicos a incidentes críticos de infraestrutura.',
        ],
        technologies: ['Gestão de equipe', 'SLAs', 'Infraestrutura'],
      },
      {
        client: 'Workhäuss',
        title: 'Startup de coworking em bares e restaurantes',
        highlights: [
          "Construção de toda a infraestrutura física e lógica do negócio, viabilizando o coworking em estabelecimentos parceiros (Chez Oscar, Ruella, P.F. Chang's, Jazz nos Fundos).",
          'Rede nos estabelecimentos: cabeamento estruturado e Wi-Fi corporativo para uso simultâneo intensivo, das 9h às 18h.',
          'Plataforma de gestão de usuários: controle de acesso, planos (diária e mensalidade), autenticação e concierge digital.',
          'Infraestrutura em nuvem para o deploy da plataforma, com disponibilidade, escalabilidade e integração entre os pontos da rede.',
        ],
        technologies: ['Cloud', 'Redes', 'Autenticação'],
      },
    ],
  },
  {
    company: 'JRM Assessoria Empresarial',
    role: 'Desenvolvedor de software',
    period: '2013 – 2014',
    projects: [
      {
        client: 'Porto Seguro',
        title: 'Processamento automatizado de documentos',
        highlights: [
          'Configuração e otimização de Newgen OmniDocs e OmniFlow para captura, classificação e extração de dados via OCR.',
          'Regras de reconhecimento em Newgen para extração de informações de documentos médicos.',
          'Integração dos dados extraídos aos sistemas internos da Porto Seguro.',
          'Scripts de automação e serviços de integração em Java.',
        ],
        technologies: ['Java', 'Newgen OmniDocs', 'OmniFlow', 'OCR'],
      },
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'liftme',
    name: 'Liftme Manager PRO',
    tagline: 'SaaS para empresas de içamento',
    summary:
      'Plataforma completa, com arquitetura AI First, para a gestão operacional de empresas de içamento e movimentação de cargas.',
    highlights: [
      'IA para automação de fluxos de trabalho, análise preditiva de equipamentos e suporte à decisão operacional.',
      'Cotações, contratos, frota, equipes e relatórios financeiros em um único ambiente integrado.',
      'Engenharia de prompts aplicada à geração de código, testes, documentação técnica e automação de tarefas repetitivas.',
    ],
    technologies: ['Angular', 'NestJS', 'Banco relacional', 'Cloud', 'Cursor', 'Claude Code'],
  },
  {
    id: 'greentips',
    name: 'Greentips',
    tagline: 'Análises esportivas com IA',
    summary: 'Plataforma de dados com análises esportivas especializadas em futebol.',
    highlights: [
      'Pipelines de coleta e processamento em tempo real, com modelos de IA para previsões e identificação de tendências.',
      'Engenharia de prompts para gerar análises, automatizar conteúdo, sumarizar dados e interagir com LLMs via API.',
      'Integração com APIs de dados esportivos, com webhooks e triggers no Supabase para automações em tempo real.',
    ],
    technologies: ['Next.js', 'React', 'Supabase', 'LLMs via API', 'Cursor', 'Claude Code'],
  },
];

export const SKILLS: SkillGroup[] = [
  { area: 'Frontend', items: ['Angular', 'RxJS', 'NgRx', 'Tailwind', 'Standalone Components', 'Lazy Loading', 'SSR', 'React', 'Next.js'] },
  { area: 'Backend', items: ['Java', 'Spring Boot', 'Hibernate', 'JPA', 'REST APIs', 'Microsserviços', 'Node.js', 'NestJS', 'Express'] },
  { area: 'IA e dados', items: ['Integração com IA generativa', 'AWS Lambda', 'OCR', 'Pipelines de inferência'] },
  { area: 'DevOps e cloud', items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS', 'Azure', 'Google Cloud', 'GitHub Actions'] },
  { area: 'Banco de dados', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'] },
  { area: 'Testes', items: ['Jest', 'Cypress', 'Selenium', 'Robot Framework'] },
  { area: 'Arquitetura', items: ['Clean Architecture', 'SOLID', 'Design Patterns', 'Microsserviços'] },
  { area: 'Metodologias', items: ['Scrum', 'Kanban'] },
];

export const EDUCATION = {
  school: 'Centro Universitário Católico Ítalo Brasileiro',
  degree: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
  period: '2009 – 2012',
};

export const LANGUAGES = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'IBM Delivery Central Platform Foundations', issuer: 'IBM', date: 'Jan 2025' },
  { name: 'DevSecOps Essentials', issuer: 'IBM', date: 'Out 2023' },
  { name: 'Telecommunications Insights and Solutions (Silver)', issuer: 'IBM', date: 'Out 2023' },
  { name: 'IBM Garage Essentials', issuer: 'IBM', date: 'Mar 2022' },
  { name: 'Node.js Microsserviços: NestJS, RabbitMQ e Cloud Services', issuer: 'Udemy', date: 'Fev 2017' },
  { name: 'Java Programmer I & II', issuer: 'Oracle / Impacta', date: '2012' },
  { name: 'SQL Server', issuer: 'Impacta', date: '2012' },
];
