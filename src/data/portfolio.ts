export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export const about = [
  "Tenho 22 anos, sou natural de João Pessoa–PB e apaixonado por tecnologia desde os 12 anos, quando comecei a explorar o funcionamento dos computadores, especialmente o hardware e as CPUs.Essa curiosidade inicial foi o ponto de partida para minha relação com a área de TI.",
  "Em 2025, após algumas experiências que me levaram a refletir sobre meu futuro profissional, decidi retomar esse caminho de forma mais estruturada. Iniciei o curso de Gestão de TI, mas buscando maior alinhamento com o mercado e com o desenvolvimento técnico, migrei para Sistemas para Internet, onde venho me identificando cada vez mais.",
  "Atualmente, estou em constante evolução, aprimorando conhecimentos já adquiridos e aprendendo novas linguagens, tecnologias e conceitos fundamentais para o mercado de TI.",
];

export const experience = [
  {
    period: "Fevereiro/2026 — presente",
    role: "Monitor de Programação Java II",
    company: "UNIESP Centro Universitário",
    location: "João Pessoa, PB",
    items: [
      "Atuação como monitor de back-end avançado, auxiliando no ensino e acompanhamento de alunos no desenvolvimento de aplicações Java com Spring Boot.",
      "Apoio no ensino de métodos e códigos HTTP e integração com banco de dados via JPA e Hibernate.",
      "Suporte em segurança com Spring Security e apresentação da arquitetura em camadas (MVC).",
    ],
  },
  {
    period: "Fevereiro/2026 — presente",
    role: "Monitor de Banco de Dados (SQL)",
    company: "UNIESP Centro Universitário",
    location: "João Pessoa, PB",
    items: [
      "Apoio a alunos no desenvolvimento e resolução de atividades relacionadas a bancos de dados e SQL.",
      "Orientação na elaboração de consultas SQL, manipulação e análise de dados.",
      "Apoio na compreensão de modelagem de bancos de dados e relacionamento entre entidades.",
      "Análise e correção de consultas, identificação de erros e inconsistências, com suporte em modelagem relacional e utilização de SGBDs.",
    ],
  },
  {
    period: "Abril/2025 — presente",
    role: "Engenheiro de software  (Auxiliar Administrativo)",
    company: "LC Construtora",
    location: "João Pessoa, PB",
    items: [
      "Automação de dados estruturados (SQL) com validações, aplicando regras de negócio e consistência de dados.",
      "Desenvolvimento de rotinas de processamento em lote que reduziram o tempo de geração de relatórios em aproximadamente 30%.",
      "Desenvolvimento de aplicação backend em Flask com autenticação e controle de acesso baseado em papéis (RBAC).",
      "Deploy em cloud (Render) e documentação técnica de regras de negócio.",
    ],
  },
];

export const tech = [
  { label: "01 / Backend", title: "APIs e serviços", text: "Construção de aplicações web organizadas e prontas para crescer.", tags: ["Java", "Python", "Spring Boot", "Flask", "FastAPI"] },
  { label: "02 / Segurança", title: "Auth e proteção", text: "Fluxos de autenticação, autorização e controle de acesso.", tags: ["JWT", "Spring Security", "Flask-Login", "Passlib", "RBAC"] },
  { label: "03 / Dados", title: "Persistência e SQL", text: "Modelagem, consultas e integração com bancos relacionais.", tags: ["PostgreSQL", "SQLite", "SQLAlchemy", "JPA", "Hibernate", "pgvector"] },
  { label: "04 / Frontend", title: "Interfaces web", text: "Experiências responsivas com interação e atualização em tempo real.", tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tabulator"] },
  { label: "05 / Inteligência", title: "IA aplicada", text: "Integração de modelos generativos e busca baseada em conhecimento.", tags: ["Spring AI", "OpenAI API", "RAG", "Embeddings"] },
  { label: "06 / Entrega", title: "Deploy e qualidade", text: "Automação, documentação, testes e empacotamento das aplicações.", tags: ["Docker", "Docker Compose", "GitLab CI/CD", "JUnit 5", "Pytest", "Swagger"] },
];

export const skills = [
  { title: "Arquitetura de APIs", text: "Desenho de serviços REST, organização em camadas e integração entre sistemas.", tags: ["REST", "MVC", "CRUD", "OpenFeign"], level: 88, levelLabel: "Nível avançado" },
  { title: "Segurança e dados", text: "Aplicação de regras de negócio, validações, autenticação e persistência confiável.", tags: ["JWT", "RBAC", "SQL", "JPA", "SQLAlchemy"], level: 84, levelLabel: "Nível avançado" },
  { title: "Experiência frontend", text: "Interfaces responsivas, componentes claros e interações que facilitam o uso.", tags: ["Responsividade", "UX", "JavaScript", "Tabulator"], level: 72, levelLabel: "Nível em desenvolvimento" },
  { title: "Entrega contínua", text: "Preparação para execução, testes automatizados, documentação e deploy.", tags: ["Git", "Docker", "CI/CD", "JUnit", "Pytest"], level: 80, levelLabel: "Nível avançado" },
];

export type Stack = "backend" | "frontend" | "devops";
export type ProjectLink = { kind: "github" | "gitlab" | "demo"; label: string; href: string };
export type Project = { title: string; stack: Stack; text: string; tech: string; details: string[]; links: ProjectLink[] };

const gh = (href: string): ProjectLink => ({ kind: "github", label: "GitHub", href });
const demo = (href: string): ProjectLink => ({ kind: "demo", label: "Demo", href });

export const projects: Project[] = [
  { title: "Sistema de Imóveis — LC Construtora", stack: "backend", text: "API REST em JSON para gestão de imóveis, com CRUD completo, regras de negócio e validações.", tech: "Tecnologias: Python • Flask • SQLite • REST API • Flask-Login • Pytest", details: ["Autenticação e controle de acesso baseado em papéis.", "Arquitetura modular com App Factory, Blueprints e camada de serviços.", "Testes automatizados para os principais fluxos da aplicação."], links: [gh("https://github.com/victornbjj/LC-CONSTRUTORA.git"), demo("https://lc-constutora-5.onrender.com/")] },
  { title: "Clinic API", stack: "backend", text: "Sistema de gestão de consultório médico para médicos, pacientes e agendamentos.", tech: "Tecnologias: Java 21 • Spring Boot 3.4 • Spring Security • JWT • JPA • PostgreSQL • Docker • JUnit 5 • Swagger", details: ["APIs REST com operações CRUD, regras de negócio e persistência.", "Autenticação JWT e autorização baseada em papéis (RBAC).", "Integração externa com OpenFeign, documentação OpenAPI e testes automatizados."], links: [gh("https://github.com/victornbjj/clinica-medica-api")] },
  { title: "Assistente RAG — YAITEC Atende", stack: "backend", text: "Backend com IA generativa para perguntas e respostas baseado em uma base de conhecimento.", tech: "Tecnologias: Java 21 • Spring Boot • Spring AI • OpenAI API • PostgreSQL • pgvector • Docker • JUnit 5 • Mockito", details: ["Pipeline de embeddings, recuperação vetorial e processamento RAG.", "Ingestão automática e idempotente da base de conhecimento.", "Testes automatizados e containerização com Docker."], links: [gh("https://github.com/victornbjj/assistente_rag")] },
  { title: "Pipeline CI/CD com GitLab Runner", stack: "devops", text: "Pipeline automatizado para build e deploy de imagens Docker em uma instância AWS EC2.", tech: "Tecnologias: AWS EC2 • Ubuntu Linux • GitLab CI/CD • GitLab Runner • Docker • Git • Shell Script", details: ["Configuração do ambiente Linux na AWS EC2 para execução dos pipelines.", "Integração do GitLab Runner com Docker e permissões Linux.", "Automação das etapas de build e deploy."], links: [{ kind: "gitlab", label: "GitLab", href: "https://gitlab.com/victornbjj/projeto-cicd-exemplo" }] },
  { title: "Todo List - Spring", stack: "backend", text: "API para gerenciamento Lista de tarefas e de usuários utilizando Spring Boot e H2database.", tech: "Tecnologias: Java • Spring Boot • H2dataBase", details: [], links: [gh("https://github.com/victornbjj/ProjectSpring"), demo("https://todolista-2780.onrender.com")] },
  { title: "Agenda Médica", stack: "backend", text: "Aplicação web de agenda médica com login, proteção de rotas e tabela interativa de agendamentos.", tech: "Tecnologias: Python 3.12 • Flask 3 • SQLite • PyJWT • Requests • Tabulator • Docker • Docker Compose", details: ["Autenticação com JWT armazenado em cookie HttpOnly e proteção de rotas.", "Integração HTTP real com API mockada em Blueprint e tratamento de falhas.", "Busca em tempo real por paciente, CPF ou médico com tabela Tabulator.", "Testes automatizados para login, acesso protegido e indisponibilidade da API."], links: [gh("https://github.com/victornbjj/agenda_medica")] },
  { title: "Auth Simples", stack: "backend", text: "API de autenticação com cadastro, login e emissão de tokens JWT.", tech: "Tecnologias: Python 3.13 • FastAPI • SQLAlchemy • SQLite • Passlib • JWT", details: ["Cadastro e login de usuários com validação de dados.", "Senhas armazenadas com hash bcrypt e autenticação baseada em JWT.", "Organização em camadas com controllers, services, models, schemas e security.", "Documentação interativa disponível com Swagger UI e ReDoc."], links: [gh("https://github.com/victornbjj/auth-sistema-fast")] },
  { title: "Relógio Digital", stack: "frontend", text: "Relógio em tempo real com interface limpa e funcional, explorando dinamicidade e layout responsivo.", tech: "Tecnologias: HTML • CSS • JavaScript", details: ["Atualização dinâmica do horário em tempo real.", "Interface responsiva com foco em clareza e usabilidade."], links: [gh("https://github.com/victornbjj/relogio_html"), demo("https://victornbjj.github.io/relogio_html/")] },
  { title: "Login Page", stack: "frontend", text: "Tela de autenticação com foco visual em usabilidade, identidade e experiência de login moderna.", tech: "Tecnologias: HTML • CSS • JavaScript", details: ["Estrutura de login com organização visual clara e objetiva.", "Interface responsiva orientada à experiência do usuário."], links: [gh("https://github.com/victornbjj/tela-login"), demo("https://victornbjj.github.io/tela-login/")] },
  { title: "Portfólio Web Colaborativo", stack: "frontend", text: "Projeto colaborativo para criar um portfólio web HTML, CSS e JavaScript.", tech: "Tecnologias: HTML • CSS • JavaScript", details: [], links: [gh("https://github.com/victornbjj/portifolio_valdeise_patricia_joao-victor"), demo("https://patricia-de-oliveira.github.io/portifolio_valdeise_patricia_joao-victor/")] },
];

export const contacts = [
  { kind: "mail", title: "E-mail", value: "victornasci.dev@gmail.com", href: "mailto:victornasci.dev@gmail.com" },
  { kind: "phone", title: "Telefone", value: "+55 83 9921-7139", href: "tel:+558399217139" },
  { kind: "github", title: "GitHub", value: "@victornbjj", href: "https://github.com/victornbjj" },
  { kind: "linkedin", title: "LinkedIn", value: "João Victor Pereira do Nascimento", href: "https://www.linkedin.com/in/jo%C3%A3o-victor-pereira-do-nascimento-7566a6231/" },
] as const;
