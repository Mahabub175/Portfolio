import React from "react";
import AnimatedText from "../../components/AnimatedText";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { projectsData } from "../../assets/data/projectData";

const ProjectsSection: React.FC = () => {
    return (
        <section className="w-full min-h-max flex flex-col justify-start items-start py-6 px-8 lg:ml-[350px] mt-[50px]">
            <div className="w-full prose max-w-full prose-h1:text-slate-300 prose-h1:font-bold">
                <h1>
                    {"Projects".split("").map((l, i) => (
                        <AnimatedText
                            key={`projects-header-${l}`}
                            str={l}
                            idx={i}
                        />
                    ))}
                </h1>
                <small className="text-slate-400 text-sm">
                    I like exploring and learning new. I always build projects
                    try out new tools and concepts.
                </small>
            </div>

            <br />
            <br />

            {projectsData?.map((d) => (
                <div
                    key={d.title}
                    className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-1 text-slate-400 prose-strong:text-slate-400 flex flex-col gap-2"
                >
                    <small className="flex flex-row items-center gap-1 text-slate-500 font-mono">
                        {d.projectType}
                    </small>
                    <h4 className="flex items-center gap-1 text-2xl">
                        {d.title}
                    </h4>
                    <p
                        dangerouslySetInnerHTML={{ __html: d.summary }}
                        className="my-2 lg:w-5/6"
                    />
                    <div className="w-full flex flex-row items-start justify-start flex-wrap gap-2">
                        {d.techStack.map((t) => (
                            <span
                                key={`tech-stack-${t}`}
                                className="inline-block text-xs px-3 py-1 rounded-full bg-slate-800"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                    <div className="w-full flex flex-row items-center gap-2 mt-4">
                        {d.githubLink && (
                            <a
                                href={d.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-slate-100 flex items-center gap-1 px-4 py-2 rounded-lg bg-primary-400 lg:hover:bg-transparent no-underline transition-colors duration-300 border border-primary-200 font-bold"
                            >
                                GitHub
                                <FaGithub className="text-base" />
                            </a>
                        )}
                        {d.liveLink && (
                            <a
                                href={d.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-primary-400 font-bold flex items-center gap-1 px-4 py-2 rounded-lg border border-primary-400 hover:bg-primary-400 hover:text-white lg:hover:border-primary-200 no-underline transition-colors duration-300"
                            >
                                Live link
                                <FaArrowRight className="text-sm -rotate-45" />
                            </a>
                        )}
                    </div>
                    <br />
                    <br />
                </div>
            ))}
        </section>
    );
};

export default ProjectsSection;
