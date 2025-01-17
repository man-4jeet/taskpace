import Photo from "../../public/ManjeetProfilephoto.jpg";
import Image from "next/image";

export function AboutMe() {
    return (
        <div className="flex pt-16 pb-16 bg-gray-100">
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                <Image 
                    src={Photo}
                    alt="Manjeet Singh Profile"
                    width={400}
                    height={400}
                    className="rounded-full shadow-lg border-4 border-gray-300"
                />
            </div>
            <div className="ml-8 md:ml-16 text-black flex flex-col justify-center w-full md:w-2/3">
                <h1 className="text-5xl md:text-6xl font-semibold text-gray-800 mb-6">About Me</h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 mx-auto md:mx-12">
                I&apos;m Manjeet Singh, a Fullstack Developer with a passion for building dynamic and user-friendly web applications. Currently a final year B.Tech student at Motilal Nehru National Institute of Technology (MNNIT), I have honed my skills in web development through various projects and professional experience.
                With a problem-solving mindset and a collaborative approach, I&apos;m always looking for opportunities to grow and make an impact through technology.
             
                </p>
                <a 
    href="https://drive.google.com/file/d/1qZIZYEDOUJTs1RY0D8k6KC3yIzlyOlX6/view?usp=drivesdk" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block text-center py-3 px-6 mt-6 text-lg font-medium text-black hover:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer max-w-xs"
>
    View My Resume
</a>


            </div>
        </div>
    );
}
