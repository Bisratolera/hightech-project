import React from 'react';
import { Fade } from 'react-awesome-reveal';
import {Toaster, toast} from "react-hot-toast"

const Registeration = () => {
  function showToast() {
    toast.success("it works :)");
  }
  return (
  <Fade direction="left" cascade triggerOnce>
    <Toaster />
    <form className="flex flex-col gap-3 items-center" onSubmit={showToast}>
      {/* student's image with its name */}
      <div className="flex flex-col gap-3 py-4">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>       
      <label>Jhon Doe</label>
      </div>
      {/* main form elements*/}
      <div className="flex flex-row gap-5">
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">full name</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      {/*  */}
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">stream</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
        <div className="flex flex-col gap-3"></div>
      </div>
      {/* form element next */}
      <div className="flex flex-row gap-5">
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">division</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      {/*  */}
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">idno</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
        <div className="flex flex-col gap-3"></div>
      </div>
      {/*  */}
      <div className="flex flex-row gap-5">
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">gender</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      {/*  */}
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">subcity</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
        <div className="flex flex-col gap-3"></div>
      </div>

      <div className="flex flex-row gap-5">
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">woreda</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
      {/*  */}
      <label className="form-control w-full max-w-xs">
      <div className="label">
     <span className="label-text">phone no</span>
      </div>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
        <div className="flex flex-col gap-3"></div>
      </div>


   
      <div className="flex flex-row gap-7">
          <button type="submit" className='btn' >Register</button>
          <button type="reset" className='btn btn-error'>Cancel</button>
        </div>
    </form>
  </Fade>
  );
};

export default Registeration;
