import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function AboutSection(){

    return (
        <div>
            <section id="about" className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <div className="inline-block">
                        <h2 className="text-5xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: '#E11D48' }}>
                            About Me
                        </h2>
                        <div className="h-1 rounded-full" style={{ backgroundColor: '#F97316' }} />
                        </div>
                        
                        <p className="text-lg leading-relaxed" style={{ color: '#6F6C72' }}>
                        I’m a computer science major with over a year of internship experience building full-stack and AI-driven software 
                        that solves real problems. I’ve worked across machine learning, computer vision, robotics, and frontend systems, 
                        automating robotic testing, preventing elder-care falls, and turning research ideas into production-ready tools.
                        </p>
                        
                        <p className="text-lg leading-relaxed" style={{ color: '#6F6C72' }}>
                       Outside of my core development work, I’m usually exploring new technologies, refining side projects, or 
                       figuring out how to make complex systems simpler, faster, and more reliable. I believe the best 
                       software is built through curiosity, iteration, and a bit of stubborn problem-solving.
                        </p>
        
                        <div className="flex gap-4 pt-4">
                        <a href="https://github.com/Mikias7" target='_blank' className="p-3 rounded-lg hover:scale-110 transition-all duration-300" 
                            style={{ backgroundColor: '#FFF1F2', color: '#E11D48' }}>
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/mikias-tadele/" target='_blank' className="p-3 rounded-lg hover:scale-110 transition-all duration-300" 
                            style={{ backgroundColor: '#FFF1F2', color: '#E11D48' }}>
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:mikias7t@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg hover:scale-110 transition-all duration-300"
                            style={{ backgroundColor: '#FFF1F2', color: '#E11D48' }}
                            >
                            <Mail size={24} />
                        </a>
                        </div>
                    </div>
        
                    <div className="relative">
                        <div
                            className="aspect-square rounded-3xl overflow-hidden relative border-[3px]"
                            style={{ backgroundColor: '#FFF1F2', borderColor: '#FED7AA' }}
                        >
                            {/* Photo */}
                            <img
                            src="/img.png"        // path or URL
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Icon overlay */}
                            {/* <div className="absolute inset-0 flex items-center justify-center">
                            <Code2 size={120} className="opacity-20" style={{ color: '#E11D48' }} />
                            </div> */}

                            {/* Gradient overlay */}
                            {/* <div
                            className="absolute inset-0 opacity-20"
                            style={{ background: 'linear-gradient(to bottom right, #E11D48, #F97316)' }}
                            /> */}
                        </div>

                        {/* Glow blob */}
                        <div
                            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30"
                            style={{ backgroundColor: '#F97316' }}
                        />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}