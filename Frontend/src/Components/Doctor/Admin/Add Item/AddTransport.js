import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../admin.css";

const AddTransport = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    image: "",
    contact: "",
    location: "",
    age: "",
    language: "",
    description: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation regex patterns
    const letterPattern = /^[A-Za-z\s]+$/;

    // Check if the value matches the pattern, if not, don't update state
    if (
      (name === "name" || name === "description" || name === "location") &&
      !letterPattern.test(value)
    ) {
      // Display error or prevent user from entering non-letter characters
      return;
    }

    // If the value passes validation, update state
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/guides/", inputs); // Assuming the endpoint is correct
      alert("Item added successfully.");
      history("/admin-items"); // Navigate to items page after successful submission
    } catch (error) {
      console.error("Error submitting item:", error);
      setError("Error adding item. Please try again.");
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Add New Guid</h2>
      <form className="cart-form" onSubmit={handleSubmit}>
        <div>
          <label className="cart-label">Full Name:</label>
          <input
            className="cart-input"
            placeholder="Full Name"
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="cart-label">Image URL:</label>
          <input
            className="cart-input"
            placeholder="Image URL"
            type="text"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="cart-label">Contact Number:</label>
          <input
            className="cart-input"
            placeholder="Contact Number"
            type="text"
            name="contact"
            value={inputs.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="cart-label">Location:</label>
          <input
            className="cart-input"
            placeholder="Location"
            type="text"
            name="location"
            value={inputs.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="cart-label">Age:</label>
          <input
            className="cart-input"
            placeholder="Age"
            type="number"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="cart-label">Language:</label>
          <select
            className="cart-input"
            name="language"
            value={inputs.language}
            onChange={handleChange}
            required
          >
            <option value="">Select a language</option>
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="japanese">Japanese</option>
          </select>
        </div>

        <div>
          <label className="cart-label">Description:</label>
          <textarea
            className="cart-input2"
            placeholder="Description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            required
          />
        </div>

        <button className="viewbtn" type="submit">
          Add New Tour Guid
        </button>
        {error && <p className="food-error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddTransport;
