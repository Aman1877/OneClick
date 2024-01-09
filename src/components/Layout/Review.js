import React from "react";
import "../styles/ReviewStyle.css";
import reviewsJson from "../../data/review.json";
const Review = () => {
  return (
    <>
      <div className="review-heading">
        <p
          style={{
            width: "85%",
            paddingLeft: "4%",
            marginLeft: "2%",
            marginTop: "3%",
            color: "black",
            fontFamily: "Poppins-SemiBold, Helvetica",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          User reviews on this Supplier
        </p>
        <p
          style={{
            color: "black",
            marginTop: "3%",
            fontFamily: "Poppins-SemiBold, Helvetica",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          View more
        </p>
      </div>
      {reviewsJson.map((review) => {
        return (
          <div className="profile">
            <div className="profile-picture-container">
              <img className="profile-picture" src={review.image} />
            </div>
            <div className="profile-name-days">
              <p className="profile-name">{review.name}</p>
              <p className="profile-days">{review.days}</p>
            </div>
            <div className="profile-title-description">
              <p className="profile-title">{review.title}</p>
              <p className="profile-description">{review.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Review;
