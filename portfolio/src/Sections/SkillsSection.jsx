import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function SkillsSection(){

    const skills = {
  "Languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "R",
    "Swift",
    "Kotlin",
    "SQL (MySQL)"
  ],
  "Frontend": [
    "React.js",
    "Three.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Ant Design (antd)"
  ],
  "Backend & Cloud": [
    "Node.js",
    "Firebase"
  ],
  "Mobile Development": [
    "Android (Jetpack Compose)",
    "iOS (Swift, Xcode)"
  ],
  "Data, AI & Robotics": [
    "Machine Learning",
    "Computer Vision",
    "Robotics"
  ],
  "DevOps & Systems": [
    "Git",
    "CI/CD",
    "Linux",
    "WSL"
  ],
  "Tools & Platforms": [
    "Android Studio",
    "Xcode",
    "Blender",
    "Unity"
  ],
  "Workflow & Collaboration": [
    "Agile",
    "Jira",
    "Confluence"
  ]
};

  
    return (
        <div>
            <section id="skills" className="py-32 px-6" style={{ backgroundColor: '#FAF7F5' }}>
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#E11D48' }}>
                    Technical Skills
                    </h2>
                    <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#F97316' }} />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items]) => (
                    <div 
                        key={category}
                        className="p-8 rounded-2xl border-2 hover:scale-105 hover:shadow-xl transition-all duration-300"
                        style={{ backgroundColor: '#FFFFFF', borderColor: '#FED7AA' }}
                    >
                        <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif', color: '#2D2A2E' }}>
                        {category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                        {items.map((skill) => (
                            <span 
                            key={skill}
                            className="px-4 py-2 rounded-full text-sm font-medium border hover:scale-110 transition-all duration-300"
                            style={{ backgroundColor: '#FFF1F2', color: '#E11D48', borderColor: '#FED7AA' }}
                            >
                            {skill}
                            </span>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </div>
    )
}