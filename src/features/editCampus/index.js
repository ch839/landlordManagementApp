import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  selectSingleCampus,
  editCampusAsync,
} from "../singleCampus/singleCampusSlice";
import { useSelector, useDispatch } from "react-redux";

const EditCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [editedCampus, setEditedCampus] = useState(null);

  const campus = useSelector(selectSingleCampus);

  const { id } = campus;

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const updatedCampus = { id, name, address };
    dispatch(editCampusAsync(updatedCampus)).then((res) => {
      setEditedCampus(res.payload);
    });
  };

  return (
    <>
      {editedCampus ? (
        <div>
          <p>Name: {name}</p>
          <p>Address: {address}</p>
          <Link to="/">Back to home</Link>
        </div>
      ) : (
        <form id="campus-form" onSubmit={handleSubmit}>
          <h1>Edit Campus</h1>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Link to="/">Cancel</Link>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default EditCampus;
