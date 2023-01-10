import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import bucket from '../img/bucket.png'
import pen from '../img/pencil-icon.png'
import Loader from '../components/Loader'

import { useAddBucketMutation, useDeleteBucketMutation, useGetBucketQuery, useUpdateBucketMutation } from '../services/convinApi'

const Home = () => {

  const { data, error, isLoading } = useGetBucketQuery();
  const [addBucket] = useAddBucketMutation();
  const [deleteBucket] = useDeleteBucketMutation();
  const [updateBucket] = useUpdateBucketMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(null);
  const [checkedData, setCheckedData] = useState([]);
  const navigate = useNavigate();
  let inputData;

  const handleCreateBucket = () => {
    // setInputData(event.target.value);
    setIsOpen(!isOpen);
  }

  const handleSubmitBucket = () => {
    addBucket({ name: `${inputData}` });
    setIsOpen(!isOpen);

  }

  const handleDeleteBucket = () => {
    checkedData?.map((id) => deleteBucket({ id }));

  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCheckedData([...checkedData, value]);
    } else {
      setCheckedData(checkedData.filter((e) => e !== value));
    }
    console.log(checkedData);

  }
  console.log(isLoading);
  // const handleEdit = (e) => {
  //     console.log(e.target.id);
  //     setIsOpenEdit(e.target.id);

  // }

  function handleEdit(id) {
    isOpenEdit === id ? setIsOpenEdit(null) :
      setIsOpenEdit(id);

  }

  function handleEditChange(id, e) {
    let text = e.target.value;
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      updateBucket({ name: `${text}`, id: id });
      setIsOpenEdit(null);
    }
  }

  const handleBucket = (e) => {
    navigate(`bucket/${e.target.id}`);
  }

  return (
    <div className='w-screen h-screen'>
      <Navbar />

      <div className='m-10 flex gap-20 h-[calc(100vh-100px)] items-start'>


        <ul className="menu bg-base-100 w-56 p-2 rounded-box border-2">
          <li className="menu-title">
            <span>Bucket</span>
          </li>
          <li onClick={handleCreateBucket}><a>Create</a></li>
          {isOpen &&
            <>
              <input type="text" placeholder="Enter bucket name" onChange={(e) => inputData = e.target.value} className="input input-bordered input-primary w-full max-w-xs my-2" />
              <button className="btn btn-primary" onClick={handleSubmitBucket}>Click to create</button>
            </>
          }
          <li onClick={handleDeleteBucket}><a>Delete</a></li>
        </ul>

        <div className="form-control flex flex-row gap-20 flex-wrap bg-slate-100 h-full w-full p-10">
          {isLoading && <div className='flex min-w-full min-h-full justify-center items-center '><Loader/></div>}
          {data && data?.map(items =>
            <label key={items.id} className="label cursor-pointer flex flex-col h-max w-max">
              <img src={bucket} alt="" className='label-text w-14' id={items.id} onClick={handleBucket} />
              <p className='w-20 overflow-hidden text-ellipsis text-center'>{items.name}</p>
              <button className="btn-xs btn-accent rounded-md m-2" id={items.id} onClick={() => handleEdit(items.id)}>
                <img src={pen} className='h-3 w-3' />
              </button>
              {isOpenEdit === items.id &&
                <>
                  <input type="text" placeholder="Enter bucket name" onKeyDown={(e) => handleEditChange(items.id, e)} className="input input-bordered input-primary w-full max-w-xs my-2" />
                </>
              }
              <input type="checkbox" className="checkbox" value={items.id} onChange={handleCheckboxChange} />
            </label>
          )}
        </div>

      </div>
      <div>{isLoading && <Loader/>}</div>

    </div>
  )
}

export default Home