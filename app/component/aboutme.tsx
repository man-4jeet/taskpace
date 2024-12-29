import Photo from "../../public/image.png";
import Image from "next/image";

export function AboutMe() {
    return (
        <div className="flex pt-10">
            <Image 
                src={Photo}
                alt="Image"
                width={400}
                className="rounded-full ml-16"
            />
            <div className="ml-32 text-black">
                <h1 className="text-6xl mx-20">About Me</h1>
                <p className="px-12 mt-10 text-lg text-slate-600">
                    My name is Mohd Shahid Iqbal. I&apos;m a post-graduate of 2020 from Jamia Hamdard University at New Delhi with a degree in Masters of Computer Application. 
                    I&apos;m most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. 
                    In my free time, I like working on open-source projects.
                </p>
                <span className="border border-gray-800 p-4 rounded-lg mt-12 block w-fit ml-44">
                    Resume
                </span>
            </div>
        </div>
    );
}
