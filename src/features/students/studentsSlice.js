import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  try {
    const response = await axios.get(`/api/students`);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const addStudentAsync = createAsyncThunk(
  "students/addStudent",
  async ({ firstName, lastName, email, gpa }) => {
    const { data } = await axios.post(`/api/students`, {
      firstName,
      lastName,
      email,
      gpa,
    });
    console.log("this is the data", data);
    return data;
  }
);

export const deleteStudentAsync = createAsyncThunk(
  "delete/campus",
  async (id) => {
    const { data } = await axios.delete(`/api/students/${id}`);
    return data;
  }
);
const studentsSlice = createSlice({
  name: "allStudents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addStudentAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });

    builder.addCase(deleteStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentsSlice.reducer;
