import React from "react";

type Framework = {
    name: string;
    description: string;
};

const frameworks: Framework[] = [
    { name: "React.js", description: "" },
    { name: "Node.js", description: "" },
    { name: "Express.js", description: "" },
    { name: "Next.js", description: "" },
    { name: "Vue.js", description: "" },
    { name: "Nuxt.js", description: "" },
    { name: "Nest.js", description: "" },
    { name: "Mongoose", description: "" },
    { name: "Redux", description: "" },
    { name: "Tailwind", description: "" },
    { name: "Bootstrap", description: "" },
    { name: "Axios", description: "" },
    { name: "JWT", description: "" },
    { name: "SCSS", description: "" },
    { name: "Material Tailwind", description: "" },
    { name: "Material UI", description: "" },
    { name: "ShadCN", description: "" },
    { name: "Firebase", description: "" },
    { name: "Ant Design", description: "" },
    { name: "Next UI", description: "" },
    { name: "Prisma", description: "" },
    { name: "Socket.io", description: "" },
];

const Frameworks: React.FC = () => {
    return (
        <div className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400">
            <h4>Frameworks & Libraries</h4>
            <div className="w-full flex flex-row flex-wrap items-center justify-stretch gap-2 lg:grid lg:grid-cols-6">
                {frameworks.map((f) => (
                    <div
                        key={`skills-frameworks-${f.name}`}
                        className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300 text-center"
                    >
                        {f.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Frameworks;
