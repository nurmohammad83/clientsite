import { useQuery } from '@tanstack/react-query';
import React, {  useState } from 'react';
import { toast } from 'react-hot-toast';
import UpdateModal from './UpdateModal';

const Table = () => {
  const [storeData, setStoreData]=useState()


  const {data:userInfo,refetch}=useQuery({
    queryKey:['userFrom'],
    queryFn:async ()=>{
      const res = await fetch('https://servertask.vercel.app/userInfo')
      const data = await res.json()
      return data;
    }
  })
  const handelDeleteData=(id)=>{
    fetch(`https://servertask.vercel.app/userInfo/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
        toast('Delete Successfully')
      }
      refetch()
    })
  }
  const handelUpdate =(user)=>{
    setStoreData(user)
  }

    return (
      <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Select
              </th> 
            <th>ID</th> 
            <th>Name</th> 
            <th>Phone</th> 
            <th>Email</th> 
            <th>Hobbies</th> 
            <th>Update/Delete</th>
          </tr>
        </thead> 
        <tbody>
          {
            userInfo?.map((user,i)=>(
              <tr key={user._id}>
              <th>
              <label>
              <input type="checkbox" className="checkbox" />
            </label>
                </th> 
              <td>{i+1}</td> 
              <td>{user.name}</td> 
              <td>{user.phone}</td> 
              <td>{user.email}</td> 
              <td>{user.hobbies}</td> 
              <td><label
              htmlFor="booking-modal"
              onClick={()=>handelUpdate(user)}
              className='p-2 mr-1 bg-orange-500 text-white font-semibold'
              
            >
             update
            </label>
                <button onClick={()=>handelDeleteData(user._id)} className='p-2 bg-blue-500 text-white font-semibold'>
                Delete
                </button>
                </td>
            </tr>
            ))
          }
          
        </tbody> 
      </table>
      <UpdateModal
      refetch={refetch}
      storeData={storeData}
      />
    </div>
    );
};

export default Table;