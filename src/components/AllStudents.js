import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectStudents,
  deleteStudentAsync,
} from "../features/students/studentsSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AllStudents = () => {
  const students = useSelector(selectStudents);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("lastName");
  const [sortDirection, setSortDirection] = useState("ascending");

  const sortedStudents = () => {
    let sortedStudents = [...students];
    if (sortBy === "lastName") {
      sortedStudents.sort((a, b) => {
        if (sortDirection === "ascending") {
          return a.lastName.localeCompare(b.lastName);
        } else {
          return b.lastName.localeCompare(a.lastName);
        }
      });
    } else if (sortBy === "gpa") {
      sortedStudents.sort((a, b) => {
        if (sortDirection === "ascending") {
          return a.gpa - b.gpa;
        } else {
          return b.gpa - a.gpa;
        }
      });
    }
    return sortedStudents;
  };

  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
    navigate("/students");
  };
  return (
    <div>
      <div>
        <button onClick={() => setSortBy("lastName")}>Sort by Last Name</button>
        <button onClick={() => setSortBy("gpa")}>Sort by GPA</button>
        <button onClick={() => setSortDirection("ascending")}>
          Sort Ascending
        </button>
        <button onClick={() => setSortDirection("descending")}>
          Sort Descending
        </button>
      </div>
      {sortedStudents().length ? (
        sortedStudents().map((student) => (
          <div key={student.id}>
            <Link to={`/students/${student.id}`}>
              <div className="student row">
                <img src={student.imageUrl} />
                <p>{student.firstName + student.lastName}</p>
                
                <p>Click for details</p>
                <p>EMAIL: {student.email}</p>
                <p>GPA: {student.gpa}</p>
              </div>
            </Link>
            <button onClick={() => handleDelete(student.id)}>X</button>
          </div>
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};
export default AllStudents;
