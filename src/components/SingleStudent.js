import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSingleStudent,
  fetchSingleStudent,
} from "../features/singleStudent/singleStudentSlice";
import EditStudent from "../features/editStudent";

const SingleStudent = () => {
  const dispatch = useDispatch();
  const { studentId } = useParams();
  const student = useSelector(selectSingleStudent);

  const { firstName, lastName, email, imageUrl, gpa, campus } = student;

  useEffect(() => {
    dispatch(fetchSingleStudent(studentId));
  }, [dispatch]);

  return (
    <div className="single-student">
      {student && !student.message ? (
        <div>
          <h2 className="single-student-name">{`${firstName} ${lastName}`}</h2>
          <img src={imageUrl} alt={`${firstName} ${lastName}`} />
          <p>Email: {email}</p>
          <p>GPA: {gpa}</p>
          <EditStudent />
        </div>
      ) : (
        <p>{student ? student.message : "Loading..."}</p>
      )}
      {campus ? (
        <Link
          to={`/campuses/${campus.id}`}
          className="single-student-campus-link"
        >
          <p>CAMPUS: {campus.name}</p>
        </Link>
      ) : (
        <p>This student does not have a campus</p>
      )}
    </div>
  );
};

export default SingleStudent;
