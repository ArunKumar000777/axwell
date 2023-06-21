import React from "react";
import logo from "../assets/3D logo.png";
import Rexavlogo from "../assets/Rexav Logo.png";
import eyeOff from "../assets/Eye off.svg";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="h-screen w-screen  bg-black flex justify-center pt-20">
            <img src={Rexavlogo} alt="" className="w-16 h-16 absolute top-6 left-6" />
            <div className="w-2/3 h-[400px] bg-login-bg bg-cover bg-center absolute bottom-0 right-0"></div>
            {/* <img src={logo} alt="" /> */}
            <form className="w-[400px] px-10 relative z-30">
                <h1 className="text-2xl text-white text-center">Log in to Rexav</h1>
                <h1 className="text-2xl text-white text-center mb-9">Dashboard</h1>
                <div className="flex flex-col ">
                    <label htmlFor="" className="text-white">
                        Email Address
                    </label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="border border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                </div>
                <div className="flex flex-col mt-5 relative">
                    <label htmlFor="password" className="text-white">
                        Password
                    </label>
                    <input
                        id="passsword"
                        type="password"
                        placeholder="Password"
                        className="border relative border-gray-300 bg-transparent h-9 px-3 mt-2"
                    />
                    <img src={eyeOff} alt="" className="w-4 h-4 absolute top-10 right-5" />
                </div>
                <div className="flex mt-3">
                    <div>icon</div>
                    <span className="text-white text-sm ">Remember me</span>
                </div>
                <button className="bg-white py-1 w-full mt-7 mb-5 cursor-pointer">Login</button>
                <span className="text-white text-sm underline text-center block">Forgot Password</span>
                <hr className="bg-gray-400 mt-8" />
                <p className="text-white text-xs text-center mt-5">
                    Don't have an account?
                    <Link to={"/sign-up"}>
                        <span className="underline text-base ml-2"> Sign up for Rexav</span>
                    </Link>
                </p>
            </form>
        </section>
    );
};

export default Login;
