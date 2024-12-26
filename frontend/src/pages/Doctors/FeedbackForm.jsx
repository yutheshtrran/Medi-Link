import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    // API integration logic
    console.log({
      rating,
      reviewText,
    });

    // Reset form after submission
    setRating(0);
    setHover(0);
    setReviewText("");
  };

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          How would you rate your overall experience?
        </h3>
        <div className='flex'>
          {[...Array(5)].map((_, index) => {
            const starIndex = index + 1;
            return (
              <button
                key={starIndex}
                type="button"
                className={`bg-transparent border-none outline-none text-[22px] cursor-pointer ${
                  starIndex <= (hover || rating) ? 'text-yellowColor' : 'text-gray-500'
                }`}
                onClick={() => setRating(starIndex)}
                onMouseEnter={() => setHover(starIndex)}
                onMouseLeave={() => setHover(0)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <AiFillStar />
              </button>
            );
          })}
        </div>
      </div>

      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions
        </h3>
        <textarea
          className='border border-solid border-[#0066FF34] focus:outline outline-primaryColor w-full px-2 py-3 rounded-md'
          rows="5"
          placeholder='Write your message'
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      
      <button type="submit" className='btn'>
        Submit feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
