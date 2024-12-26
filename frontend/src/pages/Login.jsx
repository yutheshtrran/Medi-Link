import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link component for routing

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "", // Corrected from 'passsword' to 'password'
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission to handle it manually
    console.log(formData); // Handle form data (e.g., send it to an API)
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 🌟 ✨
        </h3>

        <form className="py-4 md:py-0" onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-b rounded border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[14px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
            />
          </div>

          <div className="mb-5">
            <input
              type="password" // Corrected 'Password' to 'password' (case-sensitive)
              placeholder="Password"
              name="password"
              value={formData.password} // Corrected from 'passsword' to 'password'
              onChange={handleInputChange}
              className="w-full px-4 py-2 border-b rounded border-solid border-[#0066ff61] focus:outline-none 
              focus:border-b-primaryColor text-[14px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-3 py-1"
            >
              Login
            </button>
          </div>
          
          <p className="mt-5 text-textColor text-center ">
            Don&apos;t have an account? 
            <Link to="/register" className="text-primaryColor font-medium ml-1">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
