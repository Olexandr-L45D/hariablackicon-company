import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    category: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      const { filterName, value } = action.payload;
      state.filters = { ...state.filters, [filterName]: value };
    },

    // встановлюєм всі фільтри разом
    setChangeFilter(state, action) {
      const newFilters = action.payload;

      // нормалізація, щоб не було undefined або {}
      state.filters = {
        category: newFilters?.category || "",
      };
    },

    resetFilters(state) {
      state.filters = { category: "" };
    },
  },
});

export const { setChangeFilter, setFilter, resetFilters } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
