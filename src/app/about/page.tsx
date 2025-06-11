'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
    const [showLegos, setShowLegos] = useState(false);

    return (
        <div className="min-h-screen p-12 md:p-24">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <p className="text-lg mb-6">
                        I&apos;m a software engineer passionate about building <strong>robust</strong>, scalable applications that solve real-world problems through clean code and thoughtful architecture. My favorite work lies at the intersection of backend systems and user experience, creating solutions that are both technically sound and genuinely useful.</p>
                    <p className="text-lg mb-6">
                        Currently, I&apos;m focused on <strong>Full-Stack Development</strong>, specializing in creating seamless digital experiences from database to user interface. I love tackling complex problems and transforming them into elegant, maintainable solutions that users actually want to interact with.
                    </p>

                    <p className="text-lg mb-6">
                        My journey began at <strong><u><a href="https://basecampcodingacademy.org/" className="text-pink-400 hover:text-orange-400">Base Camp Coding Academy</a></u></strong>, an exclusive year-long program offering recent high school graduates a fast-track path to becoming software engineers with a full scholarship. The academy wasn&apos;t just about learning to code; it was about mastering the art of continuous learning as a full-stack developer and developing strong problem-solving skills. There, I discovered my passion for turning ideas into functional, impactful software.
                    </p>

                    <div className="text-lg mb-4">
                        In my spare time, I&apos;m usually cooking, shopping, drawing, or building{' '}
                        <span
                            className="relative inline-block cursor-pointer text-orange-400 hover:text-pink-400 transition-colors duration-200"
                            onMouseEnter={() => setShowLegos(true)}
                            onMouseLeave={() => setShowLegos(false)}
                        >
                            legos
                            {showLegos && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-3 rounded-lg shadow-lg text-sm z-10 animate-fade-in">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="text-lg">🧱</div>
                                        <div className="flex gap-1 text-lg">
                                            <span>🔴</span>
                                            <span>🟡</span>
                                        </div>
                                        <div className="flex gap-1 text-lg">
                                            <span>🔵</span>
                                            <span>🟢</span>
                                            <span>🟠</span>
                                        </div>
                                        <div className="text-lg">🧱</div>
                                    </div>
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                                </div>
                            )}
                        </span>!
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative">
                        <Image
                            src="/images/loveleen1.png"
                            alt="Loveleen Kaur"
                            width={256}
                            height={256}
                            className="w-64 h-64 rounded-full object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        {/* Optional: Add a subtle coral border */}
                        <div className="absolute inset-0 rounded-full border-2 border-orange-400/20"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateX(-50%) translateY(5px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(-50%) translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
            `}</style>
        </div>
    );
}