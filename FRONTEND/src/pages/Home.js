// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import {
//   logout,
//   setOnlineUser,
//   setSocketConnection,
//   setUser,
// } from "../redux/userSlice";
// import Sidebar from "../components/Sidebar";
// import logo from "../assets/logo.jpg";
// import io from "socket.io-client";
// import { FaUserPlus } from "react-icons/fa";
// // import background from "../assets/pattern.jpg"

// const Home = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   console.log("user", user);
//   const fetchUserDetails = async () => {
//     try {
//       const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`;
//       const response = await axios({
//         url: URL,
//         withCredentials: true,
//       });

//       dispatch(setUser(response.data.data));

//       if (response.data.data.logout) {
//         dispatch(logout());
//         navigate("/email");
//       }
//       console.log("current user Details", response);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//   /***socket connection */
//   useEffect(() => {
//     const socketConnection = io(process.env.REACT_APP_BACKEND_URL, {
//       auth: {
//         token: localStorage.getItem("token"),
//       },
//     });

//     socketConnection.on("onlineUser", (data) => {
//       console.log(data);
//       dispatch(setOnlineUser(data));
//     });

//     dispatch(setSocketConnection(socketConnection));

//     return () => {
//       socketConnection.disconnect();
//     };
//   }, []);

//   const basePath = location.pathname === "/home";
//   return (
//     <div className="grid lg:grid-cols-[300px,1fr] h-screen max-h-screen">
//       <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
//         <Sidebar />
//       </section>

//       {/**message component**/}
//       <section className={`${basePath && "hidden"}`}>
//         <Outlet />
//       </section>

//       <div
//         className={`justify-center items-center flex-col gap-2 hidden ${
//           !basePath ? "hidden" : "lg:flex"
//         }`}
//       >
//         <div>
//           <img src={logo} width={250} alt="logo" />
//         </div>
//         <p className="text-lg mt-2 text-slate-500 flex items-center gap-x-2">
//           Click on the icon <FaUserPlus /> to select user to send the
//           message
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;

import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { logout, setOnlineUser, setSocketConnection, setUser } from '../redux/userSlice'
import Sidebar from '../components/Sidebar'
import logo from '../assets/logo.jpg'
import io from 'socket.io-client'
import { FaUserPlus } from "react-icons/fa";

const Home = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  console.log('user',user)
  const fetchUserDetails = async()=>{
    try {
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
        const response = await axios({
          url : URL,
          withCredentials : true
        })

        dispatch(setUser(response.data.data))

        if(response.data.data.logout){
            dispatch(logout())
            navigate("/")
        }
        console.log("current user Details",response)
    } catch (error) {
        console.log("error",error)
    }
  }

  useEffect(()=>{
    fetchUserDetails()
  },[])

  /***socket connection */
  useEffect(()=>{
    const socketConnection = io(process.env.REACT_APP_BACKEND_URL,{
      auth : {
        token : localStorage.getItem('token')
      },
    })

    socketConnection.on('onlineUser',(data)=>{
      console.log(data)
      dispatch(setOnlineUser(data))
    })

    dispatch(setSocketConnection(socketConnection))

    return ()=>{
      socketConnection.disconnect()
    }
  },[])


  const basePath = location.pathname === '/home'
  return (
    <div className='bg-red grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
        <section className={`bg-blue ${!basePath && "hidden"} lg:block`}>
           <Sidebar/>
        </section>

        {/**message component**/}
        <section className={`${basePath && "hidden"}`} >
            <Outlet/>
        </section>


        <div className={`"bg-black justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex" }`}>
            <div>
              <img
                src={logo}
                width={100}
                alt='logo'
              />
            </div>
            <p className="text-lg mt-2 text-slate-500 flex items-center gap-x-2">
              Click on the icon <FaUserPlus /> to select user to chat
            </p>
        </div>
    </div>
  )
}

export default Home

// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import { logout, setOnlineUser, setSocketConnection, setUser } from '../redux/userSlice'
// import Sidebar from '../components/Sidebar'
// import logo from '../assets/logo.jpg'
// import io from 'socket.io-client'
// import { FaUserPlus } from "react-icons/fa";
// import { Button } from '@/components/ui/button';

// const Home = () => {
//   const user = useSelector(state => state.user)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const location = useLocation()

//   console.log('user', user)
  
//   const fetchUserDetails = async () => {
//     try {
//       const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
//       const response = await axios({
//         url: URL,
//         withCredentials: true
//       })

//       dispatch(setUser(response.data.data))

//       if (response.data.data.logout) {
//         handleLogout()
//       }
//       console.log("current user Details", response)
//     } catch (error) {
//       console.log("error", error)
//     }
//   }

//   useEffect(() => {
//     fetchUserDetails()
//   }, [])

//   /*** Socket Connection ***/
//   useEffect(() => {
//     const socketConnection = io(process.env.REACT_APP_BACKEND_URL, {
//       auth: {
//         token: localStorage.getItem('token')
//       },
//     })

//     socketConnection.on('onlineUser', (data) => {
//       console.log(data)
//       dispatch(setOnlineUser(data))
//     })

//     dispatch(setSocketConnection(socketConnection))

//     return () => {
//       socketConnection.disconnect()
//     }
//   }, [])

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/logout`, {}, { withCredentials: true })
//       localStorage.removeItem('token')
//       dispatch(logout())
//       navigate("/")
//     } catch (error) {
//       console.log("Logout error", error)
//     }
//   }

//   const basePath = location.pathname === '/home'
//   return (
//     <div className='bg-gray-100 grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
//       <section className={`bg-gray-200 ${!basePath && "hidden"} lg:block`}> 
//         <Sidebar />
//         <div className='p-4'>
//           <Button onClick={handleLogout} className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white">
//             Logout
//           </Button>
//         </div>
//       </section>

//       {/** Message component **/}
//       <section className={`${basePath && "hidden"}`}>
//         <Outlet />
//       </section>

//       <div className={`bg-white justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex"}`}> 
//         <div>
//           <img src={logo} width={100} alt='logo' />
//         </div>
//         <p className="text-lg mt-2 text-gray-600 flex items-center gap-x-2"> 
//           Click on the icon <FaUserPlus /> to select user to chat
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Home


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { PiUserCircle } from "react-icons/pi";

// const CheckEmailPage = () => {
//   const [data, setData] = useState({ email: "" });
//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     setData({ email: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

//     try {
//       const response = await axios.post(URL, data);
//       toast.success(response.data.message);

//       if (response.data.success) {
//         setData({ email: "" });
//         navigate("/password", { state: response?.data?.data });
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   const handleQuickLogin = async (email) => {
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

//     try {
//       const response = await axios.post(URL, { email });
//       toast.success(response.data.message);

//       if (response.data.success) {
//         navigate("/password", { state: response?.data?.data });
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Something went wrong");
//     }
//   };

//   const guestUsers = [
//     { email: "test@gmail.com", label: "Guest User 1" },
//     { email: "test1@gmail.com", label: "Guest User 2" },
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md">
//         <div className="flex flex-col items-center">
//           <PiUserCircle size={80} className="text-gray-600" />
//           <h2 className="text-2xl font-semibold mt-2 text-gray-800">Welcome</h2>
//         </div>

//         {/* Email Form */}
//         <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
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
//           <button className="w-full bg-blue-600 text-lg py-2 rounded-lg font-bold text-white hover:bg-blue-700 transition duration-300">
//             Let's Go
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="mt-4 text-center text-gray-600">
//           New User?{" "}
//           <Link to="/register" className="text-blue-600 font-semibold hover:underline">
//             Register
//           </Link>
//         </p>

//         {/* Guest Login Section */}
//         <h3 className="text-center mt-6 font-semibold text-gray-700">
//           Guest Login Credentials
//         </h3>
//         <div className="mt-4 flex justify-center gap-4">
//           {guestUsers.map((user, index) => (
//             <button
//               key={index}
//               className="bg-purple-600 text-lg px-4 py-2 rounded-lg font-bold text-white hover:bg-purple-700 transition duration-300"
//               onClick={() => handleQuickLogin(user.email)}
//             >
//               {user.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckEmailPage;

