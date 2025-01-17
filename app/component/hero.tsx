import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <div 
      className="h-[calc(100vh)] w-screen flex justify-center items-center flex-col px-4 text-center"
      id="hero"
    >
      <div className="text-5xl md:text-6xl lg:text-8xl font-thin">Manjeet Singh</div>
      <div className="text-sm md:text-base lg:text-lg mt-4">
        Passionate about changing the world with technology.
      </div>

      <div className="flex mt-5 space-x-4">
        <a href="https://github.com/man-4jeet" target="_blank" rel="noopener noreferrer">
          <Github 
            size={30} 
            className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200"
          />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Facebook 
            size={30} 
            className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200"
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram 
            size={30} 
            className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200"
          />
        </a>
        <a href="https://www.linkedin.com/in/manjeet-singh-1857s" target="_blank" rel="noopener noreferrer">
          <Linkedin 
            size={30} 
            className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200"
          />
        </a>
      </div>

      <a
        href="#aboutme"
        className="p-2 md:p-3 border border-white rounded-lg mt-6 text-sm md:text-base hover:bg-gray-200 hover:text-black transition-all duration-300"
      >
        More about me
      </a>
    </div>
  );
}
