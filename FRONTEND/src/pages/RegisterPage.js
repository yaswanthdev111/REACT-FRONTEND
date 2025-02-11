import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios'
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    password : "",
    profile_pic : ""
  })
  const [uploadPhoto,setUploadPhoto] = useState("")
  const navigate = useNavigate()

  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  const handleUploadPhoto = async(e)=>{
    const file = e.target.files[0]

    const uploadPhoto = await uploadFile(file)

    setUploadPhoto(file)

    setData((preve)=>{
      return{
        ...preve,
        profile_pic : uploadPhoto?.url
      }
    })
  }
  const handleClearUploadPhoto = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    setUploadPhoto(null)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`

    try {
        const response = await axios.post(URL,data)
        console.log("response",response)

        toast.success(response.data.message)

        if(response.data.success){
            setData({
              name : "",
              email : "",
              password : "",
              profile_pic : ""
            })

            navigate('/')

        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
    console.log('data',data)
  }


  return (
    <div className='mt-5'>
        <div className='bg-primary w-full max-w-md  rounded overflow-hidden p-6 mx-auto'>
          <h3>Welcome</h3>

          <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
              <div className='flex flex-col gap-1'>
                <label htmlFor='name'>Name :</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='enter your name' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary'
                  value={data.name}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='email'>Email :</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='enter your email' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary'
                  value={data.email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='password'>Password :</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='enter your password' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary'
                  value={data.password}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='profile_pic'>Photo :

                  <div className='h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer'>
                      <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
                        {
                          uploadPhoto?.name ? uploadPhoto?.name : "Upload profile photo"
                        }
                      </p>
                      {
                        uploadPhoto?.name && (
                          <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearUploadPhoto}>
                            <IoClose/>
                          </button>
                        )
                      }
                      
                  </div>
                
                </label>
                
                <input
                  type='file'
                  id='profile_pic'
                  name='profile_pic'
                  className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
                  onChange={handleUploadPhoto}
                />
              </div>


              <button
               className='bg-black text-lg  px-4 py-1 hover:bg-Danger rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
              >
                REGISTER
              </button>

          </form>

          <p className='my-3 text-center'>Already have account ? <Link to={"/"} className='hover:text-primary font-semibold'>Login</Link></p>
        </div>
    </div>
  )
}

export default RegisterPage

// import React, { useState } from 'react'
// import { IoClose } from "react-icons/io5";
// import { Link, useNavigate } from 'react-router-dom';
// import uploadFile from '../helpers/uploadFile';
// import axios from 'axios'
// import toast from 'react-hot-toast';

// const RegisterPage = () => {
//   const [data,setData] = useState({
//     name : "",
//     email : "",
//     password : "",
//     profile_pic : ""
//   })
//   const [uploadPhoto,setUploadPhoto] = useState("")
//   const navigate = useNavigate()

//   const handleOnChange = (e)=>{
//     const { name, value} = e.target

//     setData((preve)=>{
//       return{
//           ...preve,
//           [name] : value
//       }
//     })
//   }

//   const handleUploadPhoto = async(e)=>{
//     const file = e.target.files[0]

//     const uploadPhoto = await uploadFile(file)

//     setUploadPhoto(file)

//     setData((preve)=>{
//       return{
//         ...preve,
//         profile_pic : uploadPhoto?.url
//       }
//     })
//   }
//   const handleClearUploadPhoto = (e)=>{
//     e.stopPropagation()
//     e.preventDefault()
//     setUploadPhoto(null)
//   }

//   const handleSubmit = async(e)=>{
//     e.preventDefault()
//     e.stopPropagation()

//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`

//     try {
//         const response = await axios.post(URL,data)
//         console.log("response",response)

//         toast.success(response.data.message)

//         if(response.data.success){
//             setData({
//               name : "",
//               email : "",
//               password : "",
//               profile_pic : ""
//             })

//             navigate('/')

//         }
//     } catch (error) {
//         toast.error(error?.response?.data?.message)
//     }
//     console.log('data',data)
//   }


//   return (
//     <div className='mt-5'>
//         <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>
//           <h3>Welcome</h3>

//           <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
//               <div className='flex flex-col gap-1'>
//                 <label htmlFor='name'>Name :</label>
//                 <input
//                   type='text'
//                   id='name'
//                   name='name'
//                   placeholder='enter your name' 
//                   className='bg-slate-100 px-2 py-1 focus:outline-primary'
//                   value={data.name}
//                   onChange={handleOnChange}
//                   required
//                 />
//               </div>

//               <div className='flex flex-col gap-1'>
//                 <label htmlFor='email'>Email :</label>
//                 <input
//                   type='email'
//                   id='email'
//                   name='email'
//                   placeholder='enter your email' 
//                   className='bg-slate-100 px-2 py-1 focus:outline-primary'
//                   value={data.email}
//                   onChange={handleOnChange}
//                   required
//                 />
//               </div>

//               <div className='flex flex-col gap-1'>
//                 <label htmlFor='password'>Password :</label>
//                 <input
//                   type='password'
//                   id='password'
//                   name='password'
//                   placeholder='enter your password' 
//                   className='bg-slate-100 px-2 py-1 focus:outline-primary'
//                   value={data.password}
//                   onChange={handleOnChange}
//                   required
//                 />
//               </div>

//               <div className='flex flex-col gap-1'>
//                 <label htmlFor='profile_pic'>Photo :

//                   <div className='h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer'>
//                       <p className='text-sm max-w-[300px] text-ellipsis line-clamp-1'>
//                         {
//                           uploadPhoto?.name ? uploadPhoto?.name : "Upload profile photo"
//                         }
//                       </p>
//                       {
//                         uploadPhoto?.name && (
//                           <button className='text-lg ml-2 hover:text-red-600' onClick={handleClearUploadPhoto}>
//                             <IoClose/>
//                           </button>
//                         )
//                       }
                      
//                   </div>
                
//                 </label>
                
//                 <input
//                   type='file'
//                   id='profile_pic'
//                   name='profile_pic'
//                   className='bg-slate-100 px-2 py-1 focus:outline-primary hidden'
//                   onChange={handleUploadPhoto}
//                 />
//               </div>


//               <button
//                className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
//               >
//                 REGISTER
//               </button>

//           </form>

//           <p className='my-3 text-center'>Do you have account ? <Link to={"/email"} className='hover:text-primary font-semibold'>Login</Link></p>
//         </div>
//     </div>
//   )
// }


// export default RegisterPage

// import React, { useState } from "react";
// import { IoClose } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import uploadFile from "../helpers/uploadFile";
// import axios from "axios";
// import toast from "react-hot-toast";

// const RegisterPage = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     profile_pic: "",
//   });
//   const [uploadPhoto, setUploadPhoto] = useState("");
//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     setData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleUploadPhoto = async (e) => {
//     const file = e.target.files[0];
//     const uploadPhoto = await uploadFile(file);

//     setUploadPhoto(file);
//     setData((prev) => ({
//       ...prev,
//       profile_pic: uploadPhoto?.url,
//     }));
//   };

//   const handleClearUploadPhoto = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     setUploadPhoto(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/register`;

//     try {
//       const response = await axios.post(URL, data);
//       toast.success(response.data.message);

//       if (response.data.success) {
//         setData({ name: "", email: "", password: "", profile_pic: "" });
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-600">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-center text-2xl font-semibold text-gray-800">Welcome</h2>

//         {/* Form */}
//         <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col">
//             <label htmlFor="name" className="text-gray-700 font-medium">
//               Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={data.name}
//               onChange={handleOnChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="email" className="text-gray-700 font-medium">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={data.email}
//               onChange={handleOnChange}
//               required
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-gray-700 font-medium">
//               Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={data.password}
//               onChange={handleOnChange}
//               required
//             />
//           </div>

//           {/* Profile Picture Upload */}
//           <div className="flex flex-col">
//             <label htmlFor="profile_pic" className="text-gray-700 font-medium">
//               Photo:
//             </label>
//             <div className="relative h-14 bg-gray-200 flex justify-between items-center px-3 border rounded-lg hover:border-blue-500 cursor-pointer">
//               <p className="text-sm truncate">
//                 {uploadPhoto?.name ? uploadPhoto?.name : "Upload profile photo"}
//               </p>
//               {uploadPhoto?.name && (
//                 <button
//                   className="text-xl text-gray-600 hover:text-red-600"
//                   onClick={handleClearUploadPhoto}
//                 >
//                   <IoClose />
//                 </button>
//               )}
//             </div>
//             <input
//               type="file"
//               id="profile_pic"
//               name="profile_pic"
//               className="hidden"
//               onChange={handleUploadPhoto}
//             />
//           </div>

//           <button className="w-full bg-blue-600 text-lg py-2 rounded-lg font-bold text-white hover:bg-blue-700 transition duration-300">
//             REGISTER
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="mt-4 text-center text-gray-600">
//           Already have an account?{" "}
//           <Link to="/email" className="text-blue-600 font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
