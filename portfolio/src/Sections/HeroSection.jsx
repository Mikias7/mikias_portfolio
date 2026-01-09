import { Sparkles } from 'lucide-react';


export default function HeroSection(){

    return (
        <div>
            <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
                <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10 blur-2xl animate-pulse" 
                    style={{ backgroundColor: '#F97316' }} />
                <div className="absolute bottom-32 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse" 
                    style={{ backgroundColor: '#E11D48', animationDelay: '1s' }} />
                
                <div className="max-w-4xl text-center z-10 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" 
                    style={{ backgroundColor: '#FFF1F2', border: '1px solid #FED7AA' }}>
                    <Sparkles size={16} style={{ color: '#E11D48' }} />
                    <span className="text-sm font-medium" style={{ color: '#6F6C72' }}>
                        Available for opportunities
                    </span>
                    </div>
                    
                    <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none" 
                    style={{ fontFamily: 'Georgia, serif', color: '#2D2A2E' }}>
                    Software
                    <br />
                    <span style={{ color: '#E11D48' }}>Engineer</span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#6F6C72' }}>
                    Recent graduate passionate about building elegant solutions to complex problems. 
                    Specializing in full-stack development with a love for clean code and user experience.
                    </p>
        
                    <div className="flex gap-4 justify-center pt-4">
                    <a href="#projects" 
                        className="px-8 py-4 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                        style={{ backgroundColor: '#E11D48', color: '#FFFFFF' }}>
                        View My Work
                    </a>
                    <a href="#contact" 
                        className="px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: '#FFF1F2', color: '#E11D48', border: '2px solid #E11D48' }}>
                        Get In Touch
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}