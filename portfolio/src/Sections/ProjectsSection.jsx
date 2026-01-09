import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function ProjectsSection(){


    const projects = [
    {
      title: "Task Management Platform",
      description: "Full-stack web application with real-time collaboration features, built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Study Companion",
      description: "Machine learning powered study assistant that generates personalized quizzes and flashcards",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Insights Dashboard",
      description: "Interactive data visualization dashboard displaying real-time weather patterns and forecasts",
      tech: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      github: "#",
      demo: "#"
    }
  ];

  const skills = {
    "Languages": ["JavaScript", "Python", "Java", "TypeScript", "C++", "SQL"],
    "Frontend": ["React", "Vue.js", "Tailwind CSS", "HTML/CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Django", "REST APIs", "GraphQL"],
    "Tools & Others": ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Jest"]
  };
  
    return (
        <div>
            <section id="projects" className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#E11D48' }}>
                        Featured Projects
                    </h2>
                    <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#F97316' }} />
                    </div>
        
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div 
                        key={project.title}
                        className="group border-2 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500"
                        style={{ backgroundColor: '#FAF7F5', borderColor: '#FED7AA' }}
                        >
                        <div className="p-8 space-y-4">
                            <div className="flex items-start justify-between">
                            <div className="p-3 rounded-xl" style={{ backgroundColor: '#FFF1F2' }}>
                                <Code2 size={24} style={{ color: '#E11D48' }} />
                            </div>
                            <div className="flex gap-2">
                                <a href={project.github} className="p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity" 
                                style={{ color: '#6F6C72' }}>
                                <Github size={20} />
                                </a>
                                <a href={project.demo} className="p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity" 
                                style={{ color: '#6F6C72' }}>
                                <ExternalLink size={20} />
                                </a>
                            </div>
                            </div>
        
                            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Georgia, serif', color: '#2D2A2E' }}>
                            {project.title}
                            </h3>
        
                            <p className="text-base leading-relaxed" style={{ color: '#6F6C72' }}>
                            {project.description}
                            </p>
        
                            <div className="flex flex-wrap gap-2 pt-4">
                            {project.tech.map((tech) => (
                                <span 
                                key={tech}
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{ backgroundColor: '#FFF1F2', color: '#E11D48' }}
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </section>
        </div>
    )
}