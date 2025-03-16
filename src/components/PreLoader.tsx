import logo from "/logo.png";
import { PropagateLoader } from "react-spinners";

const PreLoader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen -mt-10">
            <div>
                <img
                    src={logo}
                    alt="Logo"
                    className="animate-pulse lg:w-full w-[150px] object-cover h-[150px] lg:h-full mx-auto ml-2.5 lg:ml-0"
                />
            </div>
            <PropagateLoader size={25} color="#0070FF" />
        </div>
    );
};

export default PreLoader;
