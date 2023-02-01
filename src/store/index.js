import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campuses/campusSlice";
import studentsSlice from "../features/students/studentsSlice";
import singleCampusSlice from "../features/singleCampus/singleCampusSlice";
import singleStudentSlice from "../features/singleStudent/singleStudentSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
    singleCampus: singleCampusSlice,
    singleStudent: singleStudentSlice,
  },
});

export default store;
