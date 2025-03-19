import React, { useEffect, useState } from "react";
import { GiClick } from "react-icons/gi";
import { TbClick } from "react-icons/tb";
import { AnimatedText } from "@/components";
import ContactButton from "@/components/ContactButton";

type Props = {
    setShowHero: (v: boolean) => void;
    setRevealUnderneath: (v: boolean) => void;
};

const aboutMeWords =
    "I am a passionate full-stack web developer with expertise in creating attractive, user-friendly websites. Specializing in clean, responsive designs using HTML, CSS, Tailwind, JavaScript, and React. Proficient in Next.js, Node.js, Express.js, and MongoDB. Eager to enhance your team – let's connect! Email me or use the provided information.".split(
        "",
    );
const aboutMeExt = "";

const HeroSection: React.FC<Props> = ({ setShowHero, setRevealUnderneath }) => {
    const [hoveringEnter, setHoveringEnter] = useState(false);
    const [aboutMe, setAboutMe] = useState("");

    useEffect(() => {
        (async () => {
            let buf = "";
            await new Promise((r) => setTimeout(r, 100));
            for (let i = 0; i < aboutMeWords.length; i++) {
                buf += aboutMeWords[i];
                await new Promise((r) => setTimeout(r, 5));
                setAboutMe(buf);
            }
            setAboutMe(buf + aboutMeExt);
        })();
    }, []);

    const handleShowDetails = () => setShowHero(false);

    return (
        <div className="w-full h-full p-6 flex flex-col justify-center max-w-4xl mx-auto gap-10 lg:py-20 xxl:py-0 overflow-y-auto">
            <div className="w-full flex flex-col mx-auto justify-center items-center gap-3 lg:gap-6 relative lg:pt-20 xxl:pt-0">
                <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] overflow-hidden flex items-center justify-center rounded-full">
                    <img src="/me.png" className="object-cover" />
                </div>
                <h1 className="text-slate-300 font-bold text-4xl sm:text-4xl md:text-5xl selection:bg-transparent selection:text-primary-400">
                    {"Mahabub Ahmed".split("").map((str, i) => (
                        <AnimatedText
                            key={"first-name-" + str + i}
                            str={str}
                            idx={i}
                        />
                    ))}
                </h1>
                <h4 className="text-primary-400 font-mono text-2xl md:text-3xl font-semibold -mt-1">
                    Full-Stack Developer
                </h4>
                <p className="prose prose-invert prose-slate max-w-full relative text-sm md:text-lg text-center">
                    <span className="absolute">
                        <span
                            dangerouslySetInnerHTML={{ __html: aboutMe }}
                        ></span>
                        <span className="inline-block mb-[-5px] h-5 w-1 bg-primary-400 cursor-blink"></span>
                    </span>
                    <span
                        className="opacity-0 pointer-events-none invisible"
                        dangerouslySetInnerHTML={{
                            __html: aboutMeWords.join("") + aboutMeExt,
                        }}
                    ></span>
                </p>
                <ContactButton />
            </div>

            <div className="flex flex-col items-center gap-4">
                <button
                    onClick={handleShowDetails}
                    className="z-[10] text-slate-300 rounded-full py-4 h-[50px] w-full lg:hover:text-primary-400 lg:hover:border-primary-400 transition-colors duration-300 flex flex-row items-center overflow-hidden relative animate-pulse justify-center"
                >
                    <div className="absolute left-0 right-0 h-0 border border-dashed border-slate-600"></div>
                    <p
                        onMouseEnter={() => {
                            setHoveringEnter(true);
                            setRevealUnderneath(true);
                        }}
                        onMouseLeave={() => {
                            setHoveringEnter(false);
                            setRevealUnderneath(false);
                        }}
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-900 flex justify-center
                     gap-2 items-center min-w-max px-4 py-2 rounded-lg font-mono font-bold lg:text-lg"
                    >
                        <span
                            className={`${
                                hoveringEnter
                                    ? "text-primary-200"
                                    : "text-primary-400"
                            }`}
                        >
                            Enter Portfolio
                        </span>
                        <GiClick
                            className={`text-lg text-slate-300 lg:hidden lg:invisible`}
                        />
                        <TbClick
                            className={`text-xl text-slate-300 hidden invisible lg:visible lg:inline transition-transform ${
                                hoveringEnter ? "scale-150" : "scale-100"
                            }`}
                        />
                    </p>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
