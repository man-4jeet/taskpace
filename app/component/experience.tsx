import Image from "next/image";
import cooliewaleLogo from "../../public/coolieWaleLogo.svg";

export function Experience() {
    return (
        <div className="py-12 px-8 bg-transparent text-center text-slate-800">
            <h1 className="text-5xl font-extrabold mb-8 text-gray-950">Experience</h1>
            <div className="w-11/12 max-w-4xl mx-auto bg-white/90 shadow-md rounded-lg p-8 flex flex-col items-center space-y-6 border border-slate-300">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-lg"></div>
                    <div className="relative bg-white p-4 rounded-full">
                        <Image
                            src={cooliewaleLogo}
                            alt="Cooliewale Logo"
                            width={200}
                            height={200}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">Cooliewale</h2>
                    <p className="text-xl text-gray-600 italic">React Developer</p>
                    <p className="text-lg text-gray-500">Jan 2024 - Feb 2024</p>
                </div>
                <p className="text-gray-700 text-lg max-w-xl leading-relaxed">
                    At Cooliewale, I contributed as a React Developer, crafting user-friendly interfaces 
                    and optimizing web applications. This role honed my skills in front-end development and 
                    teamwork.
                </p>
            </div>
        </div>
    );
}
