import React from "react";

import notifiaction from "../assets/Notification.svg";
import profile from "../assets/Profile.svg";
import plus from "../assets/Plus.svg";
import Card from "../components/Card";
import SideNavbar from "../components/SideNavbar";
import waves from "../assets/Waves.png";

const Dashboard = () => {
    return (
        <section className="min-h-screen bg-dash-bg  bg-center bg-[#81a4fe] flex  bg-no-repeat">
            {/* left side nav */}
            <SideNavbar />
            {/* right side */}
            <div className="w-full h-full p-7 ">
                <div className="flex gap-4 justify-end">
                    <div className="w-10 h-10 border border-black flex justify-center items-center rounded-full">
                        <img src={notifiaction} alt="" />
                    </div>
                    <div className="flex h-10 border border-black rounded-full w-max  px-3 justify-center items-center">
                        <img src={profile} alt="" />
                        <span>Joyal</span>
                    </div>
                </div>
                <hr className="mt-9 mb-5" />
                {/* welcome box */}
                <div className="h-40 rounded-lg bg-white px-8 py-4">
                    <div className="h-full flex flex-col">
                        <h1 className="text-xl font-semibold">Welcome Joe,</h1>
                        <p className="text-sm mt-4">Track your work time by creating a New Task</p>
                        <button className="h-7 text-sm px-4 rounded-full cursor-pointer w-max bg-black text-white flex justify-center items-center gap-1 mt-6">
                            {" "}
                            <img src={plus} alt="" /> Task
                        </button>
                    </div>
                </div>
                {/* cards */}
                <div className="flex justify-between">
                    {Array.from({ length: 4 }).map((item) => {
                        return <Card />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
