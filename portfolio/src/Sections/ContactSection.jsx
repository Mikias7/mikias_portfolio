import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function ContactSection(){

    return (
        <div>
            <section id="contact" className="py-32 px-6 border-t" style={{ backgroundColor: '#FAF7F5', borderColor: '#FED7AA' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif', color: '#E11D48' }}>
                    Let's Connect
                    </h2>
                    <div className="h-1 w-24 mx-auto rounded-full mb-8" style={{ backgroundColor: '#F97316' }} />
                    
                    {/* <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#6F6C72' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
                    my inbox is always open!
                    </p>
         */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a href="mailto:mikias7t@gmail.com" 
                        className="group px-10 py-5 rounded-full font-medium hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                        style={{ backgroundColor: '#E11D48', color: '#FFFFFF' }}>
                        <Mail size={24} />
                        <span className="text-lg">Send an Email</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/mikias-tadele/"
                        target="_blank" 
                        className="group px-10 py-5 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-3"
                        style={{ backgroundColor: '#FFF1F2', color: '#E11D48', border: '2px solid #E11D48' }}>
                        <Linkedin size={24} />
                        <span className="text-lg">Connect on LinkedIn</span>
                    </a>
                    </div>
                </div>
            </section>
        </div>
    )
}