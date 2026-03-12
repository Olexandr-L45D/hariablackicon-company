import { createSelector } from "reselect";

// Основний селектор витяжок

export const selectTrucks = state =>
  state.campers.items.filter(truck => truck.id && truck.name && truck.category);

// Основний селектор фільтрів
export const selectFilters = state => state.filters.filters;

// export const selectFilteredByCategory = createSelector(
//   [selectTrucks, state => state.filters.filters.category],
//   (trucks, category) => {
//     if (!category) return trucks;

//     return trucks.filter(
//       truck => truck.category?.toLowerCase() === category.toLowerCase()
//     );
//   }
// );
export const selectFilteredByCategory = state => {
  console.log("STATE items:", state.campers.items);
  console.log("STATE category:", state.filters.filters.category);

  const category = state.filters.filters.category;

  if (!category) {
    console.log("➡️ no category filter — return ALL items");
    return state.campers.items;
  }

  return state.campers.items.filter(
    item => item.category?.toLowerCase() === category.toLowerCase()
  );
};

// Селектор фільтрації вантажівок за вибраними чекбоксами
export const selectFilteredTrucks = createSelector(
  [selectFilteredByCategory, selectFilters],
  (trucks, filters) => {
    if (!filters) return trucks;

    // Фільтруємо вантажівки за активними чекбоксами
    const activeFilters = Object.keys(filters).filter(
      key => filters[key] === true && key !== "category"
    );

    if (activeFilters.length === 0) return trucks;

    return trucks.filter(truck => activeFilters.every(filter => truck[filter]));
  }
);

// import { createSelector } from "@reduxjs/toolkit";
// // export const selectStatusFilter = state => state.filters.filters;
// // export const selectStatusFilter = state => state.filters || { filters: {} };
// export const selectItems = state => state.campers.items || [];
// // export const selectFilters = state => state.campers.filters;
// export const selectFilters = state => state.filters.filters || {};
// // export const selectItems = state => {
// //   console.log("До фільтрування (selectItems):", state.campers.items);
// //   return state.campers.items;
// // };

// export const selectFilteredItems = createSelector(
//   [selectItems, selectFilters],
//   (items, filters) => {
//     if (!items || items.length === 0) return [];
//     return items.filter(item => {
//       return (
//         (!filters.location || item.location.includes(filters.location)) &&
//         (!filters.kitchen || item.kitchen === filters.kitchen)
//         // Додайте інші фільтри тут...
//       );
//     });
//   }
// );

// export const selectFilteredItems = createSelector(
//   [selectItems, selectFilters],
//   (items, filters) => {
//     console.log("Фільтри в selectFilteredItems:", filters);
//     // console.log("До фільтрування:", items);

//     if (!items || items.length === 0) return [];
//     return items.filter(item => {
//       return !filters.location || item.location.includes(filters.location);
//       // return item.location.includes(filters.location);
//     });
//   }
// );
