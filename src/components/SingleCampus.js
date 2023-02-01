import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  selectSingleCampus,
  fetchSingleCampus,
} from "../features/singleCampus/singleCampusSlice";
import { useDispatch, useSelector } from "react-redux";
import EditCampus from "../features/editCampus/index";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();
  const campus = useSelector(selectSingleCampus);
  const { name, imageUrl, address, description, students } = campus;

  const handleUnassociate = async (student) => {
    await student.setCampus(null);

    dispatch(fetchSingleCampus(campusId));
  };

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
  }, [dispatch]);

  return (
    <div className="single-campus">
      {campus && !campus.message ? (
        <div>
          <h2 className="single-campus-name">{name}</h2>
          <img src={imageUrl} alt={name} />
          <p>{address}</p>
          <p>{description}</p>

          <EditCampus />
        </div>
      ) : (
        <p>{campus ? campus.message : "Loading..."}</p>
      )}
      {students && students.length ? (
        <ul>
          <p>STUDENTS:</p>
          {students.map((student) => (
            <li key={student.id}>
              <Link
                to={`/students/${student.id}`}
              >{`${student.firstName} ${student.lastName}`}</Link>

              <button onClick={() => handleUnassociate(student)}>
                Unassociate
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>This campus doesn't have any students</p>
      )}
    </div>
  );
};

export default SingleCampus;
