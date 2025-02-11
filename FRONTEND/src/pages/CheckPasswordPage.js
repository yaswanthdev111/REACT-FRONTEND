// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Avatar from "../components/Avatar";
// import { useDispatch } from "react-redux";
// import { setToken } from "../redux/userSlice";

// const CheckPasswordPage = () => {
//   const [data, setData] = useState({ password: "" });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!location?.state?.name) {
//       navigate("/email");
//     }
//   }, [location, navigate]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

//     try {
//       const response = await axios({
//         method: "post",
//         url: URL,
//         data: {
//           userId: location?.state?._id,
//           password: data.password,
//         },
//         withCredentials: true,
//       });

//       toast.success(response.data.message);

//       if (response.data.success) {
//         dispatch(setToken(response?.data?.token));
//         localStorage.setItem("token", response?.data?.token);
//         setData({ password: "" });
//         navigate("/home");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   const handleQuickLogin = async (password) => {
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

//     try {
//       const response = await axios({
//         method: "post",
//         url: URL,
//         data: {
//           userId: location?.state?._id,
//           password,
//         },
//         withCredentials: true,
//       });

//       toast.success(response.data.message);

//       if (response.data.success) {
//         dispatch(setToken(response?.data?.token));
//         localStorage.setItem("token", response?.data?.token);
//         navigate("/home");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   const guestLogins = [
//     { label: "Guest User 1", password: "1234" },
//     { label: "Guest User 2", password: "1234" },
//   ];

//   return (
//     <div className="mt-5">
//       <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
//         <div className="w-fit mx-auto mb-2 flex justify-center items-center flex-col">
//           <Avatar
//             width={70}
//             height={70}
//             name={location?.state?.name}
//             imageUrl={location?.state?.profile_pic}
//           />
//           <h2 className="font-semibold text-lg mt-1">{location?.state?.name}</h2>
//         </div>

//         <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-1">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="bg-slate-100 px-2 py-1 focus:outline-primary"
//               value={data.password}
//               onChange={handleOnChange}
//               required
//             />
//           </div>
//           <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
//             Login
//           </button>
//         </form>

//         <p className="my-3 text-center">
//           <Link to={"/forgot-password"} className="hover:text-primary font-semibold">
//             Forgot password?
//           </Link>
//         </p>

//         <h1 className="text-center mt-5 font-semibold">Guest Login Credentials</h1>
//         <div className="mt-4 flex gap-x-32">
//           {guestLogins.map((guest, index) => (
//             <button
//               key={index}
//               className="bg-secondary text-lg px-4 py-1 hover:bg-primary rounded font-bold text-white leading-relaxed tracking-wide"
//               onClick={() => handleQuickLogin(guest.password)}
//             >
//               {guest.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckPasswordPage;

// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Avatar from "../components/Avatar";
// import { useDispatch } from "react-redux";
// import { setToken } from "../redux/userSlice";

// const CheckPasswordPage = () => {
//   const [data, setData] = useState({ password: "" });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!location?.state?.name) {
//       navigate("/email");
//     }
//   }, [location, navigate]);

//   useEffect(() => {
//     const autoLoginWithGuestPassword = async () => {
//       if (location?.state?.guestPassword) {
//         try {
//           const response = await axios({
//             method: "post",
//             url: `${process.env.REACT_APP_BACKEND_URL}/api/password`,
//             data: {
//               userId: location?.state?._id,
//               password: location.state.guestPassword,
//             },
//             withCredentials: true,
//           });

//           toast.success(response.data.message);

//           if (response.data.success) {
//             dispatch(setToken(response?.data?.token));
//             localStorage.setItem("token", response?.data?.token);
//             navigate("/home", { replace: true });
//           }
//         } catch (error) {
//           toast.error(error?.response?.data?.message);
//           navigate(".", { state: {}, replace: true });
//         }
//       }
//     };

//     autoLoginWithGuestPassword();
//   }, [location, navigate, dispatch]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

//     try {
//       const response = await axios({
//         method: "post",
//         url: URL,
//         data: {
//           userId: location?.state?._id,
//           password: data.password,
//         },
//         withCredentials: true,
//       });

//       toast.success(response.data.message);

//       if (response.data.success) {
//         dispatch(setToken(response?.data?.token));
//         localStorage.setItem("token", response?.data?.token);
//         setData({ password: "" });
//         navigate("/home");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   return (
//     <div className="mt-5">
//       <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
//         <div className="w-fit mx-auto mb-2 flex justify-center items-center flex-col">
//           <Avatar
//             width={70}
//             height={70}
//             name={location?.state?.name}
//             imageUrl={location?.state?.profile_pic}
//           />
//           <h2 className="font-semibold text-lg mt-1">{location?.state?.name}</h2>
//         </div>

//         <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-1">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="bg-slate-100 px-2 py-1 focus:outline-primary"
//               value={data.password}
//               onChange={handleOnChange}
//               required
//             />
//           </div>
//           <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
//             Login
//           </button>
//         </form>

//         <p className="my-3 text-center">
//           <Link to={"/forgot-password"} className="hover:text-Secondary font-semibold">
//             Forgot password?
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CheckPasswordPage;

// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import Avatar from "../components/Avatar";
// import { useDispatch } from "react-redux";
// import { setToken } from "../redux/userSlice";

// const CheckPasswordPage = () => {
//   const [data, setData] = useState({ password: "" });
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!location?.state?.name) {
//       navigate("/email");
//     }
//   }, [location, navigate]);

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

//     try {
//       const response = await axios.post(URL, {
//         userId: location?.state?._id,
//         password: data.password,
//       }, { withCredentials: true });

//       toast.success(response.data.message);

//       if (response.data.success) {
//         dispatch(setToken(response?.data?.token));
//         localStorage.setItem("token", response?.data?.token);
//         setData({ password: "" });
//         navigate("/home");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Invalid password!");
//     }
//   };

//   const handleQuickLogin = async (password) => {
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

//     try {
//       const response = await axios.post(URL, {
//         userId: location?.state?._id,
//         password,
//       }, { withCredentials: true });

//       toast.success(response.data.message);

//       if (response.data.success) {
//         dispatch(setToken(response?.data?.token));
//         localStorage.setItem("token", response?.data?.token);
//         navigate("/home");
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Invalid guest login!");
//     }
//   };

//   const guestLogins = [
//     { label: "Guest User 1", password: "1234" },
//     { label: "Guest User 2", password: "1234" },
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-600">
//       <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md">
//         <div className="w-fit mx-auto mb-4 flex justify-center items-center flex-col">
//           <Avatar
//             width={70}
//             height={70}
//             name={location?.state?.name}
//             imageUrl={location?.state?.profile_pic}
//           />
//           <h2 className="font-semibold text-xl mt-2 text-gray-800">{location?.state?.name}</h2>
//         </div>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="text-gray-700 font-medium">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//               value={data.password}
//               onChange={handleOnChange}
//               required
//             />
//           </div>

//           <button
//             className="w-full bg-purple-600 text-lg py-2 rounded-lg font-bold text-white hover:bg-purple-700 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         <p className="mt-4 text-center text-gray-600">
//           <Link to={"/forgot-password"} className="text-purple-600 font-semibold hover:underline">
//             Forgot password?
//           </Link>
//         </p>

//         <h1 className="text-center mt-5 font-semibold text-gray-800">Guest Login</h1>
//         <div className="mt-4 flex flex-col space-y-3">
//           {guestLogins.map((guest, index) => (
//             <button
//               key={index}
//               className="w-full bg-blue-500 text-lg py-2 rounded-lg font-bold text-white hover:bg-blue-600 transition duration-300"
//               onClick={() => handleQuickLogin(guest.password)}
//             >
//               {guest.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckPasswordPage;


import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Avatar from "../components/Avatar";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";

const CheckPasswordPage = () => {
  const [data, setData] = useState({ password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location?.state?.name) {
      navigate("/email");
    }
  }, [location, navigate]);

  useEffect(() => {
    const autoLoginWithGuestPassword = async () => {
      if (location?.state?.guestPassword) {
        try {
          const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_BACKEND_URL}/api/password`,
            data: {
              userId: location?.state?._id,
              password: location.state.guestPassword,
            },
            withCredentials: true,
          });

          toast.success(response.data.message);

          if (response.data.success) {
            dispatch(setToken(response?.data?.token));
            localStorage.setItem("token", response?.data?.token);
            navigate("/home", { replace: true });
          }
        } catch (error) {
          toast.error(error?.response?.data?.message);
          navigate(".", { state: {}, replace: true });
        }
      }
    };

    autoLoginWithGuestPassword();
  }, [location, navigate, dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;

    try {
      const response = await axios({
        method: "post",
        url: URL,
        data: {
          userId: location?.state?._id,
          password: data.password,
        },
        withCredentials: true,
      });

      toast.success(response.data.message);

      if (response.data.success) {
        dispatch(setToken(response?.data?.token));
        localStorage.setItem("token", response?.data?.token);
        setData({ password: "" });
        navigate("/home");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-200">
      <div className="bg-primary-100 w-full max-w-md rounded-lg shadow-lg overflow-hidden p-6 mx-auto">
        <div className="w-fit mx-auto mb-4 flex justify-center items-center flex-col">
          <Avatar
            width={70}
            height={70}
            name={location?.state?.name}
            imageUrl={location?.state?.profile_pic}
          />
          <h2 className="font-semibold text-lg mt-2 text-gray-800">{location?.state?.name}</h2>
        </div>

        <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-gray-700 font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <button className="bg-violet-600 text-lg px-4 py-2 hover:bg-violet-700 rounded-md font-bold text-white">
            Login
          </button>
        </form>

        <p className="my-4 text-center text-gray-700">
          <Link to={"/forgot-password"} className="hover:text-violet-600 font-semibold">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckPasswordPage;

