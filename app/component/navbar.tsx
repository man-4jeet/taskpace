'use client';

import { useState, useEffect } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from 'next/link'; 

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
            if (window.scrollY > heroHeight / 2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 p-6 transition-all duration-300 ${
                isScrolled ? "bg-white text-gray-900 shadow-lg" : "bg-transparent text-white"
            }`}
        >
            <div className="flex justify-between items-center">
               
                <div className="text-3xl font-thin">Manjeet Singh</div>

              
                <div className="space-x-8 flex items-center">
                    <Link
                        href="#hero"
                        className="text-lg font-medium hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="#aboutme"
                        className="text-lg font-medium hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="#experience"
                        className="text-lg font-medium hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all duration-200"
                    >
                        Experience
                    </Link>
                    <Link
                        href="#recentprojects"
                        className="text-lg font-medium hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all duration-200"
                    >
                        Projects
                    </Link>
                    <Link
                        href="#skills"
                        className="text-lg font-medium hover:bg-gray-700 hover:text-white py-2 px-4 rounded-lg transition-all duration-200"
                    >
                        Skills
                    </Link>
                </div>

               
                <div className="flex space-x-4">
                    <a href="https://github.com/man-4jeet" target="_blank" rel="noopener noreferrer">
                        <Github
                            size={30}
                            className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200"
                        />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <Facebook
                            size={30}
                            className="hover:text-black ml-1 hover:cursor-pointer hover:scale-125 transition-all duration-200"
                        />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <Instagram
                            size={30}
                            className="hover:text-black ml-2 hover:cursor-pointer hover:scale-125 transition-all duration-200"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/manjeet-singh-1857s" target="_blank" rel="noopener noreferrer">
                        <Linkedin
                            size={30}
                            className="hover:text-black ml-3 hover:cursor-pointer hover:scale-125 transition-all duration-200"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
