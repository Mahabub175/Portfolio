import React from "react";
import logo from "/logo.png";
import { PropagateLoader } from "react-spinners";

const PreLoader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div>
                <img src={logo} alt="Logo" className="animate-pulse" />
            </div>
            <PropagateLoader size={25} color="#0070FF" />
        </div>
    );
};

export default PreLoader;
