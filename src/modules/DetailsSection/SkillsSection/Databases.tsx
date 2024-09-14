import React from "react";

type DB = {
    name: string;
    description: string;
};

const dbs: DB[] = [
    { name: "MongoDB", description: "" },
    { name: "PostgreSQL", description: "" },
];

const Databases: React.FC = () => {
    return (
        <div className="w-full prose max-w-full prose-h4:text-slate-300 prose-h4:font-medium prose-h4:my-2 text-slate-400 prose-strong:text-slate-400">
            <h4>Databases</h4>
            <div className="w-full flex flex-row flex-wrap lg:grid lg:grid-cols-3 xl:grid-cols-6 items-center justify-stretch gap-2">
                {dbs.map((db) => (
                    <div
                        key={`skills-databases-${db.name}`}
                        className="flex-grow rounded-lg flex justify-center items-center h-[50px] bg-slate-800 px-2 cursor-pointer lg:hover:shadow-[0_0_0_2px] lg:hover:shadow-primary-400 transition-[box-shadow] duration-300"
                    >
                        {db.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Databases;
