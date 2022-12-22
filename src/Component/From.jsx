import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const From = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
      } = useForm();
      const handelDataCreate = (data) => {
       const userInfo={
        name:data.name,
        phone:data.number,
        email:data.email,
        hobbies:data.hobbies
       }
       fetch(`http://localhost:5000/userdata`, {
			method:'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(userInfo),

		})
        .then(res=>res.json())
		.then(data=>{
			if(data.acknowledged){
				toast('Add Information')
                navigate('/')
			};
		})
      };
    return (
        <div className="h-[700px] mt-5 flex  justify-center  ">
        <div className="w-96 p-7 rounded-xl shadow-xl bg-white">
          <h3 className="text-xl text-center ">Data From</h3>
          <form onSubmit={handleSubmit(handelDataCreate)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is a required" })}
                className="input input-bordered w-full max-w-xs"
              />
              
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="number"
                {...register("number", { required: "Number is a required" })}
                className="input input-bordered w-full max-w-xs"
              />
              
            </div>
            
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Hobbies</span>
              </label>
              <input
                type="text"
                {...register("hobbies", { required: "Hobbies is a required" })}
                className="input input-bordered w-full max-w-xs"
              />
              
            </div>
            <input
              className="btn mt-5 py-4 btn-accent w-full"
              value="Save Data"
              type="submit"
            />
          </form>
          
        </div>
      </div>
    );
};

export default From;