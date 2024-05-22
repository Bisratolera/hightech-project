import React from "react";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row w-full p-10 m-10 items-center">
        <div className="flex flex-row w-full h-full bg-white m-4 p-4  rounded-2xl">
          <div className="grid justify-between gap-10">
            <img className="w-20" src="/images/image3.png" alt="Image 3" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="card w-[29rem] bg-grey-800 shadow-xl image-full ">
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold text-center text-white">
                Welcome to HighTech Student Registration System
              </h2>
              <p className="text-white text-center mt-4">
                a place to grow and develop your skills
              </p>
              <div className="card-actions justify-center mt-6">
                <Link to="/register">
                  <button className="btn bg-slate-500 hover:bg-slate-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400">
                    Start Registration
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-full bg-white m-4 p-4 rounded-2xl">
          <div className="grid justify-between gap-10">
            <img className="w-auto" src="/images/image4.png" alt="Image 4" />
          </div>
        </div>
      </div>
    </div>
  );
};
