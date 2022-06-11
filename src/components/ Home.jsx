import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";
import homeBg from "../assets/cyber-bg.png";

function Home() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="text-5xl py-3 md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 my-4 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img src={homeBg} className="w-full" alt="Cloud Management" />
        </div>
      </div>
      <div
        className="absolute bottom-[5%] py-8 left-20
      md:min-w-[760px] mx-1 md:left-1/2 transform md:-translate-x-1/2 
      flex flex-col bg-zinc-200 border border-slate-300 rounded-xl 
      text-center shadow-xl"
      >
        <p>Data Services</p>
        <div className="flex justify-between flex-wrap px-4">
          <p className="flex px-4 py-2 text-slate-500">
            <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
          </p>
          <p className="flex px-4 py-2 text-slate-500">
            <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
