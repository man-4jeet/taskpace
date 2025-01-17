import Photo from "../../public/ManjeetProfilephoto.jpg";
import Image from "next/image";

export function AboutMe() {
    return (
        <div className="flex flex-col md:flex-row pt-16 pb-16 bg-gray-100 items-center md:items-start">
            <div className="flex-shrink-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] flex justify-center mb-8 md:mb-0">
                <Image 
                    src={Photo}
                    alt="Manjeet Singh Profile"
                    width={400}
                    height={400}
                    className="rounded-full shadow-lg border-4 border-gray-300"
                />
            </div>
            <div className="text-black flex flex-col justify-center px-4 md:px-16 w-full md:w-2/3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 mb-6 text-center md:text-left">About Me</h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 text-center md:text-left">
                    I&apos;m Manjeet Singh, a Fullstack Developer with a passion for building dynamic and user-friendly web applications. Currently a final year B.Tech student at Motilal Nehru National Institute of Technology (MNNIT), I have honed my skills in web development through various projects and professional experience. With a problem-solving mindset and a collaborative approach, I&apos;m always looking for opportunities to grow and make an impact through technology.
                </p>
                <div className="flex justify-center md:justify-start">
                    <a 
                        href="https://drive.google.com/file/d/1U-HgCChPB8PrLu6Kp1PuS1o4XfWwoGAg/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-center py-3 px-6 mt-6 text-lg font-medium bg-gray-800 text-white hover:bg-gray-700 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    >
                        View My Resume
                    </a>
                </div>
            </div>
        </div>
    );
}
