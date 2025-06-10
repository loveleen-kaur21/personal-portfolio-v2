export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            emoji: "🎨",
            color: "from-pink-400 to-rose-500",
            bgColor: "bg-pink-50",
            textColor: "text-pink-700",
            skills: ["HTML", "CSS", "Sass", "JavaScript", "TypeScript", "React", "Angular", "Next.js", "Bootstrap"]
        },
        {
            category: "Backend",
            emoji: "⚙️",
            color: "from-blue-400 to-indigo-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-700",
            skills: ["Java", "Python", "Ruby", "Django", "Spring", "JavaServer Pages (JSP)", "RESTful APIs", "SOAP"]
        },
        {
            category: "Databases & Data",
            emoji: "🗄️",
            color: "from-green-400 to-emerald-500",
            bgColor: "bg-green-50",
            textColor: "text-green-700",
            skills: ["SQL", "PostgreSQL", "MySQL", "Firebase", "JSON", "XML"]
        },
        {
            category: "DevOps & Tools",
            emoji: "🛠️",
            color: "from-purple-400 to-violet-500",
            bgColor: "bg-purple-50",
            textColor: "text-purple-700",
            skills: ["Git", "GitHub", "Docker", "Jenkins", "AWS", "Vercel"]
        }
    ];

    return (
        <div className="min-h-screen p-12 md:p-24">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                    Skills & Tech Stack
                </h1>
                {/* <p className="text-gray-400 text-lg">
                    Here's what I love working with! ✨
                </p> */}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {skillCategories.map((category) => (
                    <div 
                        key={category.category} 
                        className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm`}
                    >
                        {/* Gradient Background */}
                        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color}`}></div>
                        
                        {/* Content */}
                        <div className="p-8">
                            {/* Category Header */}
                            <div className="flex items-center mb-6">
                                <span className="text-4xl mr-3">{category.emoji}</span>
                                <h2 className={`text-2xl font-bold text-white`}>
                                    {category.category}
                                </h2>
                            </div>
                            
                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <span 
                                        key={skill}
                                        className={`text-gray-200 bg-gray-700/60 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-gray-500 hover:bg-gray-600/60 transition-all duration-200 hover:scale-105 shadow-sm`}
                                        style={{
                                            animationDelay: `${skillIndex * 0.1}s`
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>
                        <div className="absolute -top-2 -left-2 w-16 h-16 rounded-full bg-white/20 blur-xl"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}