import React from 'react'
import fileimage from '../img/video.png'

const Files = () => {
  return (
    <div className='w-screen h-screen flex'>
          <div className='border-2 border-stone-600 rounded-md p-5 h-max w-max flex flex-col m-10'>
              <div className='p-5'>Create a bucket</div>
              <div className='p-5'>Create a bucket</div>
              <div className='p-5'>Create a bucket</div>
              <div className='p-5'>Create a bucket</div>

          </div>

          <div className="form-control flex flex-row gap-20 flex-wrap m-10 h-max">

                <label className="label cursor-pointer flex flex-col">
                    <img src={fileimage} alt="" className='label-text w-14' />
                    <p>Name</p>
                    <input type="checkbox"  className="checkbox" />
                </label>
                <label className="label cursor-pointer flex flex-col">
                    <img src={fileimage} alt="" className='label-text w-14' />
                    <p>Name</p>
                    <input type="checkbox"  className="checkbox" />
                </label>
                <label className="label cursor-pointer flex flex-col">
                    <img src={fileimage} alt="" className='label-text w-14' />
                    <p>Name</p>
                    <input type="checkbox"  className="checkbox" />
                </label>
            </div>

            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn">open modal</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
              </div>
            </div>

    </div>
  )
}

export default Files