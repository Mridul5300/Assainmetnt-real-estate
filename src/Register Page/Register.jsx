
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../Auth Provider/AuthProvider';
import { useForm } from 'react-hook-form';



const Register = () => {
     const {creatUser} = useContext(AuthContex);

     
     const {
          register,
          handleSubmit,
          
          formState: { errors },
        } = useForm()
        const onSubmit = data => {
          const {email,Password}=data
          creatUser(email,Password)
          .then(result => {
               console.log(result);
          })
     };
     return (
          <div>
               <div>
                    <div className="hero min-h-screen bg-base-200">
                         <div className="hero-content flex-col">
                              <div className="text-centert">
                                   <h1 className="text-5xl font-bold">Register Now</h1>
                              </div>
                              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                   <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Full Name</span>
                                             </label>
                                             <input type="text" placeholder="Full Name" className="input input-bordered"
                                              {...register("fullName", { required: true })} 
                                             />
                                        {errors.fullName && <span className='text-red-400'>This field is required</span>}

                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="text" placeholder="email" className="input input-bordered"
                                              {...register("email", { required: true })} 
                                             />
                                             {errors.email && <span className='text-red-400'>This field is required</span>}
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Image Url</span>
                                             </label>
                                             <input type="text" placeholder="Image Url" className="input input-bordered"
                                              {...register("image")} 
                                             />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Password</span>
                                             </label>
                                             <input type="password" placeholder="password" className="input input-bordered"
                                              {...register("Password", { required: true })} 
                                             />
                                             {errors.Password && <span className='text-red-400'>This field is required</span>}

                                             <div className="form-control mt-4">
                                             <button className="btn btn-primary">Register</button>
                                        </div>

                                             <label className="label">
                                             <p className="mx-5 mb-2">Have an acount?<Link to={"/login"}>
                                              <button className="btn btn-link">Please Log In</button>
                                             </Link></p>
                                             </label>
                                        </div>
                                   </form>
                                   
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;