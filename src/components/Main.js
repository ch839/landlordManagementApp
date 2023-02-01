import React, { useEffect } from "react";
import {
  Navbar,
  AllCampuses,
  AllStudents,
  SingleCampus,
  SingleStudent,
} from "./";
import { fetchCampusesAsync } from "../features/campuses/campusSlice";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { fetchStudentsAsync } from "../features/students/studentsSlice";
import CreateCampus from "../features/createCampus/index";
import CreateStudent from "../features/createStudent";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentsAsync());
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  const NotFound = () => {
    return (
      <div>
        <h1>404 Error: The page you are looking for is not found</h1>
      </div>
    );
  };
  return (
    <div>
      <div className="column container">
        <div id="header">
          <h1>company which manages Campuses and Enrollments</h1>
        </div>
        <Navbar />
        <Routes>
          <Route path="/campuses" element={<AllCampuses />} />
          <Route path="/createCampus" element={<CreateCampus />} />
          <Route path="/createStudent" element={<CreateStudent />} />
          <Route path="/campuses/:campusId" element={<SingleCampus />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/students/:studentId" element={<SingleStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
