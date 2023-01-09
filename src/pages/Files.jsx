import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import fileimage from '../img/video.png'
import { useAddFileMutation, useDeleteFileMutation, useGetFileQuery } from '../services/convinApi';
import pen from '../img/pencil-icon.png'


const Files = () => {

  const { data, error, isLoading } = useGetFileQuery();
  const [addFile] = useAddFileMutation();
  const [deleteFile] = useDeleteFileMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);


  const handleCreateFile = () => {
      setIsOpen(!isOpen);
  }

  const handleChange = () => {
    
  }

  const handleSubmitFile = () => {
    
  }

  const handleFile = () => {
    
  }

  const handleEdit = () => {
    
  }

  const handleEditChange = () => {
    
  }

  const handleCheckboxChange = () => {
    
  }

  return (
    <div className='w-screen h-screen'>
          <Navbar/>

          <div className='m-10 flex gap-20 h-[calc(100vh-100px)] items-start'>
              <ul className="menu bg-base-100 w-56 h-max p-2 rounded-box border-2">
                <li onClick={handleCreateFile}><a>Create a file</a></li>
                {isOpen &&
                  <>
                    <input type="text" placeholder="Enter file name" onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <input type="text" placeholder="Enter file link" onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <button className="btn btn-primary" onClick={handleSubmitFile}>Click to create</button>
                  </>
                }
                <li><a>Delete</a></li>
                <li><a>Move</a></li>
              </ul>

              <div className="form-control flex flex-row gap-20 flex-wrap m-10">
                {data && data?.map(items => 
                <label key={items.id} className="label cursor-pointer flex flex-col">
                    <img src={fileimage} alt="" className='label-text w-14' id={items.id} onClick={handleFile} />
                    <p className='w-20 overflow-hidden text-ellipsis'>{items.name}</p>
                    <button className="btn-xs btn-accent rounded-md m-2" id={items.id} onClick={handleEdit}>
                      <img src={pen} className='h-3 w-3'/>
                    </button>
                    {isOpenEdit &&
                      <>
                        <input type="text" placeholder="Enter bucket name" onChange={handleEditChange} className="input input-bordered input-primary w-full max-w-xs my-2" />
                        {/* <button className="btn btn-primary" onClick={handleSubmitBucket}>Click to create</button> */}
                      </>
                    }
                    <input type="checkbox"  className="checkbox" value={items.id} onChange={handleCheckboxChange} />
                </label>
                )}

              </div>

              {/* The button to open modal */}
              {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

              {/* Put this part before </body> tag */}
              {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                  <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
              </div> */}

            </div>

    </div>
  )
}

export default Files