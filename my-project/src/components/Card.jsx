import React from "react";
import plus from "../assets/Plus.svg";
const Card = () => {
    return (
        <div className="w-56 bg-[#d9e4ff] h-[360px] p-5 rounded-lg mt-6">
            <h1 className="font-bold text-xl">Create a new Project</h1>
            <p className="text-sm mt-3">Every task is associated with a specific projecet, Lets start a project now.</p>
            <div className="mt-32 flex justify-end">
                <button className="py-2 text-sm  px-4 rounded-full cursor-pointer w-max bg-black text-white flex justify-center items-center gap-1 mt-6">
                    {" "}
                    <img src={plus} alt="" /> Project
                </button>
            </div>
        </div>
    );
};

export default Card;
