import React from 'react'

export const Hero = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className="grid grid-cols-2 gap-6 ">
          <div className="">
          <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
          </div>
          <div className="">
          <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          </div>
        </div>
    </div>
  )
}
