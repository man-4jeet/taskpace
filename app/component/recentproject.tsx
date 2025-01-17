import Link from "next/link"; 
import { Github } from 'lucide-react'; 

export function RecentProject() {
    return (
        <div className="py-12 px-8 bg-transparent text-center text-slate-800">
            <h1 className="text-5xl font-extrabold mb-8 text-gray-950">Recent Project</h1>
            <div className="w-11/12 max-w-4xl mx-auto bg-white/90 shadow-md rounded-lg p-8 flex flex-col items-center space-y-6 border border-slate-300">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-lg"></div>
                    <div className="relative bg-white p-4 rounded-full">
                       
                        <Link href="https://github.com/man-4jeet/Ecommerce-Frontend" target="_blank">
                            <Github size={100} className="rounded-full text-gray-800" />
                        </Link>
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">Shopyy</h2>
                    <p className="text-xl text-gray-600 italic">Full Stack Ecommerce Project</p>
                </div>
                <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
                    This project involved the development of a full-stack web application using modern technologies. 
                    I worked on both the front-end and back-end, ensuring a seamless user experience and efficient data handling.
                </p>
            </div>
        </div>
    );
}
