import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function EducationSection(){

    return (
        <div>
            <section id="education" className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
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
                            Bachelor in Computer Science
                        </h3>
                        <p className="text-lg mb-4" style={{ color: '#6F6C72' }}>
                            Augustana University • 2023 - 2026 • GPA: 3.5/4.0 
                        </p>
                        {/* <p className="text-base leading-relaxed mb-4" style={{ color: '#6F6C72' }}>
                            GPA: 3.5/4.0 
                        </p> */}
                        <div className="text-base leading-relaxed" style={{ color: "#6F6C72" }}>
                            <span className="font-semibold block mb-2">
                                Relevant Coursework:
                            </span>

                            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 list-disc pl-5">
                                <li>Data Structures & Algorithms</li>
                                <li>Software Engineering</li>
                                <li>Object-Oriented Programming</li>
                                <li>Machine Learning & AI</li>
                                <li>Database Management</li>
                                <li>Data Science</li>
                                <li>Web Development</li>
                                <li>Probability & Statistics</li>
                                <li>Discrete Mathematics</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}