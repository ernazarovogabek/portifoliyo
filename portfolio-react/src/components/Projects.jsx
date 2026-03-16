function Projects() {
  const projects = [
    {
      title: 'TIL-OZGARTIRISH',
      description: 'React va i-18 yordamida yaratilgan sayt',
      tags: ['React', 'React-i18next' , 'CSS'],
      video: '/video/til-ozgartirish.mp4',
      liveLink: 'https://til-o-zgartirish-pwed-rklf1khit-ogabeks-projects-b3568eed.vercel.app/',
      githubLink: 'https://github.com/ernazarovogabek/til-o-zgartirish'
    },
    {
      title: 'NEXT-FIGMA',
      description: 'Next.js va Tailwind CSS orqali router qilingan sayt',
      tags: ['Next.js', 'React', 'Tailwind'],
      video: '/video/next-figma.mp4',
      liveLink: 'https://next-figma-sigma.vercel.app/',
      githubLink: 'https://github.com/ernazarovogabek/next-figma'
    },
    {
      title: 'NEXT-TODO',
      description: 'Next va api orqali yasalgan todo',
      tags: ['Next', 'APi', 'Tailwind'],
      video: '/video/next-todo.mp4',
      liveLink: 'https://next-todo-krll.vercel.app/',
      githubLink: 'https://github.com/ernazarovogabek/next-todo'
    },
    {
      title: 'NEXT-ADMIN-CRM',
      description: 'Admin-CRM backend orqali qilingan',
      tags: ['Next', 'TypeScript', 'Postman' , 'React' , 'JavaScript' , 'Tanstack-Query'],
      video: '/video/crm.mp4',
      liveLink: 'https://admin-crm-backend-prayect.vercel.app/dashboard',
      githubLink: 'https://github.com/ernazarovogabek/admin-crm-backend-prayect'
    },
    {
      title: 'Movie App',
      description: 'Reactda routerlar orqali yasalgan figma',
      tags: ['React', 'API', 'CSS'],
      video: '/video/Gitaru.mp4',
      liveLink: 'https://gitaru.vercel.app/',
      githubLink: 'https://github.com/ernazarovogabek/gitaru'
    },
    {
      title: 'Weather App',
      description: 'Real-time ob-havo ma\'lumotlarini ko\'rsatuvchi ilova',
      tags: ['JavaScript', 'API', 'HTML'],
      icon: '☁️',
      liveLink: 'https://your-project-link.com',
      githubLink: 'https://github.com/ernazarovogabek'
    }
  ];

  const GitHubIcon = () => (
    <svg viewBox="0 0 128 128" width="18" height="18" style={{fill: 'currentColor'}}>
      <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
    </svg>
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Loyihalar</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      padding: "20px"
                    }}
                    onError={(e) => {
                      console.error('Video yuklanmadi:', project.video);
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="project-placeholder">' + (project.icon || '🎬') + '</div>';
                    }}
                  />
                ) : (
                  <div className="project-placeholder">{project.icon}</div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-primary">
                    🔗 Ko'rish
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-secondary">
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
