import React from 'react'
import Navbar from '../components/Navbar'
import { useGetHistoryQuery } from '../services/convinApi';

const History = () => {

  const { data, error, isLoading } = useGetHistoryQuery();

  return (
    <div>
        <Navbar/>

        <div className="overflow-x-auto">
            <table className="table w-full">
              
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
                    <td>{items.timestamp}</td>
                 </tr>
                )}
                
                
              </tbody>
            </table>
</div>
    </div>
  )
}

export default History