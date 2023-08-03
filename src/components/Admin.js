import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Admin.css";

// const getApiUrl = "http://localhost:3001/midway-materials/getallreviews";
// const approveApiUrl = "http://localhost:3001/midway-materials/approvereview";
// const deleteApiUrl = "http://localhost:3001/midway-materials/deletereview";

const getApiUrl =
  "https://wfwebmaster-api.herokuapp.com/midway-materials/getallreviews";
const approveApiUrl =
  "https://wfwebmaster-api.herokuapp.com/midway-materials/approvereview";
const deleteApiUrl =
  "https://wfwebmaster-api.herokuapp.com/midway-materials/deletereview";

const Admin = () => {
  const [reviews, setReviews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false); // State variable to track login status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    // Fetch all reviews on page load
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios
      .get(getApiUrl)
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace these with your predefined admin credentials
    const adminEmail = "shcpa97@msn.com";
    const adminPassword = "dude1204!";

    if (email === adminEmail && password === adminPassword) {
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  const handleApprove = (reviewId) => {
    axios
      .put(`${approveApiUrl}/${reviewId}`)
      .then((response) => {
        console.log("Review approved:", response.data);
        fetchReviews(); // Fetch updated reviews after approval
      })
      .catch((error) => {
        console.error("Error approving review:", error);
      });
  };

  const handleDelete = (reviewId) => {
    // Show a confirmation popup
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this review? It may be one of your active reviews. Deleting it will remove it forever."
    );

    // Proceed with deletion if the user confirms
    if (isConfirmed) {
      axios
        .delete(`${deleteApiUrl}/${reviewId}`)
        .then(() => {
          console.log("Review deleted:", reviewId);
          fetchReviews(); // Fetch updated reviews after deletion
        })
        .catch((error) => {
          console.error("Error deleting review:", error);
        });
    }
  };

  if (!loggedIn) {
    return (
      <div className="admin-container">
        <h2>Admin Panel - Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {loginError && <p>{loginError}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Admin Panel - Reviews</h2>
      {/* <br /> */}
      <h3>WARNING: When a review is deleted, it is gone forever!</h3>
      <br />
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <div className="review-list">
          {reviews.map((review) => (
            <div className="review-item" key={review.id}>
              <h3>{review.userName}</h3>
              <p>{review.reviewText}</p>
              {!review.approved && ( // Only show the button if the review is not approved
                <div className="actions">
                  <button onClick={() => handleApprove(review.id)}>
                    Approve
                  </button>
                </div>
              )}
              <div className="actions">
                <button onClick={() => handleDelete(review.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
