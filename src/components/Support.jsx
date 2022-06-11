import React from "react";
import support from "../assets/support.jpg";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

function Support() {
  return (
    <div className="w-full h-screen mt-24 relative">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={support}
          className="w-full h-full object-cover mix-blend-overlay"
          alt="/"
        />
      </div>
      <div className=" max-w-[1240px] text-white relative py-10 mx-auto">
        <div className="text-center px-4 py-12">
          <h2 className=" text-3xl text-slate-300 uppercase">Support</h2>
          <p className="text-5xl font-bold py-6">Finding the right team</p>
          <p className="py-4 text-3xl text-left text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repudiandae veritatis ratione error tenetur, voluptates architecto
            possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo
            et cum vel?
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-x-8 gap-y-16 px-4 pt-12 lg:grid-cols-3 sm:pt-20 text-black">
          <div className="bg-white rounded-2xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="bg-indigo-600 w-16 p-4 text-white rounded-lg mt-[-4rem]" />
              <p className="text-2xl font-bold py-6">Sales</p>
              <p className="text-slate-500 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-indigo-100/60 px-8 py-4 rounded-b-2xl">
              <p className="flex text-indigo-600 gap-3 items-center">
                Contact Us <ArrowSmRightIcon className="h-6" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="bg-indigo-600 w-16 p-4 text-white rounded-lg -mt-16" />
              <p className="text-2xl font-bold py-6">Technical Support</p>
              <p className="text-slate-500 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-indigo-100/60 px-8 py-4 rounded-b-2xl">
              <p className="flex text-indigo-600 gap-3 items-center">
                Contact Us <ArrowSmRightIcon className="h-6" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl">
            <div className="p-8">
              <ChipIcon className="bg-indigo-600 w-16 p-4 text-white rounded-lg -mt-16" />
              <p className="text-2xl font-bold py-6">Media Inquiries</p>
              <p className="text-slate-500 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi provident iure placeat blanditiis ea sint earum hic
                iste quibusdam exercitationem.
              </p>
            </div>
            <div className="bg-indigo-100/60 px-8 py-4 rounded-b-2xl">
              <p className="flex text-indigo-600 gap-3 items-center">
                Contact Us <ArrowSmRightIcon className="h-6" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
