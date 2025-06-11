"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
    project: {
        title: string;
        subtitle?: string;
        description: string;
        techStack: string[];
        year: string;
        image?: string;
        github?: string;
        liveDemo?: string | null;
        cspireProject?: boolean;
    };
    borderColor: string;
    bgColor: string;
}

const ProjectCard = ({ project, borderColor, bgColor }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
    <div
        className={`${borderColor} ${bgColor} rounded-xl p-6 shadow-lg transition-all duration-300 transform ${
        isHovered ? 'scale-105 shadow-xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Project Image */}
        <div className="bg-white rounded-lg p-4 mb-4 h-48 flex items-center justify-center overflow-hidden">
        {project.image ? (
            <Image 
            src={project.image} 
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-full object-cover rounded"
            />
        ) : (
            <div className="text-gray-400 text-center">
            <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                📱
            </div>
            </div>
        )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
        {project.subtitle && (
            <h4 className="text-lg font-medium text-white text-opacity-80 mb-4">
                {project.subtitle}
            </h4>
        )}

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
                <span
                key={index}
                className="px-3 py-1 bg-white bg-opacity-90 text-sm rounded-full font-medium"
                style={{ color: '#0f1419' }}
                >
                {tech}
                </span>
            ))}
        </div>

        {/* Project Description */}
            <p className="text-white text-opacity-90 mb-6 line-clamp-3">
            {project.description}
        </p>

        {/* Year */}
            <div className="text-white text-opacity-80 text-lg font-semibold mb-4">
            {project.year}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
        {project.liveDemo && (
            <Link
            href={project.liveDemo}
            className="flex-1 bg-white text-gray-800 py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
            target="_blank"
            >
            Live Demo
            </Link>
        )}
        {project.github && (
            <Link
            href={project.github}
            className="flex items-center justify-center w-12 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
            target="_blank"
            >
            <svg className="w-6 h-6" style={{ color: '#0f1419' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            </Link>
        )}
        </div>
    </div>
    );
};

export default function ProjectsPage() {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

    const projects = [
        {
            title: "International Day Pass",
            description: "Providing customers with a new feature to call from anywhere in the world.",
            techStack: ["Java", "Angular", "SCSS", "HTML"],
            year: "",
            image: "",
        },
        {
            title: "Lower Credit Offers",
            description: "",
            techStack: [],
            year: "",
            image: "/images/low-credit-offers.png",
        },
        {
            title: "Prepaid Insurance",
            description: "",
            techStack: [],
            year: "",
            image: "",
        },
        {
            title: "Same Day Renewal",
            description: "",
            techStack: [],
            year: "",
            image: "",
        },
        {
            title: "Business-2-Business Wireless Cart",
            description: "",
            techStack: [],
            year: "",
            image: "",
        },
        {
            title: "Shifty",
            subtitle: "Automated Nurse's Schedule Generator",
            description: "Shifty is a web application designed to automatically create a two-month schedule of shifts for a medical staff given specific requirements for each employee",
            techStack: ["Spring", "Java", "Javascript", "CSS", "HTML"],
            year: "2021",
            image: "/images/shifty.png",
            github: "https://github.com/loveleen-kaur21/capstoneProject-joe-loveleen",
        },
        {
            title: "MEET",
            subtitle: "Base Camp App",
            description: "'MEET' Base Camp's solution to all questions received from outsiders. This is a web application version of the Meet Base Camp Java Program.",
            techStack: ["Spring", "Java", "HTML", "CSS"],
            year: "2021",
            image: "/images/mbc.png",
            github: "https://github.com/loveleen-kaur21/mbcwebappSPRING",
        },
        {
            title: "GitADate",
            description: "A Tinder for developers. We allow people to swipe left or right depending on like or dislike to match developers with each other. This app uses firebase and Next.js. This is still a work in progress. Some additional features that are under development include chat messaging and beginner questionnaire to validate developer profile.",
            techStack: ["JavaScript", "Next.js", "React.js", "Firebase"],
            year: "2021",
            image: "/images/gitadate.jpg",
            github: "https://github.com/loveleen-kaur21/DatingAppJS",
            liveDemo: null
        },
        {
            title: "ReservME",
            description: "A Hotel Reservation Program based for the main use of an administrator / hotel staff. ",
            techStack: ["Python", "Tkinter", "React.js", "Next.js"],
            year: "2021",
            image: "/images/Reservme2.png",
            github: "https://github.com/BaseCampCoding/unit-project-2-loveleen-dylan/",
            liveDemo: null
        },
        {
            title: "F.A.C.T Prototype",
            description: "This prototype is a web application designed for the use of FAst Container Transfer (FACT). This team-project was for an un-discolsed company to allow users to re-allocate weight within containers based on a company's contract.",
            techStack: ["Django", "Python", "JavaScript", "CSS", "HTML"],
            year: "2021",
            image: "/images/fact.png",
            github: "https://github.com/loveleen-kaur21/FACT-Prototype",
            liveDemo: "https://fact-prototype.herokuapp.com"
        },
        {
            title: "Magic To-Do",
            description:"This program is a combination of a Magic 8 Ball and a To Do List. Insert the items on your to-do list that you wish to complete. Once entered, enter the command 'shake' to allow the ball to randomly choose a task. Once you have your task, start a timer for how long you need.",
            techStack: ["Python"],
            year: "2020",
            image: "/images/magic-to-do.png",
            github: "https://github.com/BaseCampCoding/fundamentals-of-programming-pt-1-unit-project-loveleen-hardaway",
        },
    ];

    const cardColors = [
        { border: "border-l-8 border-emerald-400", bg: "bg-gradient-to-br from-emerald-500 to-teal-600" },
        { border: "border-l-8 border-pink-400", bg: "bg-gradient-to-br from-pink-500 to-rose-600" },
        { border: "border-l-8 border-orange-400", bg: "bg-gradient-to-br from-orange-500 to-red-600" }
    ];

    // Calculate pagination
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    // Pagination handlers
    const goToPrevious = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const goToNext = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    return (
    <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
            My Work
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my journey in software development.
            </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProjects.map((project, index) => (
                <ProjectCard
                    key={startIndex + index}
                    project={project}
                    borderColor={cardColors[index % cardColors.length].border}
                    bgColor={cardColors[index % cardColors.length].bg}
                />
            ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
            <button 
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 transition-colors ${
                    currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-600 hover:text-gray-800 cursor-pointer'  // ← Added cursor-pointer
                }`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
            </button>

            <div className="text-gray-500">
                Showing {startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length} projects
            </div>

            <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 font-medium transition-colors ${
                    currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-orange-500 hover:text-orange-600 cursor-pointer'  // ← Added cursor-pointer
                }`}
            >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
        </div>
    </div>
    );
}