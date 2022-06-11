import React from "react";
import {
  CheckCircleIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/solid";

function About() {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl text-gray-500 py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 px-5">
          <div
            className="border  
          border-slate-200 shadow-xl p-5 rounded-xl py-8
          hover:shadow-2xl flex justify-between overflow-hidden"
          >
            <div>
              <p className="text-indigo-600 font-bold text-4xl  ">100%</p>
              <p className="text-slate-500 py-2 text-2xl flex items-center gap-2">
                Completion
              </p>
            </div>
            <div>
              <CheckCircleIcon className="h-full text-green-600" />
            </div>
          </div>
          <div
            className="border 
          border-slate-200 shadow-xl p-5 rounded-xl py-8
          hover:shadow-2xl flex justify-between overflow-hidden"
          >
            <div>
              <p className="text-indigo-600 font-bold text-4xl ">24/7</p>
              <p className="text-slate-500 py-2 text-2xl flex items-center gap-2">
                Delivery
              </p>
            </div>
            <div>
              <TruckIcon className="h-full text-red-400" />
            </div>
          </div>
          <div
            className="border 
          border-slate-200 shadow-xl p-5 rounded-xl py-8
          hover:shadow-2xl flex justify-between overflow-hidden"
          >
            <div>
              <p className="text-indigo-600 font-bold text-4xl">100K</p>
              <p className="text-slate-500 py-2 text-2xl flex items-center gap-2">
                Transactions
              </p>
            </div>
            <div>
              <CreditCardIcon className="h-full text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
