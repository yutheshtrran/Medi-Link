import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          
          {/* Main image container */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="About Card" />
            </div>
          </div>

          {/* About content section */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to lead in Sri Lanka's healthcare</h2>
            <p className="text_para">
            For many years, Sri Lanka has been recognized as one of the leading nations in providing world-class healthcare services. Ranked among the best public healthcare systems in South Asia, Sri Lanka is celebrated for its advanced medical facilities, skilled professionals, and commitment to patient care
            </p>
            <p className="text_para mt-[30px]">
            Our commitment is to excellence every single day—caring for our patients with compassion and innovation. We focus not on past achievements but on advancing what we can do tomorrow to ensure the highest standard of care. Providing the best for our community
            </p>
            <Link to="/" className="mt-[20px]">
              <button className="btn">Learn More</button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
