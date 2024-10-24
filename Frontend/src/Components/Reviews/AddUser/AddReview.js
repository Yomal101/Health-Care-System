import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import axios from "axios";
import { ReactCountryFlag } from "react-country-flag";
import countryList from "country-list";
import "./AddUser.css";
import StarRating from "../StarRating/StarRating";

function AddReview() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    country: "",
    accommodations: "",
    destinations: "",
    activities: "",
    date: "",
    accommodationsRating: 0,
    destinationsRating: 0,
    activitiesRating: 0,
  });

  // Set the current date as the default value
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setInputs((prevState) => ({
      ...prevState,
      date: currentDate,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    // Validation for name field
    if (name === "name") {
      newValue = value.replace(/[^A-Za-z ]/gi, ""); 
    }

    // Validation for country field
    if (name === "country") {
      newValue = value.replace(/[^A-Za-z ]/gi, ""); 
    }

    // Update state with the new input value
    setInputs((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    if (!inputs.accommodationsRating) {
      console.error("Accommodations rating is required");
      return;
    }
    await sendRequest();
    navigate("/seereviews");
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/users", {
        ...inputs,
        date: new Date().toISOString(),
      })
      .then((res) => res.data);
  };

  return (
    <div
      className="add-user-page"
      style={{
        backgroundImage:'url("https://img.freepik.com/free-photo/full-shot-smiley-mother-girl-with-good-reviews_23-2149394415.jpg?t=st=1725990002~exp=1725993602~hmac=61e98119b753d94e4ca42332c22702e39cfbf261871e0436fcf79a7bf8f472ea&w=1380")',
      }}
    >
      
      <div className="container" style={{ fontFamily: "Poppins, sans-serif" }}>
        <div className="form-container">
          <div className="Header">
            <h1>   </h1>
          </div>
          <div
            className="Header2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <p>
            Join us in keeping our community clean and green by sharing your thoughts!
            </p>
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={inputs.name}
                required
              />
            </div>

            <div className="form-group">
              <label>Location:</label>
              <div className="country-input">
                <input
                  type="text"
                  name="country"
                  onChange={handleChange}
                  value={inputs.country}
                  required
                />
                {inputs.country && (
                  <ReactCountryFlag
                    countryCode={countryList.getCode(inputs.country)}
                    svg
                  />
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Doctor : How would you rate the doctor's punctuality, professionalism, and communication?</label>
              <input
                type="text"
                name="accommodations"
                onChange={handleChange}
                value={inputs.accommodations}
                required
              />
              <StarRating
                value={inputs.accommodationsRating}
                onChange={(rating) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    accommodationsRating: rating,
                  }))
                }
              />
            </div>

            <div className="form-group">
              <label>Workers : How would you rate the efficiency, quality of work, and attitude of the workers? ?</label>
              <input
                type="text"
                name="destinations"
                onChange={handleChange}
                value={inputs.destinations}
                required
              />
              <StarRating
                value={inputs.destinationsRating}
                onChange={(rating) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    destinationsRating: rating,
                  }))
                }
              />
            </div>

            <div className="form-group">
              <label>Overall Health Service : How satisfied are you with the timeliness, quality, and overall experience of the health service?</label>
              <input
                type="text"
                name="activities"
                onChange={handleChange}
                value={inputs.activities}
                required
              />
              <StarRating
                value={inputs.activitiesRating}
                onChange={(rating) =>
                  setInputs((prevState) => ({
                    ...prevState,
                    activitiesRating: rating,
                  }))
                }
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddReview;
