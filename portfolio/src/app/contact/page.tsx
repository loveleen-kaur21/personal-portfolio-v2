export default function Contact() {
    return (
        <div className="min-h-screen p-12 md:p-24">
            <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Email</h2>
                            <a href="mailto:loveleenkaurr01@gmail.com" className="text-blue-600 hover:text-blue-800">
                                loveleenkaurr01@gmail.com
                            </a>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Social</h2>
                            <div className="flex gap-4">
                                <a href="https://github.com/loveleen-kaur21" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                GitHub
                                </a>
                                <a href="https://www.linkedin.com/in/loveleenka/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                LinkedIn
                                </a>
                                {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                Twitter
                                </a> */}
                            </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Send Me a Message</h2>
                    <form className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            className="w-full border rounded-lg p-2" 
                            required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            className="w-full border rounded-lg p-2" 
                            required 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">Message</label>
                            <textarea 
                            id="message" 
                            rows={5} 
                            className="w-full border rounded-lg p-2" 
                            required 
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors self-start"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}