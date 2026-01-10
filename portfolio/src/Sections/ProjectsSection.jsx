import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function ProjectsSection(){


    const projects = [
        {
          id: "votingPlatform",
          title: "Augustana University Voting Platform",
          description:
            "Full-stack voting platform developed to replace Augustana’s legacy election system, serving 2,000+ students. Features include secure student authentication, anonymous encrypted voting, and real-time ballot processing. Built collaboratively and delivered as a paid project.",
          tech: ["React", "Node.js", "Express", "MySQL"],
          github: "https://github.com/Augustana-CS-Club/ASA-Voting-Platform",
          demo: ""
        },
        {
          id: "biteRate",
          title: "BiteRate – Food Review App",
          description:
            "Cross-platform food review application built with Kotlin and Jetpack Compose. Designed a modern, responsive UI and integrated Firebase-backed services for user reviews, ratings, and persistent storage. Applied modular architecture to support scalability and future feature expansion.",
          tech: ["Kotlin", "Jetpack Compose", "Node.js", "Firebase"],
          github: "https://github.com/Mikias7/FoodRateV2",
          demo: ""
        },
        {
          id: "rideSharing",
          title: "Uni Go - Ride Sharing App",
          description:
            "Team-built ride-sharing mobile app for college students to solve on-campus transportation challenges. Implemented core features using Swift and SwiftUI with Firebase handling authentication, real-time data storage, and user management. The project received recognition from the Augustana University president with plans for pilot testing and expansion.",
          tech: ["Swift", "SwiftUI", "Firebase"],
          github: "",
          demo: ""
        },
        {
          id: "dataAugmentation",
          title: "Image Data Augmentation Tool",
          description:
            "Python-based tool for augmenting image datasets used in machine learning. Utilized OpenCV to adjust brightness, hue, noise, and spatial transformations while automatically updating annotations. Improved dataset diversity and reduced overfitting.",
          tech: ["Python", "OpenCV", "Machine Learning"],
          github: "https://github.com/Mikias7/Data_augmentation",
          demo: ""
        },
        {
          id: "sudokuSolver",
          title: "Sudoku Solver with Computer Vision",
          description:
            "Web application that captures images of Sudoku boards and solves them using a backtracking algorithm. Built a React frontend with a Flask backend and integrated OpenCV for optimized board detection and number extraction.",
          tech: ["React", "Python", "Flask", "OpenCV", "Computer Vision"],
          github: "https://github.com/Mikias7/sudoku_solver1",
          demo: ""
        },
        {
          id: "emotionRecognition",
          title: "Facial Emotion Recognition",
          description:
            "Collaboratively developed a machine learning model to classify facial emotions. Implemented data preprocessing pipelines and trained models using TensorFlow and Keras to improve classification accuracy and performance.",
          tech: ["Python", "TensorFlow", "Keras", "Machine Learning"],
          github: "",
          demo: ""
        },
        {
          id: "microLearning",
          title: "Micro Learning Flashcard App",
          description:
            "Micro-learning platform allowing users to create and share flashcards publicly or with friends. Built a React frontend with a TikTok-style scrolling experience and a Flask backend handling authentication and content management.",
          tech: ["React", "Python", "Flask"],
          github: "https://github.com/Mikias7/Micro_learning_app",
          demo: ""
        },
        {
          id: "flightSearch",
          title: "Flight Search Program",
          description:
            "Java-based flight search application using an interactive console interface. Implemented a binary tree data structure for efficient storage and retrieval of flight data across large datasets.",
          tech: ["Java", "Data Structures", "Binary Trees"],
          github: "https://github.com/Mikias7/Flight_management",
          demo: ""
        }
      ];


  
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
                                {/* <a href={project.github} className="p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity" 
                                target='_blank'
                                style={{ color: '#6F6C72' }}>
                                <Github size={20} />
                                </a> */}
                                <a
                                  href={project.github || undefined}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-2 rounded-lg transition-opacity ${
                                    project.github
                                      ? "opacity-60 hover:opacity-100 cursor-pointer"
                                      : "opacity-30 cursor-not-allowed pointer-events-none"
                                  }`}
                                  style={{ color: "#6F6C72" }}
                                  aria-disabled={!project.github}
                                >
                                  <Github size={20} />
                                </a>
                                {/* <a href={project.demo} className="p-2 rounded-lg opacity-60 hover:opacity-100 transition-opacity" 
                                style={{ color: '#6F6C72' }}>
                                <ExternalLink size={20} />
                                </a> */}
                                <a
                                  href={project.demo || undefined}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`p-2 rounded-lg transition-opacity ${
                                    project.demo
                                      ? "opacity-60 hover:opacity-100 cursor-pointer"
                                      : "opacity-30 cursor-not-allowed pointer-events-none"
                                  }`}
                                  style={{ color: '#6F6C72' }}
                                >
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