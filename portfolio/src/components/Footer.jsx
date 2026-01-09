import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from 'lucide-react';

export default function Footer(){

    return (
        <div>
            <footer className="py-12 px-6 border-t" style={{ backgroundColor: '#FAF7F5', borderColor: '#FED7AA' }}>
                <div className="max-w-6xl mx-auto text-center">
                <p style={{ color: '#6F6C72' }}>
                    Designed & Built by <span style={{ color: '#E11D48', fontWeight: '600' }}>Mikias Tadele</span>
                </p>
                <p className="text-sm mt-2" style={{ color: '#6F6C72', opacity: 0.7 }}>
                    © 2026 All rights reserved
                </p>
                </div>
            </footer>
        </div>
    )
}