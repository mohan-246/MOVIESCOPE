import React from "react";

export const MovieReview = ({ List }) => {
  return (
    <div className="" id="scrollable-list">
      <p className="text-xl font-extrabold font-mono uppercase mx-4 my-5">
        Reviews
      </p>
      <div>
        {List.map((review) => (
          <div key={review.id} className="m-5 text-md bg-slate-100">
            <p className=" font-semibold mb-2 ml-2">{review.author}</p>
            <p className="mx-2 " key={review.id}>
              {review.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
