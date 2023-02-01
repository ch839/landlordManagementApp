import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  campus: {},
};

export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      if (data) {
        return data;
      } else {
        return { message: "This campus does not exist." };
      }
    } catch (err) {
      console.error(err);
      return { message: "An error occurred while fetching the campus data." };
    }
  }
);

export const editCampusAsync = createAsyncThunk(
  "edit/campus",
  async (campus) => {
    const { id, name, imageUrl, address, description } = campus;
    const updatedCampus = { name, imageUrl, address, description };
    console.log(updatedCampus, "updatedCampus");
    console.log(campus, "Campus");
    const { data } = await axios.put(`/api/campuses/${id}`, updatedCampus);

    return data;
  }
);
const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleCampus = (state) => {
  return state.singleCampus;
};

export default singleCampusSlice.reducer;
