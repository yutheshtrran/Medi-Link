import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import heroImg01 from "../assets/images/hero-Img01.png";
import heroImg02 from "../assets/images/hero-Img02.png";
import heroImg03 from "../assets/images/hero-Img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About";
import videoIcon from '../assets/images/video-icon.png'
import ServiceList from "../components/Services/ServiceList";
import featureImg from '../assets/images/feature-Img.png';
import DoctorList from "../components/Doctors/DoctorList"
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* Hero Content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para mt-3">
                  Our system is designed to simplify healthcare operations, ensuring patients receive the best care with minimal delays. From seamless appointment scheduling to efficient patient record management, we empower hospitals to focus on what matters most—improving lives.
                </p>
                <button className="btn mt-4">Request an Appointment</button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                {/* Years of Experience */}
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Years of Experience</p>
                </div>

                {/* Doctors */}
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">1000+</h2>
                  <span className="w-[100px] h-2 bg-purple-600 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Doctors</p>
                </div>

                {/* Patient Satisfaction */}
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                  <span className="w-[100px] h-2 bg-green-700 rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Hero Images */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="Hero Illustration" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="Hero Secondary Image 1" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="Hero Secondary Image 2" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Service Item 1 */}
            <div className="py-[30px] px-5 text-center group">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="Find a Doctor" className="w-[60px] h-[60px]" />
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] mt-4">Find a Doctor</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-2">
                World-class care for everyone. Our health system offers unmatched, expert healthcare—from the lab to the clinic.
              </p>
              <Link
                to="/doctors"
                className="mt-[20px] mx-auto flex items-center justify-center w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] group-hover:bg-primaryColor group-hover:border-none"
              >
                <BsArrowRight className="text-black w-6 h-5" />
              </Link>
            </div>

            {/* Service Item 2 */}
            <div className="py-[30px] px-5 text-center group">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="Find a Location" className="w-[60px] h-[60px]" />
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] mt-4">Find a Location</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-2">
                Access convenient and trusted healthcare facilities near you. Our network ensures expert care is always within reach.
              </p>
              <Link
                to="/locations"
                className="mt-[20px] mx-auto flex items-center justify-center w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] group-hover:bg-primaryColor group-hover:border-none"
              >
                <BsArrowRight className="text-black w-6 h-5" />
              </Link>
            </div>

            {/* Service Item 3 */}
            <div className="py-[30px] px-5 text-center group">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="Book Appointment" className="w-[60px] h-[60px]" />
              </div>
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] mt-4">Book Appointment</h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-2">
                Schedule your visit with ease and get personalized care at your convenience. We're here to support your health journey.
              </p>
              <Link
                to="/appointments"
                className="mt-[30px] mx-auto flex items-center justify-center w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] group-hover:bg-primaryColor group-hover:border-none"
              >
                <BsArrowRight className="text-black w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Services Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health system offers unmatched expertise across various specialties.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

{/* Features Section */}
<section>
  <div className="container">
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mt-4 gap-6 lg:gap-0">
      {/* Text Content */}
      <div className="xl:w-[670px]">
        <h2 className="heading">
          Get virtual treatment anytime <br/> from home
        </h2>

        <ul className="pl-4">
        <li className="text_para">1. Experience seamless virtual consultations with our expert doctors.</li>
        <li className="text_para">2. Access care from the comfort of your home.</li>
        <li className="text_para">
          3. Find available doctors and reserve your seat effortlessly.
        </li>
      </ul>
      <Link to="/" className="learn-more-link">
        <button className="btn">Learn More</button>
      </Link>
    </div>

     {/* Feature Image */}
<div className="lg:w-[600px] w-[80%] flex justify-center lg:justify-end mt-4 lg:mt-0 relative">
  {/* Main feature image */}
  <img 
    src={featureImg} 
    className="w-3/4 max-w-[400px]" 
    alt="Virtual Treatment" 
  />

  {/* Info Box - Positioned Correctly */}
  <div className="absolute bottom-[20px] left-[10px] md:left-[20px] lg:left-[30px] bg-white z-20 p-4 rounded-lg shadow-md">
    <div className="flex items-center justify-between gap-2 lg:gap-3">
      {/* Date Information */}
      <p className="text-sm lg:text-base text-headingColor font-semibold">
        Tue, 24
      </p>

      {/* Time Information */}
      <p className="text-sm lg:text-base text-textColor font-normal">
        10:00 AM
      </p>
    </div>
    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center
    bg-yellowColor rounded py-1 px-[6px] lg:px-[9px]">
      <img src={videoIcon} alt=""/>
    </span>
    <span
  className="block mt-2 bg-blue-100 text-sm text-blue-800 font-medium
  px-4 py-2 border border-blue-200 shadow-md rounded-md"
>
  Consultation
</span>


  </div>
</div>
      </div>
    </div>
</section>

{/*Our great doctors*/}

<section className="container">
  <div className="container">
    <div className="xl:w-[470px] mx-auto text-center">
      <h2 className="heading">Our Great Doctors</h2>
      <p className="text_para">
        World-class care for everyone. Our health system offers unmatched,
        expert health care.
      </p>
    </div>
    <DoctorList />
  </div>
</section>

{/* FAQ Selection */}
<section>
  <div className="container flex flex-col md:flex-row items-center gap-[50px] lg:gap-0">
    {/* Left Section: Image */}
    <div className="w-full md:w-1/2 hidden md:block">
      <img src={faqImg} alt="FAQ Illustration"  style={{ transform: "translateY(-75px)" }}/>
    </div>

    {/* Right Section: Heading and FAQ List */}
    <div className="w-full md:w-1/2">
      <h2 className="heading mb-5 text-[24px] lg:text-[32px] font-bold text-headingColor">
        Most questions by our patients
      </h2>
      <FaqList />
    </div>
  </div>
</section>

{/*Testimonial*/}
<section>
<div className="container" style={{ transform: "translateY(-75px)" }}>
  <div className="xl:w-[470px] mx-auto text-center">
    <h2 className="heading">What our Moto says</h2>
    <p className="text_para">
      World-class care for everyone. Our health System offers unmatched, expert health care.
    </p>
  </div>
<Testimonial />
</div>
</ section>
    </>
  );
};

export default Home;
