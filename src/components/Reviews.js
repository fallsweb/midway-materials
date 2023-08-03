import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import { v4 as uuidv4 } from "uuid";

import "../styles/Reviews.css";

// const submitApiUrl = "http://localhost:3001/midway-materials/newreview";
// const getApiUrl = "http://localhost:3001/midway-materials/getapprovedreviews";

const submitApiUrl =
  "https://wfwebmaster-api.herokuapp.com/midway-materials/newreview";
const getApiUrl =
  "https://wfwebmaster-api.herokuapp.com/midway-materials/getapprovedreviews";

const Reviews = () => {
  const [userName, setUserName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);
  const [buttonText, setButtonText] = useState("Submit Review");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText("Sending...");

    if (userName.trim() !== "" && reviewText.trim() !== "") {
      const newReview = {
        id: uuidv4(), // Generate a unique ID for the new review
        userName,
        reviewText,
      };

      // Send POST request using Axios
      axios
        .post(submitApiUrl, newReview)
        .then((response) => {
          console.log("Review submitted");
          setButtonText("Thank you!");
          setUserName("");
          setReviewText("");
          setButtonDisabled(true);
        })
        .catch((error) => {
          alert("Error submitting review.");
          console.error("Error submitting review:", error);
          setButtonDisabled(false);
        });
    }
  };

  // get reviews on load
  useEffect(() => {
    // Fetch reviews from the API on page load
    axios
      .get(getApiUrl)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, []);

  // scroll reviews automatically
  useEffect(() => {
    // Automatically scroll to the next review every 5 seconds
    const timer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    // Clear the timer when the component unmounts or when reviews change
    return () => clearInterval(timer);
  }, [reviews]);

  return (
    <div className="reviews-outer-container">
      <div className="reviews-container">
        <h2>Reviews</h2>
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            <div className="review">
              <h3>{reviews[currentReviewIndex].userName}</h3>
              <p>{reviews[currentReviewIndex].reviewText}</p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="name-text-box">
              <label htmlFor="userName">Name:</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="review-text-box">
              <label htmlFor="reviewText">Review:</label>
              <textarea
                id="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" disabled={buttonDisabled}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
