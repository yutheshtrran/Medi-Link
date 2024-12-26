import React from 'react';
import { formatDate } from '../../utils/formateDate';


const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About 
          <span className="text-blue-500 font-bold text-[24px] leading-9 ">
             Kumar Sangakkara
          </span>
        </h3>
        <p className='text_para' >
            Dr. Kumar Sangakkara is a distinguished surgeon renowned for his exceptional skills, 
            compassionate care, and unwavering dedication to the medical profession. With years 
            of rigorous training and hands-on experience, he has mastered the art of performing 
            complex surgeries with precision and empathy. 
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Education
        </h3>
        <ul className='pt-4 md:p-5'>  
            <li className='flex flex-col sm:flex-row sm:justtify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                    {formatDate("9-06-2022")} - {formatDate("7-04-2010")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in surgion
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Colombo base hospital
                </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justtify-between sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                       {formatDate("7-04-2010")} - {formatDate("7-04-2010")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in surgion
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                        Colombo base hospital
                </p>
                </li>
        </ul>
      </div>


<div className='mt-12'>

</div>
<h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formatDate("9-06-2022")} - {formatDate("7-04-2010")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in surgion
                    </p>
                    <p className='text-[14px] leading-6 font-medium text-textColor'>
                    Colombo base hospital
                    </p>
          </li>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formatDate("9-06-2022")} - {formatDate("7-04-2010")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
                        PHD in surgion
                    </p>
                    <p className='text-[14px] leading-6 font-medium text-textColor'>
                    Colombo base hospital
                    </p>
          </li>
        </ul>
    </div>
  );
};

export default DoctorAbout;