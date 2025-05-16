export default function About() {
    return (
        <div className="min-h-screen p-12 md:p-24">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <p className="text-lg mb-4">
                        I'm a passionate developer with X years of experience building web applications.
                        My journey in software development began with [your story here].
                    </p>
                    <p className="text-lg mb-4">
                        I specialize in JavaScript, React, Next.js, and [other technologies you work with].
                        My approach to development focuses on creating clean, maintainable code that delivers
                        exceptional user experiences.
                    </p>
                    <p className="text-lg">
                        When I'm not coding, you can find me [your interests/hobbies].
                    </p>
                </div>
                <div className="flex justify-center">
                    {/* Replace with your actual image */}
                    <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Your Photo</span>
                    </div>
                </div>
            </div>
        </div>
    );
}