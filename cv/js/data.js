const cvData = {
  name: "Arturo Calanche",
  title: "Analista de Dados e Desenvolvedor de Software",
  photo: "assets/foto.webp",
  about:
    "Arturo Calanche, venezuelano residente em Manaus (AM), está em fase de conclusão do curso de Análise e Desenvolvimento de Sistemas e possui a certificação Google Data Analytics. Atua com análise de dados e desenvolvimento de software, com experiência prática na automação de processos de detecção de fraude em e-commerce e na construção de aplicações web full-stack. Utiliza ferramentas de inteligência artificial em diferentes atividades e mantém aprendizado contínuo sobre novas tecnologias. Fora do ambiente profissional, é pai de uma criança pequena e de dois gatos, e aprecia a natureza. Busca oportunidades de trabalho remoto em desenvolvimento de software e análise de dados.",
  links: [
    { label: "GitHub", url: "https://github.com/A2calanche" },
  ],

  experience: [
    {
      company: "Bemol Online",
      role: "Analista de Pedidos",
      period: "",
      points: [
        "Realizava verificações de segurança priorizadas em pedidos de e-commerce antes da liberação; o processo era manual e extenso, e frequentemente resultava em falsos positivos.",
        "Identificou a ineficiência do processo e criou, por iniciativa própria, uma planilha em Excel para a busca automática de padrões de fraude, uma vez que a base de fraudes era mantida em uma pasta de trabalho do Excel.",
        "Diante da baixa adesão da equipe à planilha e da adoção, pela empresa, de ferramentas de IA e data lakes, evoluiu a solução para alertas automáticos por e-mail destinados à verificação de pedidos.",
        "Implementou dois alertas principais: um para pedidos de clientes que nunca haviam realizado compras anteriores e outro para vínculos suspeitos, identificados por clientes com dados duplicados.",
        "Desenvolveu o pipeline em PySpark e Spark SQL no Databricks, com execução em lote a cada hora, envio de e-mails via SMTP do Gmail e Power Automate, e regras de exclusão de negócio (retirada em loja, funcionários internos e endereços em lista de permissão).",
      ],
    },
    {
      company: "Empresas de turismo (atuação freelancer)",
      role: "Guia de Turismo",
      period: "",
      points: [
        "Atuou como guia de turismo freelancer para diversas empresas do setor, conduzindo passeios fluviais e urbanos em Manaus (AM).",
        "Atendeu públicos diversos em nacionalidade, faixa etária e gênero, adaptando a comunicação e a condução dos passeios a cada perfil.",
        "Desenvolveu competências de comunicação intercultural, atendimento ao cliente e atuação autônoma.",
      ],
    },
  ],

  skills: [
    {
      name: "Análise de dados e automação",
      items: ["Análise de dados", "Detecção de fraude", "PySpark", "Spark SQL", "Databricks", "Data lakes", "Excel", "Power Automate", "Automação de e-mails (SMTP)", "Google Data Analytics (certificado)"],
    },
    {
      name: "Desenvolvimento web",
      items: ["HTML", "CSS", "JavaScript", "Vue", "React", "Node.js", "Express", "MongoDB", "Stack MERN", "APIs REST"],
    },
    {
      name: "Segurança e documentação",
      items: ["Autenticação com JWT", "Google OAuth 2.0", "Recuperação de senha", "Auditoria de segurança", "Git / GitHub", "ADRs", "Diagramas com Mermaid"],
    },
    {
      name: "Inteligência artificial",
      items: ["Uso de ferramentas de IA em diferentes atividades", "Orquestração de agentes de IA"],
    },
    {
      name: "Habilidades comportamentais",
      items: [
        "Pensamento analítico",
        "Resolução de problemas",
        "Proatividade e iniciativa",
        "Melhoria contínua de processos",
        "Atenção a detalhes",
        "Gestão de mudança e engajamento de equipes",
        "Comunicação intercultural",
        "Atendimento ao cliente",
        "Autonomia",
        "Aprendizado contínuo",
        "Adaptabilidade a novas tecnologias",
      ],
    },
  ],

  projects: [
    {
      title: "Infinity Gauntlet",
      summary: "Aplicação web full-stack de gerenciamento de tarefas, desenvolvida com a stack MERN como projeto de apresentação de bootcamp.",
      description:
        "Projeto de conclusão de um bootcamp de desenvolvimento web. A aplicação reúne quadro Kanban, autenticação com JWT e Google OAuth, sincronização com o Google Calendar, recuperação de senha e interface em inglês, espanhol e português. Passou por uma auditoria de segurança, com correção das falhas identificadas.",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "OAuth 2.0", "Nodemailer", "SCSS"],
      url: "https://github.com/A2calanche/infinity-gauntlet-project-main",
      image: "assets/projects/infinity-gauntlet.webp",
    },
    {
      title: "Detecção de Fraude em E-commerce (estudo de caso)",
      summary: "Estudo de caso do pipeline de detecção de fraude implementado na Bemol Online como melhoria do processo de análise de pedidos.",
      description:
        "Documenta a evolução de uma triagem manual de pedidos para um pipeline automatizado em lote horário, com alertas por e-mail para clientes de primeira compra, novos endereços de entrega, telefones compartilhados e alterações de forma de pagamento. O repositório inclui registros de decisões de arquitetura (ADRs), diagramas em Mermaid e documentação da arquitetura.",
      stack: ["PySpark", "Spark SQL", "Databricks", "Power Automate", "SMTP (Gmail)", "Mermaid", "ADRs"],
      url: "https://github.com/A2calanche/Fraud-Detection-Case-Study-Repository-Structure",
      image: "assets/projects/fraude.webp",
    },
  ],
};