import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const UpdateModal = ({storeData,refetch}) => {
 
    const {
        register,
        handleSubmit,
      } = useForm();
      const handelUpdate=(data)=>{
        const userInfo={
          name:data.name,
          phone:data.number,
          email:data.email,
          hobbies:data.hobbies
         }
         fetch(`http://localhost:5000/users/${storeData._id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(userInfo) 
         })
        .then(res=>res.json())
        .then(data=>{
          if(data.modifiedCount){
            toast('Update Successfully')
            refetch()
          }
        })
      }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">{''}</h3>

                <form onSubmit={handleSubmit(handelUpdate)}>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                   defaultValue={storeData?.name}
                    {...register("name", { required: "Name is a required" })}
                    className="input input-bordered w-full "
                  />
                  
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={storeData?.phone}
                    {...register("number", { required: "Number is a required" })}
                    className="input input-bordered w-full "
                  />
                  
                </div>
                
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                   defaultValue={storeData?.email}
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="input input-bordered w-full"
                  />
                  
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Hobbies</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={storeData?.hobbies}
                    {...register("hobbies", { required: "Hobbies is a required" })}
                    className="input input-bordered w-full"
                  />
                  
                </div>
                <input
                  className="btn mt-5 py-4 btn-accent w-full"
                  value="Update Data"
                  type="submit"
                />
              </form>
            
          </div>
        </div>
      </>
    );
};

export default UpdateModal;