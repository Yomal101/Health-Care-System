import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoMdCart } from "react-icons/io";
import "../User.css";

const Item = ({ item }) => {
  const { _id, name, image, location, age, description, contact } = item;

  return (
    <div>
      <div className="card_ittem_card">
        <img src={image} alt={name} className="img_item_cart" />
        <h3 className="item_name">{name}</h3>
        <div className="item_con">
          <p className="detail_p">
            <b>Location</b>
            <br /> {location}
          </p>
          <p className="detail_p">
            <b>Age</b>
            <br />  {age}
          </p>
          <p className="detail_p">
            <b>Description</b>
            <br />
            {description}
          </p>
          <p className="detail_p">
            <b>Contact</b>
            <br />
            {contact}
          </p>
        </div>

        <button 
        onClick={() => (window.location.href = "/user-info")}
        className="viewbtn">Contact Now</button>
      </div>
    </div>
  );
};

const ViewGuides = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [types, setTypes] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/guides");
        setItems(response.data.items);
        console.log(response.data.items)
        // Extract types from items
        const allTypes = response.data.items.map((item) => item.language);
        // Remove duplicate types
        const uniqueTypes = [...new Set(allTypes)];
        setTypes(uniqueTypes);
      } catch (error) {
        console.error("Error fetching items:", error);
        setAlertMessage("Error fetching item items.");
      }
    };

    fetchItems();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, setNoResults] = useState(false);
  const handleTypeFilter = (selectedType) => {
    const filtered = items.filter((item) => item.language === selectedType);
    setFilteredItems(filtered);
  };
  const handleSearch = () => {
    const filtered = items.filter((item) =>
      Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setItems(filtered);
    setNoResults(filtered.length === 0);
  };
  return (
    <div>
      <div className="usernavbar">
        <button onClick={() => (window.location.href = "/admin-items")}>
          Admin
        </button>
        <IoMdCart
          className="cart_icon"
          onClick={() => (window.location.href = "/view-cart")}
        />
      </div>

      <div className="pdn_itmdetil">
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            className="serch"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch} className="updtbtn">
            Search
          </button>
        </div>
        <div className="types_container">
          <button
            className="filterbtn"
            onClick={() => (window.location.href = "/")}
          >
            all
          </button>
          {types > 0 && types.map((language) => (
            <button
              className="filterbtn"
              key={language}
              onClick={() => handleTypeFilter(language)}
            >
              {language}
            </button>
          ))}
        </div>
        <div className="card_container_cart">
          {filteredItems.length > 0
            ? filteredItems.map((item) => <Item key={item._id} item={item} />)
            : items >0 && items.map((item) => <Item key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default ViewGuides;
