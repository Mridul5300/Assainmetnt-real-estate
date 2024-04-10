import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../Auth Provider/AuthProvider";
import { useForm } from "react-hook-form";


const LogIn = () => {

  const {signInUser}= useContext(AuthContex)


       
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit = data => {
    const {email,Password}=data
    signInUser(email,Password)
    .then(result => {
         console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })
};
     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-centert">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"
          {...register("email", { required: true })}
          />
          {errors.email && <span className='text-red-400'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("Password", { required: true })}
          />
          {errors.Password && <span className='text-red-400'>This field is required</span>}
          <label className="label">
          <p className="mx-5 mb-2">New hear,please complete<Link to={"/register"}>
         <button className="btn btn-link">Registation</button>
         </Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
          </div>
     );
};

export default LogIn;
;