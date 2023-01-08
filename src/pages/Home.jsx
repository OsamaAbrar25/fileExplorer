import React from 'react'
import bucket from '../img/bucket.png'

const Home = () => {
  return (
    <div className='w-screen h-screen'>
          
        <div className='m-10 flex gap-20 h-[calc(100vh-100px)] items-start'>
            
            <div className='border-2 border-stone-600 rounded-md p-5 h-max w-max flex flex-col'>
                  <div className='p-5'>Create a bucket</div>
                  <div className='p-5'>Delete a bucket</div>
                  <div className='p-5'>Create a file</div>
                  <div className='p-5'>Delete a file</div>

            </div>
            <div className="form-control flex flex-row gap-20 flex-wrap m-10">

                <label className="label cursor-pointer flex flex-col">
                    <img src={bucket} alt="" className='label-text w-14' />
                    <p>Name</p>
                    <input type="checkbox"  className="checkbox" />
                </label>
                <label className="label cursor-pointer flex flex-col">
                    <img src={bucket} alt="" className='label-text w-14' />
                    <p>Name</p>
                    <input type="checkbox"  className="checkbox" />
                </label>
                <label className="label cursor-pointer flex flex-col">
                    <img src={bucket} alt="" className='label-text w-14' />
                    <p>Name</p>
                    <input type="checkbox"  className="checkbox" />
                </label>
            </div>

        </div>
          
    </div>
  )
}

export default Home