import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Auth Provider/AuthProvider";
import {  useNavigate } from "react-router-dom";

const Updateprofile = () => {
     const {upDateUser,user, setReload}=useContext(AuthContex) 

     const [name, setName]=useState('')
     const [photoURL, setPhotoURL]=useState('')
     console.log(photoURL);
     const Navi = useNavigate()

     const handleNameChange = (e) => {
          
          setName(e.target.value)
     }


     const handlePhotoURLChange = (e) => {
          
          setPhotoURL(e.target.value)
     }
     useEffect(() => {
        
          if (user) {
              setName(user.displayName || '');
              setPhotoURL(user.photoURL || '');
          }
      }, [user]); 

const handleSubmit = (e) => {
        e.preventDefault()
          upDateUser(name,photoURL)
          .then( result => {
               console.log(result)
              setPhotoURL()
              setReload(true)
               Navi("/");
          })
          .catch(error => {
               console.error(error)
          })
}
     return (
          <div>
               <div className='flex flex-col justify-center items-center mb-12'>


<div className="flex flex-col justify-center border-2 p-6 mt-3 w-3/6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">


    <h2 className="text-xl  font-bold textarea-success sm:text-2xl text-center my-4">My Profile</h2>
    {
        photoURL && <img src={photoURL} alt="" className="w-24 h-24 mx-auto rounded-full  aspect-square ring-2 ring-offset-4 ring-green-500" />
    }

    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
        <div className="my-2 space-y-1">

            <form onSubmit={handleSubmit} className='space-y-3'>

                <h2 className='text-center text-xl my-5   border-b-8 py-3'>{user ?.email}</h2>

                <div className='flex flex-col justify-center'>

                    <label className='text-left text-lg mb-1 font-semibold'>
                        Name:
                    </label>
                    <input type="text" className="input input-bordered border-2 w-full " placeholder="Name" value={name} onChange={handleNameChange} />
                </div>


                <div className='flex flex-col justify-center'>

                    <label className='text-left  text-lg mb-1 font-semibold'>
                        Photo URL:
                    </label>
                    <input type="text" className="input input-bordered   w-full border-2" placeholder="Photo url" value={photoURL} onChange={handlePhotoURLChange} />
                </div>

                <button type="submit" className="font-medium text-white w-full text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Save Changes</button>
            </form>
        </div>

    </div>
</div>
</div>
          </div>
     );
};

export default Updateprofile;