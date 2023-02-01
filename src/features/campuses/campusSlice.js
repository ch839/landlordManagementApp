import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  try {
    const response = await axios.get("/api/campuses");
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const addCampusAsync = createAsyncThunk(
  "campuses/addCampus",
  async ({ name, address }) => {
    const { data } = await axios.post("/api/campuses", {
      name,
      address,
    });
    console.log("this is the data", data);
    return data;
  }
);

export const deleteCampusAsync = createAsyncThunk(
  "delete/campus",
  async (id) => {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    return data;
  }
);
const campusesSlice = createSlice({
  name: "allCampuses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(addCampusAsync.fulfilled, (state, action) => {
      state.push(action.payload);
      console.log("action payload", action.payload);
    });

    builder.addCase(deleteCampusAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
