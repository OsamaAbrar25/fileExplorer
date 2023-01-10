import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import fileimage from '../img/video.png'
import { useAddFileMutation, useAddHistoryMutation, useDeleteFileMutation, useGetBucketQuery, useGetFileQuery, useUpdateFileMutation } from '../services/convinApi';
import pen from '../img/pencil-icon.png'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import Loader from '../components/Loader';
import bucketpng from '../img/bucket.png'


const Files = () => {

  const params = useParams();
  const { data, error, isLoading } = useGetFileQuery(params.id);
  const bucket = useGetBucketQuery();
  const [addFile] = useAddFileMutation();
  const [deleteFile] = useDeleteFileMutation();
  const [updateFile] = useUpdateFileMutation();
  const [addHistory] = useAddHistoryMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(null);
  const [isOpenMove, setIsOpenMove] = useState(false);
  const [checkedData, setCheckedData] = useState([]);
  const [url, setUrl] = useState('');

  let inputData = [];

  const handleCreateFile = () => {
      setIsOpen(!isOpen);
  }

  const handleSubmitFile = () => {
    addFile({name: `${inputData[0]}`,bucket: params.id, link: `${inputData[1]}`});
    setIsOpen(!isOpen);

  }

  function handleFile(items) {
    let timestamp2 = new Date().getTime();
    console.log({fileId: items.id, name: `${items.name}`, link: `${items.link}`, timestamp: timestamp2});
    if(items){
    addHistory({fileId: items.id, name: `${items.name}`, link: `${items.link}`, timestamp: timestamp2});
    setUrl(items.link)
    }
  }

  function handleEdit(id) {
    isOpenEdit === id ? setIsOpenEdit(null) :
      setIsOpenEdit(id);
  }

  function handleEditChange(id, e) {
    let text = e.target.value;
    if (e.code === "Enter" || e.code === "NumpadEnter" || e.keyCode === 13) {
      updateFile({ name: `${text}`, id: id });
      setIsOpenEdit(null);
    }
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if(checked) {
      setCheckedData([...checkedData, value]);
    } else {
      setCheckedData(checkedData.filter((e) => e !== value));
    }
    console.log(checkedData);
  }

  const handleDeleteFile = () => {
    checkedData?.map((id) => deleteFile({id}));

  }

  function handleMove(id2) {
      // updateFile({bucket: id});
      console.log(id2);
      checkedData?.map((id) => updateFile({id: id, bucket: id2}));
      setIsOpenMove(!isOpenMove);
  }

  return (
    <div className='w-screen h-screen'>
          <Navbar/>

          <div className='m-10 flex gap-20 h-[calc(100vh-100px)] items-start'>
              <ul className="menu bg-base-100 w-56 h-max p-2 rounded-box border-2">
                <li onClick={handleCreateFile}><a>Create a file</a></li>
                {isOpen &&
                  <>
                    <input type="text" placeholder="Enter file name" onChange={(e)=> inputData[0] = e.target.value} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <input type="text" placeholder="Enter file link" onChange={(e)=> inputData[1] = e.target.value} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    <button className="btn btn-primary" onClick={handleSubmitFile}>Click to create</button>
                  </>
                }
                <div className="tooltip tooltip-right" data-tip="Please select files you wish to delete">
                <li onClick={handleDeleteFile}><a>Delete</a></li>
                </div>

                <div className="tooltip tooltip-right" data-tip="Please select files you wish to move">
                <li onClick={()=>setIsOpenMove(!isOpenMove)}><a>Move to</a></li>
                </div>
                {isOpenMove && bucket.data && bucket.data?.map(items=> 
                  <div key={items.id} className='flex flex-col p-2'>
                  <p className='p-2 pl-4 hover:bg-purple-100 rounded-lg flex gap-2' onClick={()=>handleMove(items.id)}><img src={bucketpng} width="25px"/>{items.name}</p>
                </div>
                )}
                
              </ul>

              <div className="form-control flex flex-row gap-20 flex-wrap bg-slate-100 h-full w-full p-10">
                {isLoading && <div className='flex min-w-full min-h-full justify-center items-center '><Loader/></div>}
                {data && data?.map(items => 
                <label htmlFor="my-modal-3" key={items.id} className="label cursor-pointer flex flex-col h-max w-max">
                    <img src={fileimage} alt="" className='label-text w-14' id={items.id} onClick={() => handleFile(items)} />
                    <p className='w-20 overflow-hidden text-ellipsis text-center'>{items.name}</p>
                    <button className="btn-xs btn-accent rounded-md m-2" id={items.id} onClick={()=> handleEdit(items.id)}>
                      <img src={pen} className='h-3 w-3'/>
                    </button>

                    {isOpenEdit === items.id &&
                        <input type="text" placeholder="Enter bucket name" onKeyDown={(e) => handleEditChange(items.id, e)} className="input input-bordered input-primary w-full max-w-xs my-2" />
                    }
                    <input type="checkbox"  className="checkbox checkbox-primary" value={items.id} onChange={handleCheckboxChange} />

                    {/* Iframe */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* <iframe width="400" height="200" src={items.link} title="yo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        <ReactPlayer url={url} controls='true' width='400'/>
                      </div>
                    </div>
                </label>
                )}

              </div>

            </div>

    </div>
  )
}

export default Files