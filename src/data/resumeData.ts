/**
 * Exact Resume Data from Siddhi_Mehendale_-_Resume_17766d60.pdf
 */

export const RESUME = {
  name: 'SIDDHI MEHENDALE',
  location: 'Bengaluru, India 560066',
  phone: '+91 ****',
  email: 'siddhimehendale@gmail.com',
  pdfUrl: '/assets/aistudio/Siddhi_Mehendale_-_Resume_17766d60.pdf',

  summary:
    'Software Engineer and Solutions Builder with 4+ years of enterprise experience at JPMorgan Chase & Co., combined with advanced credentials including an M.Tech in CS from BITS Pilani. Proven track record designing, deploying, and operationalizing systems and onboardings across 20+ lines of business (LOBs). Hands-on expertise building scalable pipelines with Python, PyTorch, and Model Context Protocol (MCP), delivering responsible AI governance and high-impact automated decisioning.',

  competencies: [
    {
      category: 'Generative & Agentic AI',
      skills:
        'Agentic AI, Model Context Protocol (MCP), Retrieval-Augmented Generation (RAG), Claude Code, MS Copilot Studio, OpenAI, Hugging Face Transformers, Prompt Engineering',
    },
    {
      category: 'ML Frameworks & Data',
      skills:
        'Python, PyTorch, TensorFlow / Keras, Pandas, NumPy, Vector Databases, Embeddings, LLM Evaluation, Bias Detection & Responsible AI',
    },
    {
      category: 'Full-Stack & Platforms',
      skills:
        'React, Streamlit, FastAPI, Uvicorn, REST APIs, Microservices, MLflow, AWS, Kubernetes, Docker, Splunk, CI/CD Pipelines',
    },
    {
      category: 'Enterprise Architecture',
      skills:
        'SLA Risk Mitigation, Case Lifecycle Management, Tableau, Pega PRPC (Certified Architect)',
    },
  ],

  experience: [
    {
      role: 'Software Engineer II',
      company: 'JPMorgan Chase & Co.',
      period: 'Jan 2024 – Present',
      location: 'Bengaluru, India',
      bullets: [
        {
          title: 'AI Use Case Pipeline & Cross-Functional Enablement',
          description:
            'Partnered with business stakeholders across 20+ lines of business (LOBs) to evaluate operational friction, develop features and size automation opportunities.',
        },
        {
          title: 'Agentic Orchestration',
          description:
            'Prototyped an enterprise Confluence knowledge retrieval engine using Model Context Protocol (MCP), and LLM APIs, enforcing data quality validation gates and cutting inquiry latency.',
        },
        {
          title: 'Pega Tool-Use',
          description:
            'Partnered in Engineering custom MCP server integration layers connecting Pega case management with intelligent agentic tools, equipping operational teams with contextual data retrieval and automated exception summaries.',
        },
        {
          title: 'Prototyping & Delivery Acceleration',
          description:
            'Utilized Claude Code and Microsoft Copilot to prototype agent workflows, author automated test harnesses, and establish prompt engineering and responsible governance runbooks.',
        },
      ],
    },
    {
      role: 'Software Engineer',
      company: 'JPMorgan Chase & Co.',
      period: 'Aug 2021 – Jan 2024',
      location: 'Bengaluru, India',
      bullets: [
        {
          title: 'Pega Tool-Use',
          description:
            'Architected and operationalized automated decisioning workflows in Pega PRPC, converting complex multi-party transaction policies into straight-through processing rules; minimized manual exception handoffs and accelerated cycle times across critical operational pipelines.',
        },
        {
          title: 'SLA Monitoring & Exception Visibility',
          description:
            'Designed and deployed enterprise Tableau monitoring dashboards tracking end-to-end operational lifecycles, enabling cross-functional leaders to identify SLA breach risks early, track cycle times, and optimize transaction throughput.',
        },
        {
          title: 'High-Volume Partner & Business Onboarding',
          description:
            'Partnered directly with operations, product owners, and external interfaces to onboard high-volume business units onto screening pipelines, ensuring zero SLA degradation and business continuity during peak transaction spikes.',
        },
        {
          title: 'Operational Resilience & Infrastructure Stability',
          description:
            'Supported application migration to Kubernetes, eliminating processing bottlenecks and ensuring continuous operational uptime across mission-critical settlement streams.',
        },
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'JPMorgan Chase & Co.',
      period: 'Mar 2021 – Jul 2021',
      location: 'Bengaluru, India',
      bullets: [
        {
          title: 'Process Modeling & Lifecycle Optimization',
          description:
            'Modeled end-to-end case lifecycles and business routing logic in Pega PRPC to standardize intake, triage, and handoffs across wholesale operational workflows.',
        },
        {
          title: 'Partner/Interface Integration & Verification',
          description:
            'Defined interface specifications and built automated test suites to validate seamless message exchange and data handoffs across inter-banking partner protocols, ensuring 100% verification coverage.',
        },
      ],
    },
  ],

  education: [
    {
      degree: 'M.Tech in Computer Science',
      institution: 'BITS Pilani',
      period: 'Jan 2024 – Jan 2026',
      dissertation: {
        title: 'M.Tech Dissertation: AI/ML-based Framework for Hiring Process',
        description:
          'Designed and built an end-to-end hybrid-AI hiring system combining multimodal resume parsing (Google Gemini API, PyMuPDF), custom-trained Seq2Seq Question Generation with Attention (Keras/TensorFlow), an interactive candidate dashboard in React, an administrative evaluation cockpit in Streamlit, and an asynchronous real-time answer evaluation service (FastAPI, Uvicorn, JSON-mode structured feedback).',
      },
    },
    {
      degree: 'PG Certification in Generative & Agentic AI',
      institution: 'BITS Pilani',
      period: 'Jul 2026 – Present',
    },
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Mody University (SET)',
      period: 'Jul 2017 – Jul 2021',
    },
  ],

  certifications: [
    'Certified Pega System Architect',
    'AWS Certified AI Practitioner',
    'AWS Certified Cloud Practitioner',
  ],
};
