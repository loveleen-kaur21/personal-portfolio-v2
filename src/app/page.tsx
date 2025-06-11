"use client";

import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl text-gray-600 mb-8">Let&apos;s build something together.</h2>
        <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
          Hi, I&apos;m <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Loveleen Kaur</span>
        </h1>
        <p className="text-lg mb-8">
          <TypeAnimation
            sequence={[
              'A Software Engineer',
              1200,
              'A Frontend Developer',
              1200,
              'A Backend Developer',
              1200,
              'A Full-Stack Developer',
              1200
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </p>
        <h2 className="text-1xl text-gray-600 mb-8">with a passion for clean code and chaotic debugging sessions ✨</h2>

        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </Link>

          {/* Secondary - pink accent */}
          <Link
            href="/contact"
            className="border border-pink-300 text-pink-400 hover:bg-pink-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}