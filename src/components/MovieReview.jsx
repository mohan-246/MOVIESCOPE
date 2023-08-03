import React from "react";

export const MovieReview = ({ List }) => {
  return (
    <div className="" id="scrollable-list">
      <p className="sm:text-xl font-extrabold font-mono uppercase sm:mx-4 sm:my-5 xs:text-md xs:mx-2 xs:my-3">
        Reviews
      </p>
      <div>
        {List.map((review) => (
          <div key={review.id} className="sm:m-5 sm:text-sm sm:p-2 xs:m-3 xs:text-[8px] xs:p-1 bg-slate-100">
            <p className=" font-semibold sm:mb-2 sm:ml-2 xs:mb-1 xs:ml-1">{review.author}</p>
            <p className="sm:mx-2 xs:mx-1" key={review.id}>
              {review.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
