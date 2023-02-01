import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  campus: {},
};

export const fetchSingleStudent = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      if (data) {
        return data;
      } else {
        return { message: "This student does not exist." };
      }
    } catch (err) {
      console.log(err);
      return { message: "An error occurred while fetching the student data" };
    }
  }
);

export const editStudentAsync = createAsyncThunk(
  "edit/student",
  async (student) => {
    const { id, firstName, lastName, email, gpa, imageUrl } = student;
    const updatedStudent = { firstName, lastName, email, gpa, imageUrl };
    const { data } = await axios.put(`/api/students/${id}`, updatedStudent);
    return data;
  }
);
const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudent.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export const selectSingleStudentCampus = (state) => {
  return state.singleStudent.campus;
};

export default singleStudentSlice.reducer;
