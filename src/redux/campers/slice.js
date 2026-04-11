import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllTruck,
  findTruckById,
  findHeatExchangeById,
  findValveDetailsById,
} from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    loading: false,
    isFetched: false,
    error: null,
    selectedTruck: null, // Для збереження деталей вантажівки
    isBooked: false,
    totalpages: 1,
    page: 1,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllTruck.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAllTruck.fulfilled, (state, action) => {
        console.log("Fetched SLICE Items:", action.payload);
        state.items = action.payload; // <-- це масив з 37 елементів
        state.error = null;
        state.loading = false;
      })
      .addCase(fetchAllTruck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(findTruckById.pending, state => {
        state.loading = true;
      })
      .addCase(findTruckById.fulfilled, (state, action) => {
        state.selectedTruck = action.payload; // Зберігаємо деталі вантажівки
        state.loading = false;
        state.error = null;
      })
      .addCase(findTruckById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Серіалізовані дані про помилку
      })
      // add new endpoint/redax - findHeatExchangeById
      .addCase(findHeatExchangeById.pending, state => {
        state.loading = true;
      })
      .addCase(findHeatExchangeById.fulfilled, (state, action) => {
        state.selectedTruck = action.payload; // Зберігаємо деталі findHeatExchangeById
        state.loading = false;
        state.error = null;
      })
      .addCase(findHeatExchangeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Серіалізовані дані про помилку
      })
      // add new findValveDetailsById
      .addCase(findValveDetailsById.pending, state => {
        state.loading = true;
      })
      .addCase(findValveDetailsById.fulfilled, (state, action) => {
        state.selectedTruck = action.payload; // Зберігаємо деталі findValveDetailsById
        state.loading = false;
        state.error = null;
      })
      .addCase(findValveDetailsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Серіалізовані дані про помилку
      });
  },
});

export default campersSlice.reducer;
