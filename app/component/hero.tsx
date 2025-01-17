import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <div className="h-[calc(100vh)] w-screen flex justify-center items-center flex-col" id="hero">
      <div className="text-8xl font-thin">Manjeet Singh</div>
      <div className="text-lg">Passionate about changing the world with technology.</div>

      <div className="flex mt-5">
        <a href="https://github.com/man-4jeet" target="_blank" rel="noopener noreferrer">
          <Github size={30} className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} className="hover:text-black ml-1 hover:cursor-pointer hover:scale-125 transition-all duration-200" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} className="hover:text-black ml-2 hover:cursor-pointer hover:scale-125 transition-all duration-200" />
        </a>
        <a href="https://www.linkedin.com/in/manjeet-singh-1857s" target="_blank" rel="noopener noreferrer">
          <Linkedin size={30} className="hover:text-black ml-3 hover:cursor-pointer hover:scale-125 transition-all duration-200" />
        </a>
      </div>

      <a
        href="#aboutme"
        className="p-3 border border-white rounded-lg mt-6 hover:bg-gray-200 hover:text-black transition-all duration-300"
      >
        More about me
      </a>
    </div>
  );
}
