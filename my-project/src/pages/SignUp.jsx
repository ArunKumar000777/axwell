import React from "react";
import Rexavlogo from "../assets/Rexav Logo.png";
import eyeOff from "../assets/Eye off.svg";

const SignUp = () => {
    return (
        <section className="min-h-screen w-screen  bg-black flex justify-center py-20 ">
            <img src={Rexavlogo} alt="" className="w-16 h-16 absolute top-6 left-6" />
            <div className="w-1/2 h-[400px] absolute bottom-0 right-0">
                <div className="w-full h-full bg-login-bg bg-cover bg-center "></div>
            </div>
            {/* <img src={logo} alt="" /> */}
            <form className="w-[400px] px-10 relative z-30">
                <h1 className="text-2xl text-white text-center">Sign up for a Rexav</h1>
                <h1 className="text-2xl text-white text-center mb-9">Accont</h1>
                <div className="flex flex-col ">
                    <label htmlFor="" className="text-white">
                        What's your name?
                    </label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="text-white">
                        What's your email?
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="text-white">
                        What's your phone number?
                    </label>
                    <input
                        type="number"
                        placeholder=" +91 Phone"
                        className="border border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                </div>
                <div className="flex flex-col mt-5 relative">
                    <label htmlFor="password" className="text-white">
                        Create Password
                    </label>
                    <input
                        id="passsword"
                        type="password"
                        placeholder="Password"
                        className="border relative border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                    <img src={eyeOff} alt="" className="w-4 h-4 absolute top-10 right-5" />
                </div>
                <div className="flex flex-col mt-5 relative">
                    <label htmlFor="password" className="text-white">
                        Confirm password
                    </label>
                    <input
                        id="passsword"
                        type="password"
                        placeholder="Password"
                        className="border relative border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                    <img src={eyeOff} alt="" className="w-4 h-4 absolute top-10 right-5" />
                </div>

                <button className="bg-white py-1 w-full mt-7 mb-5 cursor-pointer">Sign up</button>
                <hr className="bg-gray-400 mt-8" />
                <p className="text-white text-xs text-center mt-5">
                    Have an account? <span className="underline font-semibold">Login</span>
                </p>
            </form>
        </section>
    );
};

export default SignUp;
