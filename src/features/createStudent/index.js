import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudentAsync } from "../students/studentsSlice";

const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGPA] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!firstName || !lastName || !email || !gpa) {
      setError("Please enter all the required fields");
      return;
    }

    setError(null);

    dispatch(addStudentAsync({ firstName, lastName, email, gpa }));
    navigate("/students");
  };

  return (
    <form id="student-form" onSubmit={handleSubmit}>
      <h1>Create Student</h1>
      {error && <div className="error">{error}</div>}
      <label html="lastName">Last Name: </label>
      <input
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label html="firstName">First Name: </label>
      <input
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <label html="email">Email: </label>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label html="gpa">GPA: </label>
      <input name="gpa" value={gpa} onChange={(e) => setGPA(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
      <br />
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default CreateStudent;
