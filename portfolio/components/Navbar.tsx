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
    ];

    return (
    <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="font-bold text-xl">
                        Loveleen Kaur
                    </Link>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`${
                                pathname === link.path
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-600 hover:text-gray-900'
                            } transition-colors`}
                        >
                        {link.name}
                        </Link>
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
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`${
                        pathname === link.path
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        } block px-3 py-2 rounded-md text-base font-medium`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    </nav>
    );
}