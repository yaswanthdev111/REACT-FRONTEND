// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { PiUserCircle } from "react-icons/pi";

// const CheckEmailPage = () => {
//   const [data, setData] = useState({ email: "" });
//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
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
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   const guestUsers = [
//     { email: "test@gmail.com", label: "Guest User 1", password: "1234" },
//     { email: "test1@gmail.com", label: "Guest User 2", password: "1234" },
//   ];

//   const handleQuickLogin = async (user) => {
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

//     try {
//       const response = await axios.post(URL, { email: user.email });
//       toast.success(response.data.message);

//       if (response.data.success) {
//         navigate("/password", {
//           state: {
//             ...response?.data?.data,
//             guestPassword: user.password,
//           },
//         });
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   return (
//     <div className="mt-5">
//       <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
//         <div className="w-fit mx-auto mb-2">
//           <PiUserCircle size={80} />
//         </div>

//         <h3>Welcome</h3>

//         <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-1">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder=" please Enter your email"
//               className="bg-slate-100 px-2 py-1 focus:outline-primary"
//               value={data.email}
//               onChange={handleOnChange}
//               required
//             />
//           </div>
//           <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
//             Let's Go
//           </button>
//         </form>
//         <p className="my-3 text-center">
//           New User?{" "}
//           <Link to={"/register"} className="hover:text-primary font-semibold">
//             Register
//           </Link>
//         </p>
//         <h1 className="text-center mt-5 font-semibold">
//           Guest Login Credentials
//         </h1>
//         <div className="mt-4 flex flex-wrap justify-center gap-3">
//           {guestUsers.map((user, index) => (
//             <button
//               key={index}
//               className="bg-primary text-base px-3 py-1 hover:bg-secondary rounded-lg font-semibold text-white leading-relaxed tracking-wide w-full sm:w-auto"
//               onClick={() => handleQuickLogin(user)}
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

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { PiUserCircle } from "react-icons/pi";

// const CheckEmailPage = () => {
//   const [data, setData] = useState({ email: "" });
//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
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
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   const guestUsers = [
//     { email: "test@gmail.com", label: "Guest User 1", password: "1234" },
//     { email: "test1@gmail.com", label: "Guest User 2", password: "1234" },
//   ];

//   const handleQuickLogin = async (user) => {
//     const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

//     try {
//       const response = await axios.post(URL, { email: user.email });
//       toast.success(response.data.message);

//       if (response.data.success) {
//         navigate("/password", {
//           state: {
//             ...response?.data?.data,
//             guestPassword: user.password,
//           },
//         });
//       }
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   return (
//     <div className="mt-5 bg-gray-200 min-h-screen flex justify-center items-center">
//       <div className="bg-gray-100 w-full max-w-md rounded-lg shadow-md overflow-hidden p-6 mx-auto">
//         <div className="w-fit mx-auto mb-3">
//           <PiUserCircle size={80} className="text-gray-600" />
//         </div>

//         <h3 className="text-center text-xl font-semibold text-gray-700">Welcome</h3>

//         {/* Guest Login Buttons First */}
//         <h1 className="text-center mt-4 font-semibold text-gray-700">Guest Login Credentials</h1>
//         <div className="mt-4 flex flex-wrap justify-center gap-3">
//           {guestUsers.map((user, index) => (
//             <button
//               key={index}
//               className="bg-Dark text-base px-3 py-1 hover:bg-primary rounded-lg font-semibold text-white leading-relaxed tracking-wide w-full sm:w-auto"
//               onClick={() => handleQuickLogin(user)}
//             >
//               {user.label}
//             </button>
//           ))}
//         </div>

//         {/* Email Login Form */}
//         <form className="grid gap-4 mt-5" onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-1">
//             <label htmlFor="email" className="text-gray-700">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="bg-white px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-Secondary"
//               value={data.email}
//               onChange={handleOnChange}
//               required
//             />
//           </div>
//           <button className="bg-primary text-lg px-4 py-2 hover:bg-grey rounded-md font-bold text-white leading-relaxed tracking-wide">
//             SUBMIT
//           </button>
//         </form>

//         <p className="my-3 text-center text-red-700">
//           New User?{" "}
//           <Link to={"/register"} className="hover:text-Danger font-semibold">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CheckEmailPage;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { PiUserCircle } from "react-icons/pi";

// const CheckEmailPage = () => {
//   const [data, setData] = useState({ email: "" });
//   const navigate = useNavigate();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({ ...prev, [name]: value }));
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
//       toast.error(error?.response?.data?.message);
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
//       toast.error(error?.response?.data?.message);
//     }
//   };

//   const guestUsers = [
//     { email: "test@gmail.com", label: "Guest User 1" },
//     { email: "test1@gmail.com", label: "Guest User 2" },
//   ];

//   return (
//     <div className="mt-5">
//       <div className="bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto">
//         <div className="w-fit mx-auto mb-2">
//           <PiUserCircle size={80} />
//         </div>

//         <h3>Welcome</h3>

//         <form className="grid gap-4 mt-3" onSubmit={handleSubmit}>
//           <div className="flex flex-col gap-1">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="bg-slate-100 px-2 py-1 focus:outline-primary"
//               value={data.email}
//               onChange={handleOnChange}
//               required
//             />
//           </div>
//           <button className="bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide">
//             Let's Go
//           </button>
//         </form>
//         <p className="my-3 text-center">
//           New User?{" "}
//           <Link to={"/register"} className="hover:text-primary font-semibold">
//             Register
//           </Link>
//         </p>
//         <h1 className="text-center mt-5 font-semibold">Guest Login Credentials</h1>
//         <div className="mt-4 flex gap-x-32">
//           {guestUsers.map((user, index) => (
//             <button
//               key={index}
//               className="bg-secondary text-lg px-4 py-1 hover:bg-primary rounded font-bold text-white leading-relaxed tracking-wide"
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
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <div className="flex flex-col items-center">
//           <PiUserCircle size={80} className="text-gray-600" />
//           <h2 className="text-2xl font-semibold mt-2">Welcome</h2>
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
//               className="bg-gray-100 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               value={data.email}
//               onChange={handleOnChange}
//               required
//             />
//           </div>
//           <button className="w-full bg-primary text-lg py-2 rounded-lg font-bold text-white hover:bg-secondary transition">
//             Let's Go
//           </button>
//         </form>

//         {/* Register Link */}
//         <p className="mt-4 text-center text-gray-600">
//           New User?{" "}
//           <Link to="/register" className="text-primary font-semibold hover:underline">
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
//               className="bg-secondary text-lg px-4 py-2 rounded-lg font-bold text-white hover:bg-primary transition"
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


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { PiUserCircle } from "react-icons/pi";

const CheckEmailPage = () => {
  const [data, setData] = useState({ email: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

    try {
      const response = await axios.post(URL, data);
      toast.success(response.data.message);

      if (response.data.success) {
        setData({ email: "" });
        navigate("/password", { state: response?.data?.data });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const guestUsers = [
    { email: "test@gmail.com", label: "Guest User 1", password: "1234" },
    { email: "test1@gmail.com", label: "Guest User 2", password: "1234" },
  ];

  const handleQuickLogin = async (user) => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`;

    try {
      const response = await axios.post(URL, { email: user.email });
      toast.success(response.data.message);

      if (response.data.success) {
        navigate("/password", {
          state: {
            ...response?.data?.data,
            guestPassword: user.password,
          },
        });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="mt-5 bg-blue-500 min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 w-full max-w-md rounded-lg shadow-md overflow-hidden p-6 mx-auto">
        <div className="w-fit mx-auto mb-3">
          <PiUserCircle size={80} className="text-gray-600" />
        </div>

        <h3 className="text-center text-xl font-semibold text-gray-700">Welcome</h3>

        {/* Guest Login Buttons First */}
        <h1 className="text-center mt-4 font-semibold text-gray-700">GUEST LOGIN</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {guestUsers.map((user, index) => (
            <button
              key={index}
              className="bg-blue-600 text-base px-3 py-2 hover:bg-blue-800 rounded-lg font-semibold text-white transition duration-300 w-full sm:w-auto"
              onClick={() => handleQuickLogin(user)}
            >
              {user.label}
            </button>
          ))}
        </div>

        {/* Email Login Form */}
        <form className="bg-green grid gap-4 mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="bg-white px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <button className="bg-violet-600 text-lg px-4 py-2 hover:bg-red-800 rounded-md font-bold text-white leading-relaxed tracking-wide transition duration-300">
            SUBMIT
          </button>
        </form>

        <p className="my-3 text-center text-gray-700">
          New User?{" "}
          <Link to={"/register"} className="hover:text-red-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CheckEmailPage;

