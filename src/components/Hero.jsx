import React from 'react'
import { Fade } from 'react-awesome-reveal';
import About from '../pages/About';
export const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="flex items-center justify-between w-full h-full pr-20 gap-40 ">
        <div className="w-96 rounded-tr-[3rem] rounded-br-[3rem] h-30 bg-white shadow-xl">
          <div className='flex justify-center gap-10'>
            <img className='w-20 ' src="./public/images/image3.png" alt="" />
            <img className='w-auto ' src="./public/images/image4.png" alt="" />
          </div>
        </div>
        <div className="">
          <div className="card w-[29rem] bg-base-100 shadow-xl image-full">
            <img src="./public/images/image2.png" alt="" />
            <figure><img className='w-[100%]' src="./public/images/image2.png" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">wellcome to hightech student registration system</h2>
              <p>lorem epsum</p>
              <div className="card-actions justify-end">
                <button className="btn bg-slate-500 "><a href="/register">start register</a></button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
