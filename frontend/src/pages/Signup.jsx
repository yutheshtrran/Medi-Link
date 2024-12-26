import React, { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/doctor-img01.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file)); // Generate preview URL
      setFormData((prevState) => ({
        ...prevState,
        photo: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here (e.g., API calls)
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Box */}
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="Signup" className="w-full rounded-l-lg" />
            </figure>
          </div>

          {/* Form Section */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Input Fields */}
              {["name", "email", "password", "confirmPassword"].map((field) => (
                <div className="mb-5" key={field}>
                  <input
                    type={field.includes("password") ? "password" : "text"}
                    placeholder={`Enter your ${field}`}
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
                      focus:border-b-primaryColor text-[16px] leading-7 text-headingColor 
                      placeholder:text-textColor cursor-pointer"
                    required
                  />
                </div>
              ))}

              {/* Gender Field */}
              <div className="mb-5 flex items-center">
                <label
                  className="text-headingColor font-bold text-[16px] leading-7 mr-4"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none border-b border-solid border-[#0066ff61]"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Role Field */}
              <div className="mb-5 flex items-center">
                <label
                  className="text-headingColor font-bold text-[16px] leading-7 mr-4"
                  htmlFor="role"
                >
                  Are you:
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none border-b border-solid border-[#0066ff61]"
                  required
                >
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </div>

              {/* Upload Photo Section */}
              <div className="mb-5 flex items-center gap-2">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor overflow-hidden">
                  <img
                    src={previewURL || avatar}
                    alt="Avatar Preview"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] 
                      leading-6 overflow-hidden bg-[#0066ff46] font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-3 py-1"
                >
                  Sign Up
                </button>
              </div>

              {/* Login Redirect */}
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to="/register" className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
