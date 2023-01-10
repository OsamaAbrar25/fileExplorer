import React from 'react'
import Navbar from '../components/Navbar'
import { useGetHistoryQuery } from '../services/convinApi';
import moment from 'moment';
import Loader from '../components/Loader';

const History = () => {

  const { data, error, isLoading } = useGetHistoryQuery();

  return (
    <div className='h-screen w-screen'>
        <Navbar/>
        {isLoading && <div className='flex min-w-full min-h-full justify-center items-center absolute top-0 z-50 '><Loader/></div>}

        <div className="overflow-x-auto">
            <table className="table min-w-full min-h-full">
              
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Link</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                
                {data && data?.map(
                  (items) => 
                  <tr key={items.id}>
                    <th>{items.id}</th>
                    <td>{items.name}</td>
                    <td>{items.link}</td>
                    <td>{moment(items.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</td>
                 </tr>
                )}
                
                
              </tbody>
            </table>
</div>
    </div>
  )
}

export default History