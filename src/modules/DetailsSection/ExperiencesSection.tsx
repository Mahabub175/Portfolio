import React from "react";
import { FaArrowRight, FaMinus } from "react-icons/fa";
import AnimatedText from "../../components/AnimatedText";
import { experienceData } from "../../assets/data/experienceData";

const ExperiencesSection: React.FC = () => {
    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 lg:ml-[350px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>
                    {"Experiences".split("").map((l, i) => (
                        <AnimatedText
                            key={`experiences-${l}-${i}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <small className="text-slate-400 text-sm">
                    Started my web development journey from January 2020
                </small>
            </div>

            <br />
            <br />

            {experienceData?.map((d) => (
                <div
                    key={d?.companyName}
                    className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400 xxl:w-5/6"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                        <small className="flex flex-row items-center gap-1 text-slate-500 font-mono text-sm">
                            {d?.type}
                        </small>
                        <span className="hidden lg:block">|</span>
                        <small className="flex flex-row items-center gap-1 text-slate-500 font-mono text-sm">
                            {d?.from} <FaMinus className="text-xl" /> {d?.till}
                        </small>
                    </div>
                    <div className="text-primary-400 text-2xl font-bold mt-2">
                        {d?.position}
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4 my-5 group hover:shadow-[0_0_0_2px] transition-[box-shadow] duration-300">
                        <a
                            href={d?.companyUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <h4 className="flex flex-col md:flex-row md:items-center gap-1 group-hover:underline">
                                <span className="font-bold text-xl lg:text-2xl">
                                    {d?.companyName}
                                </span>
                                <span className="rounded-full bg-slate-300 size-1.5 mx-1 hidden md:block" />
                                <span className="font-normal text-xs lg:text-sm">
                                    {d?.companyLocation}
                                </span>
                                <FaArrowRight className="text-xs -rotate-45 hidden md:block" />
                            </h4>
                            <small className="text-slate-400 hidden md:block">
                                {d?.companyDescription}
                            </small>
                        </a>
                    </div>

                    <ul className="text-slate-400 text-[15px] lg:text-base">
                        {d?.description.map((desc) => (
                            <li
                                key={desc}
                                dangerouslySetInnerHTML={{ __html: desc }}
                            />
                        ))}
                    </ul>
                    <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2">
                        {d?.techStack.map((t) => (
                            <span
                                key={`tech-stack-${t}`}
                                className="inline-block text-xs px-3 py-1 rounded-full bg-slate-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <br />
                    <br />
                </div>
            ))}
        </section>
    );
};

export default ExperiencesSection;
