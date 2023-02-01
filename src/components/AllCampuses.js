import React from "react";
import { useSelector } from "react-redux";
import {
  selectCampuses,
  deleteCampusAsync,
} from "../features/campuses/campusSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const AllCampuses = () => {
  const campuses = useSelector(selectCampuses);
  const dispatch = useDispatch();
  console.log("campuses", campuses);
  const handleDelete = (id) => {
    dispatch(deleteCampusAsync(id));
  };
  return (
    <div className="outside-campus-div">
      {campuses && campuses.length ? (
        campuses.map((campus) => (
          <div key={campus.id} className={campus.id}>
            <Link to={`/campuses/${campus.id}`}>
              <div className="campus row">
                <img src={campus.imageUrl} />
                <p>{campus.name}</p>
                <p>Details for {campus.name}</p>
                <p>{campus.description}</p>
                <p>{campus.address}</p>
              </div>
            </Link>
            <button onClick={() => handleDelete(campus.id)}>X</button>
          </div>
        ))
      ) : (
        <p>No campuses found</p>
      )}
    </div>
  );
};

export default AllCampuses;
