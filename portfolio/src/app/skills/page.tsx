export default function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "Python", "Django"] // Add your backend skills
        },
        {
            category: "Databases",
            skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"] // Add your database skills
        },
        {
            category: "DevOps & Tools",
            skills: ["Git", "GitHub", "Docker", "AWS", "Vercel"] // Add your tools
        }
    ];

    return (
        <div className="min-h-screen p-12 md:p-24">
            <h1 className="text-4xl font-bold mb-8">Skills & Technologies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
                <div key={category.category} className="border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                    <span 
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg"
                    >
                        {skill}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
    );
}