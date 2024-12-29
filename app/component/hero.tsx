import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

export function Hero(){
    return (
    <div className="h-[calc(100vh-45px)] w-screen flex justify-center items-center flex-col">
        <div className="text-8xl font-thin ">Mohd Shahid Iqbal</div>
        <div className="text-lg">Passionate about changing the world with technology.</div>

        <div className="flex mt-5">
        <Github size={30} className="hover:text-black hover:cursor-pointer hover:scale-125 transition-all duration-200"/>
        <Facebook size={30} className="hover:text-black ml-1 hover:cursor-pointer hover:scale-125 transition-all duration-200" />
        <Instagram size={30} className="hover:text-black ml-2 hover:cursor-pointer hover:scale-125 transition-all duration-200"/>
        <Linkedin size={30}  className="hover:text-black ml-3 hover:cursor-pointer hover:scale-125 transition-all duration-200"/>
        </div>
        <div className="p-3 border border-white rounded-lg mt-6">More about me</div>
        <div></div>
    </div>)
}