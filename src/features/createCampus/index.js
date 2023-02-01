import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCampusAsync } from "../campuses/campusSlice";
const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!name || !address) {
      setError("Please enter a name and address for the campus");
      return;
    }

    setError(null);

    dispatch(addCampusAsync({ name, address }));
    navigate("/campuses");
  };

  return (
    <form id="campus-form" onSubmit={handleSubmit}>
      <h1>Create Campus</h1>
      {error && <div className="error">{error}</div>}
      <label htmlFor="name">Campus Name: </label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="address">Address: </label>
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <button type="submit">Add Campus</button>
      <br />
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default CreateCampus;