export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project One",
            description: "A brief description of this project and what technologies you used.",
            image: "/project1.jpg",
            github: "https://github.com/yourusername/project1",
            demo: "https://project1demo.com",
            tags: ["React", "Next.js", "Tailwind CSS"]
        },
        {
            id: 2,
            title: "Project Two",
            description: "A brief description of this project and what technologies you used.",
            image: "/project2.jpg",
            github: "https://github.com/yourusername/project2",
            demo: "https://project2demo.com",
            tags: ["Node.js", "Express", "MongoDB"]
        },
        // Add more projects here
    ];

    return (
        <div className="min-h-screen p-12 md:p-24">
            <h1 className="text-4xl font-bold mb-8">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Project Image</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span key={tag} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {tag}
                            </span>
                        ))}
                        </div>
                        <div className="flex gap-4">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            GitHub
                        </a>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800"
                        >
                            Live Demo
                        </a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}