import React from 'react';
import { Fade } from 'react-awesome-reveal';


const Registeration = () => {
  return (
  <Fade direction="left" cascade triggerOnce>
    <div className="join flex flex-col items-start w-full justify-center gap-4 pl-4">
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="fullName" className="w-1/5 text-right">
          Full Name:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Full Name"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="stream" className="w-1/5 text-right">
          Stream:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Stream"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="division" className="w-1/5 text-right">
          Division:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Division"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="idNo" className="w-1/5 text-right">
          ID Number:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="ID Number"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="sex" className="w-1/5 text-right">
          Sex:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Sex"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="sc" className="w-1/5 text-right">
          Sub City:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Sub City"
        />
      </div>
      <Fade direction='right' cascade triggerOnce>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="woreda" className="w-1/5 text-right">
          Woreda:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Woreda"
        />
      </div>
      </Fade>
      <Fade direction="right" cascade triggerOnce>
      <div className="flex flex-row gap-2 items-center justify-center">
        <label htmlFor="telNo" className="w-1/5 text-right">
          Tel No:
        </label>
        <input
          className="input input-bordered w-4/5 h-12"
          placeholder="Tel No"
        />
      </div>
    </Fade>
      <button className="btn btn-active btn-ghost relative justify-center items-center rounded-square border-inherit bg-orange-600 w-100 h-12">
        Submit
      </button>
    </div>
  </Fade>
  );
};

export default Registeration;
