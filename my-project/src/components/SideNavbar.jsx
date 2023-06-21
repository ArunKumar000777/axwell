import React from "react";
import performatrix from "../assets/Performatrix.svg";
import Profile from "../assets/Profile.svg";
import Projects from "../assets/Projects.svg";
import team from "../assets/Team.svg";
import task from "../assets/Task.svg";
import Rexavlogo from "../assets/Rexav Logo.png";

const SideNavbar = () => {
    return (
        <div className=" w-[400px] h-screen ">
            <div className="h-full w-full flex items-center">
                <div className="bg-[#b768f4] w-20  h-3/4 rounded-r-lg">
                    <div className="flex flex-col gap-4 ml-14 mt-10">
                        <div className="w-14 h-14 bg-[#e7ecff] rounded-lg cursor-pointer flex justify-center items-center">
                            <img src={Rexavlogo} alt="" className="w-12 h-12 p-2" />
                        </div>
                        <div className="w-14 h-14 bg-[#e7ecff] rounded-lg cursor-pointer flex justify-center items-center">
                            <img src={team} alt="" className="w-12 h-12 p-2" />
                        </div>
                        <div className="w-14 h-14 bg-[#e7ecff] rounded-lg cursor-pointer flex justify-center items-center">
                            <img src={performatrix} alt="" className="w-12 h-12 p-2" />
                        </div>
                        <div className="w-14 h-14 bg-[#e7ecff] rounded-lg cursor-pointer flex justify-center items-center">
                            <img src={Projects} alt="" className="w-12 h-12 p-2" />
                        </div>
                        <div className="w-14 h-14 bg-[#482774] rounded-lg cursor-pointer flex justify-center items-center">
                            <img src={task} alt="" className="w-12 h-12 p-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideNavbar;
