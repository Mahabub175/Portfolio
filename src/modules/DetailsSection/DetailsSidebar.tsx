import React from "react";
import { startCase } from "lodash";
import { FaGithub, FaTimes } from "react-icons/fa";
import { homePageTabs } from "../../constants";

const DetailsSidebar: React.FC<{
    activeTab: string;
    showSidebar: boolean;
    setActiveTab: (v: string) => void;
    setShowSidebar: (v: boolean) => void;
}> = ({ activeTab, showSidebar, setActiveTab, setShowSidebar }) => {
    const handleActiveTabUpdate = (tab: string) => {
        setActiveTab(tab);
        setShowSidebar(false);
    };

    return (
        <aside
            className={`z-[100] fixed top-0 left-0 bottom-0 bg-slate-900 min-w-max w-4/6 lg:max-w-[300px] flex flex-col p-6 gap-2 transition-transform duration-300 overflow-y-auto font-display
    ${showSidebar ? "" : "-translate-x-full lg:translate-x-0"}`}
        >
            <div className="w-full flex items-center justify-between mb-4">
                <button onClick={() => window.location.reload()}>
                    <img
                        src="/logo.png"
                        alt="Mahabub Ahmed"
                        height={50}
                        width={70}
                    />
                </button>
                <button
                    onClick={() => setShowSidebar(false)}
                    className="p-2 rounded-lg text-slate-400 bg-slate-800/50 lg:hidden"
                >
                    <FaTimes />
                </button>
            </div>
            {Object.values(homePageTabs).map((t) => (
                <button
                    key={"homepage-sidebar-" + t}
                    onClick={() => handleActiveTabUpdate(t)}
                    className={`min-w-max w-full px-4 py-2 text-slate-400 text-left rounded-lg transition-colors duration-300
                    ${
                        activeTab === t
                            ? "bg-slate-800"
                            : " hover:bg-slate-800/50"
                    }`}
                >
                    {startCase(t)}
                </button>
            ))}
            <div className="mt-auto pt-6 flex items-center justify-between font-body">
                <small className="text-slate-300">
                    Built with <span className="font-semibold">React</span> &{" "}
                    <span className="font-semibold">TypeScript</span>
                </small>
                <a
                    href="https://github.com/Mahabub175/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-200 text-xl"
                >
                    <FaGithub />
                </a>
            </div>
        </aside>
    );
};

export default DetailsSidebar;
