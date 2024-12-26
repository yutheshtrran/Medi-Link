import React from 'react';
import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'; 

const DoctorCard = ({ doctor }) => {
    const {
        name,
        avgRating, 
        totalRating, 
        photo, 
        specialization, 
        totalPatient, 
        hospital,
    } = doctor;

    return (
        <div className="doctor-card p-3 lg:p-5">
            <div className="doctor-photo">
                <img src={photo} className="w-full" alt={`${name}'s photo`} />
            </div>

            <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
                {name}
            </h2>

            <div className="mt-2 lg:mt-4 flex items-center justify-between">
                <span className="bg-[#deded6] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 
                lg:text-[16px] lg:leading-7 font-semibold rounded">
                    {specialization}
                </span>
                <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px]
                    font-semibold text-headingColor">
                        <img src={starIcon} alt="Star Icon" /> {avgRating}
                    </span>
                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                        ({totalRating})
                    </span>
                </div>
            </div>
            
            <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
                <div>
                    <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor">
                        +{totalPatient} patients
                    </h3>
                    <p className="text-[14px] leading-6 font-[400] text-textColor">
                        At {hospital}
                    </p>
                </div>
                <Link
                    to="/doctors"
                    className="mt-[20px] mx-auto flex items-center justify-center w-[44px] h-[44px] rounded-full border border-solid
                    border-[#181A1E] transition duration-300 ease-in-out hover:bg-primaryColor hover:border-primaryColor"
                >
                    <BsArrowRight className="text-black w-6 h-5 transition duration-300 ease-in-out hover:text-white" />
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;
