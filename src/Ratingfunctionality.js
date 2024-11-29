import React, { useState } from "react";
const RatingApp = () => {
  const [rating, setRating] = useState(0);
  return (
    <div>
      {[...Array(5)].map((value, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            onClick={() => setRating(starValue)}
            style={{
              cursor: "pointer",
              color: starValue <= rating ? "gold" : "gray",
            }}
          >
            {" "}
            ★
          </span>
        );
      })}
    </div>
  );
};

const RatingApp1 = () => {
  return <RatingApp />;
};
export default RatingApp1;
