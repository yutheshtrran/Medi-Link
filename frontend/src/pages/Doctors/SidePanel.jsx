import React from 'react';

const SidePanel = ({ children, className = '' }) => {
  return (
    <div className={`shadow-panelShadow p-3 lg:p-5 rounded-md ${className} h-[300px] max-w-[300px] overflow-y-auto`}>
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 justify-center text-justify">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">1500/= Rs</span>
      </div>
      <div className="overflow-y-auto">
        {children}
      </div>
      <div class='mt-[30px]'>
        <p className='text_para mt-0 font-semibold text-ellipsis text-headingColor'>
            Available Time Slots:
            </p>

            <ul className='mt-3'>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Saturday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 PM - 7:30 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        5:00 PM - 9:30 PM
                    </p>
                </li>
                <li className="flex items-center justify-between mb-2">
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Monday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        5:00 PM - 9:30 PM
                    </p>
                </li>
            </ul>
      </div>
      <button className="btn px-2 2-full rounded-md justify-center">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
