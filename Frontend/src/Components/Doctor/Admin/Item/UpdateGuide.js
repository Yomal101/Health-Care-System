import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../admin.css";

const UpdateGuide = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
    image: "",
    contact: "",
    location: "",
    age: "",
    language: "",
    description: "",
  });

  useEffect(() => {
    fetchItemDetails();
  }, []);

  const fetchItemDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/guids/${id}`);
      setItem(response.data.item);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

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
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/guides/${id}`, item);
      alert("Item updated successfully.");
      navigate("/admin-items");
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Update Tour Guid Personal Details</h1>
      <form className="cart-form" onSubmit={handleSubmit}>
        <div>
          <label className="cart-label">Name:</label>
          <br />
          <input
            className="cart-input"
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="cart-label">Image:</label>
          <br />
          <input
            className="cart-input"
            type="text"
            name="image"
            value={item.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="cart-label">Contact:</label>
          <br />
          <input
            className="cart-input"
            type="text"
            name="contact"
            value={item.contact}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="cart-label">Location:</label>
          <br />
          <input
            className="cart-input"
            type="text"
            name="location"
            value={item.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="cart-label">Age:</label>
          <br />
          <input
            className="cart-input"
            type="text"
            name="age"
            value={item.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="cart-label">Language:</label>
          <br />
          <select
            className="cart-input"
            name="language"
            value={item.language}
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
          <br />
          <textarea
            className="cart-input2"
            name="description"
            value={item.description}
            onChange={handleChange}
       s   />
        </div>
        <button type="submit" className="viewbtn">
          Update Guid
        </button>
      </form>
    </div>
  );
};

export default UpdateGuide;
