

export default function Nav(){

    return (
        <div>
            <nav className="fixed top-0 w-full bg-opacity-80 backdrop-blur-md z-50" style={{ backgroundColor: '#FAF7F5' }}>
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif', color: '#E11D48' }}>
                    Portfolio
                </div>
                <div className="flex gap-8">
                    {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <a 
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium tracking-wide hover:opacity-70 transition-colors duration-300"
                        style={{ color: '#6F6C72' }}
                    >
                        {item}
                    </a>
                    ))}
                </div>
                </div>
            </nav>
        </div>
    )
}