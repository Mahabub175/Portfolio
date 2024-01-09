import React from "react";
import {
    BsFacebook,
    BsGithub,
    BsLinkedin,
    BsInstagram,
    BsDownload,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const ContactButton: React.FC = () => {
    return (
        <div>
            <div className="flex gap-x-8  mt-4 text-4xl">
                <a
                    target="_blank"
                    href="https://www.facebook.com/mahabub.ahmmed.52/"
                >
                    <BsFacebook className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a target="_blank" href="https://github.com/Astro177">
                    <BsGithub className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a
                    target="_blank"
                    href="https://www.instagram.com/mahabub_tro/"
                >
                    <BsInstagram className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/mahabub-ahmed-683490278/"
                >
                    <BsLinkedin className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
                <a target="_blank" href="mailto:mahabub.ahmed175@gmail.com">
                    <SiGmail className="text-white hover:bg-primary-400 duration-500 hover:scale-125 rounded-full " />
                </a>
            </div>

            <div className="mt-6">
                <a
                    href="https://drive.google.com/file/d/1jzmhTu4FRlld10lITu2yvvkSLtcyRKZ1/view?usp=sharing"
                    target="_blank"
                >
                    <button className="flex items-center justify-center gap-2 text-white bg-primary-400 px-10 py-2 rounded-xl font-bold border border-primary-400 hover:bg-transparent duration-300">
                        Resume
                        <BsDownload className="hover:animate-bounce transition-all" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default ContactButton;
