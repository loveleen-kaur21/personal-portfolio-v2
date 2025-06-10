"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
        { name: 'Resume', path: '/resume.pdf', external: true },
    ];

    return (
    <nav className="shadow-sm">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl">
                        LK.
                    </Link>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        link.external ? (
                            <a
                                key={link.path}
                                href={link.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 hover:text-gray-800 px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-2 backdrop-blur-sm"
                            >
                                {link.name}
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </a>
                        ) : (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`${
                                    pathname === link.path
                                    ? 'text-pink-400 font-medium'
                                    : 'text-gray-600 hover:text-orange-400'
                                } transition-colors`}
                            >
                            {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* Icon for menu */}
                        <svg
                            className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        {/* Icon for close */}
                        <svg
                            className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile menu */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map(link => (
                    link.external ? (
                        <a
                            key={link.path}
                            href={link.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 hover:text-gray-800 px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg block text-center flex items-center justify-center gap-2 backdrop-blur-sm"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    ) : (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`${
                            pathname === link.path
                                ? 'bg-pink-50 text-pink-600'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            } block px-3 py-2 rounded-md text-base font-medium`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    )
                ))}
            </div>
        </div>
    </nav>
    );
}