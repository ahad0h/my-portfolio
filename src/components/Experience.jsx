import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "IT Intern & Software Developer",
      company: "Qassim Municipality IT Department | Buraidah",
      period: "2026",
      summary: "Contributed to systems management and provided technical support across municipal departments. Led frontend development for the Balaghi reporting system using HTML, CSS, JavaScript, and Firebase, delivering real-time data handling and authentication features.",
      icon: "🏢",
      skills: ["JavaScript", "Firebase", "Realtime DB", "UI/UX"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Logos - University AI Chatbot",
      subtitle: "Graduation Project",
      summary: "Engineered a multi-agent AI platform for Qassim University's College of Computer Science using a 4-agent pipeline: retrieval, reasoning, response, and validation. Designed a FAISS vector store with LangChain for semantic document retrieval, achieving high-accuracy responses to Arabic-language university queries. Built a FastAPI backend with async endpoints and an Arabic-first responsive frontend.",
      tech: ["Python", "FastAPI", "FAISS", "LangChain", "LLaMA 3.3", "RAG", "AI Agents"]
    },
    {
      id: 2,
      title: "Balaghi - Smart Reporting System",
      subtitle: "Qassim Municipality",
      summary: "Architected and deployed a production-grade citizen reporting platform used by real municipality employees from day one. Implemented real-time complaint tracking, role-based authentication, and serverless backend logic via Firebase Cloud Functions.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase"]
    },
    {
      id: 3,
      title: "Organizational Chart System",
      subtitle: "Qassim Municipality",
      summary: "Built an interactive organizational chart web application visualizing the full administrative hierarchy of Qassim Municipality. Implemented expandable/collapsible nodes with official government branding and Arabic RTL layout.",
      tech: ["HTML5", "CSS3", "JavaScript", "Arabic RTL UI"]
    },
    {
      id: 4,
      title: "Real Estate Price Forecasting",
      subtitle: "Personal Project",
      summary: "Built ML regression models to predict real estate prices with feature engineering and exploratory data analysis on property datasets.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"]
    },
    {
      id: 5,
      title: "Human Activity & Sleep Data Preprocessing",
      subtitle: "Fatigue Level Estimation",
      summary: "Designed preprocessing pipelines for time-series health data to support fatigue level classification models.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"]
    }
  ];

  const skills = [
    { category: "AI / ML", items: ["LLaMA 3.3-70B", "RAG", "FAISS", "LangChain", "AI Agents", "Prompt Engineering", "K-means", "Neural Networks"] },
    { category: "Backend", items: ["FastAPI", "Django", "Python", "RESTful APIs", "Firebase (Realtime DB, Auth, Cloud Functions)"] },
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Figma", "UI/UX Design", "Responsive Design"] },
    { category: "Programming", items: ["Python", "Java", "C++", "Assembly Language"] },
    { category: "Tools", items: ["Git", "GitHub", "Agile", "Scrum", "OOP", "Linux", "Canva"] }
  ];

  return (
    <section className="section">
      <h2 className="section-title">
        <span>💼</span> Work Experience
      </h2>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="exp-header">
              <div className="exp-icon">{exp.icon}</div>
              <div className="exp-info">
                <h3>{exp.role}</h3>
                <p className="company-name">{exp.company}</p>
              </div>
              <span className="period-tag">{exp.period}</span>
            </div>

            <p className="exp-summary">{exp.summary}</p>

            <div className="tags">
              {exp.skills.map((skill, index) => (
                <span key={index} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '40px' }}>
        <span>🚀</span> Featured Projects
      </h2>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="proj-header">
              <h3>{proj.title}</h3>
              <span className="proj-sub">{proj.subtitle}</span>
            </div>
            <p className="proj-summary">{proj.summary}</p>
            <div className="tags">
              {proj.tech.map((t, idx) => (
                <span key={idx} className="tag tag-purple">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '40px' }}>
        <span>🛠️</span> Technical Skills
      </h2>

      <div className="experience-list">
        {skills.map((group, idx) => (
          <div key={idx} className="experience-card">
            <div className="exp-info" style={{ marginBottom: '12px' }}>
              <h3>{group.category}</h3>
            </div>
            <div className="tags">
              {group.items.map((item, i) => (
                <span key={i} className="tag tag-purple">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;