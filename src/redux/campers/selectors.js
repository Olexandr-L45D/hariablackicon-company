import { createSelector } from "reselect";

export const selectLoading = state => state.campers.loading;

export const selectFilter = state => state.campers.filter;

export const selectError = state => state.campers.error;

export const selectTrucs = state => state.campers.items;

export const selectPage = state => state.campers.page;

export const selectOutCampers = createSelector(
  [selectTrucs, state => state.filters.filters],
  (campers, filters) => {
    if (!filters || !filters.category) return campers;

    return campers.filter(camper =>
      camper.category.toLowerCase().includes(filters.category.toLowerCase())
    );
  }
);

// export const selectOutCampers = createSelector(
//   [selectTrucs, selectFilteredItems],
//   (campers, filter) => {
//     if (!Array.isArray(campers)) {
//       console.warn("Trucks is not an array:", campers);
//       return [];
//     }
//     return campers.filter(camper =>
//       camper.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
