import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  selectSingleStudent,
  editStudentAsync,
} from "../singleStudent/singleStudentSlice";
import { useSelector, useDispatch } from "react-redux";

const EditStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [gpa, setGPA] = useState("");
  const [editedStudent, setEditedStudent] = useState(null);

  const student = useSelector(selectSingleStudent);

  const { id } = student;

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const updatedStudent = { id, firstName, lastName, email, imageUrl, gpa };
    dispatch(editStudentAsync(updatedStudent)).then((res) => {
      setEditedStudent(res.payload);
    });
  };

  return (
    <>
      {editedStudent ? (
        <div>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <img src={imageUrl} alt={firstName} />
          <p>GPA: {gpa}</p>
        </div>
      ) : (
        <form id="student-form" onSubmit={handleSubmit}>
          <h1>Edit Student</h1>
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="imageUrl">imageUrl:</label>
          <input
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
          <label htmlFor="gpa">GPA:</label>
          <input
            name="gpa"
            value={gpa}
            onChange={(e) => {
              setGPA(e.target.value);
            }}
          />
          <Link to="/">Cancel</Link>
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default EditStudent;
