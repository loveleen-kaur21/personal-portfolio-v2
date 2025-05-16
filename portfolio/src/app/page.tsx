import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-4">Loveleen Kaur</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Full Stack Developer</h2>
        <p className="max-w-2xl text-lg mb-8">
          I build modern web applications with a focus on performance,
          accessibility, and user experience.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}