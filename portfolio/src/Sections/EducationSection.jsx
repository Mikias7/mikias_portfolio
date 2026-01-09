import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function EducationSection(){

    return (
        <div>
            <section id="education" className="py-32 px-6" style={{ backgroundColor: '#FAF7F5' }}>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif', color: '#E11D48' }}>
                        Education
                    </h2>
                    <div className="h-1 w-24 mx-auto rounded-full" style={{ backgroundColor: '#F97316' }} />
                    </div>
        
                    <div className="p-10 border-2 rounded-2xl" 
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#FED7AA' }}>
                    <div className="flex items-start gap-6">
                        <div className="p-4 rounded-xl" style={{ backgroundColor: '#FFF1F2' }}>
                        <Sparkles size={32} style={{ color: '#E11D48' }} />
                        </div>
                        <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif', color: '#2D2A2E' }}>
                            Bachelor of Science in Computer Science
                        </h3>
                        <p className="text-lg mb-4" style={{ color: '#6F6C72' }}>
                            University Name • 2020 - 2024
                        </p>
                        <p className="text-base leading-relaxed mb-4" style={{ color: '#6F6C72' }}>
                            GPA: 3.8/4.0 • Dean's List
                        </p>
                        <p className="text-base leading-relaxed" style={{ color: '#6F6C72' }}>
                            Relevant Coursework: Data Structures & Algorithms, Web Development, 
                            Database Systems, Software Engineering, Machine Learning, Computer Networks
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}