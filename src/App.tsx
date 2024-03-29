import React, { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import DetailsSection from "./modules/DetailsSection";
import { HeroSection } from "./modules";

const App: React.FC = () => {
    const [showHero, setShowHero] = useState(true);
    const [loading, setLoading] = useState(false);
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
                    className={`w-full max-w-full bg-gray-950 min-h-[100vh] overflow-hidden ${
                        showHero ? "max-h-[100vh]" : ""
                    }`}
                >
                    <DetailsSection />
                    <div
                        className={`z-[100] w-full fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-start items-start bg-gray-950 transition-transform duration-500 overflow-x-auto ${
                            showHero ? "" : "translate-x-full"
                        }`}
                    >
                        <HeroSection setShowHero={setShowHero} />
                    </div>
                </main>
            )}
        </>
    );
};

export default App;
