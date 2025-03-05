import React, { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import DetailsSection from "./modules/DetailsSection";
import { HeroSection } from "./modules";

const App: React.FC = () => {
    const [showHero, setShowHero] = useState(true);
    const [loading, setLoading] = useState(false);

    const [revealUnderneath, setRevealUnderneath] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showHero ? "hidden" : "auto";
    }, [showHero]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <PreLoader />
            ) : (
                <main
                    className={`w-full min-h-max flex flex-col justify-start items-start 2xl:items-center 
            ${showHero ? "max-h-[100vh]" : ""} 
            `}
                >
                    <DetailsSection />
                    {
                        <div
                            className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start transition-[transform,background-color] duration-500 ease-in-out bg-gray-950 
                        ${revealUnderneath ? "md:bg-gray-950/60" : ""} 
                        ${showHero ? "backdrop-blur-sm" : "translate-x-full"}`}
                        >
                            <HeroSection
                                setShowHero={setShowHero}
                                setRevealUnderneath={setRevealUnderneath}
                            />
                        </div>
                    }
                </main>
            )}
        </>
    );
};

export default App;
