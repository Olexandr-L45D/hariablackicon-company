import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://script.google.com/macros/s/AKfycbybkL1F_38gHfS0_H13ykUfT0Lw3u88Xd7GY9ZvWpdPIyczNS2VibkwXVvo5QIKUFKPIw/exec";

// ===== GET ALL ITEMS =====

export const fetchAllTruck = createAsyncThunk(
  "campers/fetchAllTruck",

  async ({ page = 1 }, { thunkAPI, getState }) => {
    try {
      const filter = getState().filters.filters;
      const response = await axios.get("", {
        params: {
          page,
          filter,
          limit: 4,
        },
      });
      console.log("Fetched Items в Операції ГЕТ:", response.data);

      return response.data; //було так тут буде масив
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ===== GET BY ID =====
export const findTruckById = createAsyncThunk(
  "campers/findTruckById",

  async (id, thunkAPI) => {
    try {
      // У GAS ТІЛЬКИ ТАК:
      const response = await axios.get("", {
        params: { id },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response?.status,
        message: error.message,
      });
    }
  }
);
// верхні 2 поки коментую потім заміню
// імпортую нову функцію перекладу для нових джейсон файлів в папці :public/data/projectProductTable.en.json
// import { getProductsFile } from "../../../i18n.js"; // або з utils якщо виніс

// export const fetchAllTruck = createAsyncThunk(
//   "campers/fetchAllTruck",
//   async ({ page = 1 }, { thunkAPI, getState }) => {
//     try {
//       // ✅ отримуємо правильний файл по мові
//       const file = getProductsFile();

//       const response = await fetch(file);
//       const data = await response.json();

//       const filter = getState().filters.filters;

//       // 🔎 ФІЛЬТРАЦІЯ
//       const filtered = data.filter(item => {
//         if (filter.category && item.category !== filter.category) {
//           return false;
//         }
//         if (filter.subcategory && item.subcategory !== filter.subcategory) {
//           return false;
//         }
//         return true;
//       });

//       // 📄 ПАГІНАЦІЯ
//       const limit = 8;
//       const start = (page - 1) * limit;
//       const end = start + limit;

//       const paginated = filtered.slice(start, end);

//       return paginated; // ✅ МАСИВ (як і було потрібно)
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// // запит по айді одного продукта на FenDetails
// export const findTruckById = createAsyncThunk(
//   "campers/findTruckById",
//   async (id, thunkAPI) => {
//     try {
//       // ✅ той самий підхід
//       const file = getProductsFile();

//       const response = await fetch(file);
//       const data = await response.json();

//       const item = data.find(el => String(el.id) === String(id));

//       return item;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.message,
//       });
//     }
//   }
// );
// нові машрути
// heat/:id HeatExchangeDetails
//valve/:id ValveDetails

// запит по айді одного продукта на HeatExchangeDetails
export const findHeatExchangeById = createAsyncThunk(
  "campers/findHeatExchangeById",
  async (id, thunkAPI) => {
    try {
      // У GAS ТІЛЬКИ ТАК:
      const response = await axios.get("", {
        params: { id },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
      });
    }
  }
);
// export const findHeatExchangeById = createAsyncThunk(
//   "campers/findHeatExchangeById",
//   async (id, thunkAPI) => {
//     try {
//       // ✅ той самий підхід для HeatExchangeDetails
//       const file = getProductsFile();

//       const response = await fetch(file);
//       const data = await response.json();

//       const item = data.find(el => String(el.id) === String(id));

//       return item;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.message,
//       });
//     }
//   }
// );
// запит по айді одного продукта на ValveDetails
export const findValveDetailsById = createAsyncThunk(
  "campers/findValveDetailsById",
  async (id, thunkAPI) => {
    try {
      // У GAS ТІЛЬКИ ТАК:
      const response = await axios.get("", {
        params: { id },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.message,
      });
    }
  }
);

// export const findValveDetailsById = createAsyncThunk(
//   "campers/findValveDetailsById",
//   async (id, thunkAPI) => {
//     try {
//       // ✅ той самий підхід ValveDetails
//       const file = getProductsFile();

//       const response = await fetch(file);
//       const data = await response.json();

//       const item = data.find(el => String(el.id) === String(id));

//       return item;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({
//         message: error.message,
//       });
//     }
//   }
// );

// додаткові функції
const translateText = async (text, targetLanguage) => {
  if (!text || text.trim() === "") {
    console.warn("Немає тексту для перекладу");
    return text;
  }

  // Додаємо перевірку на наявність спецсимволів (email, числа, ім'я без пробілів)
  if (
    text.includes("@") ||
    /^\d+$/.test(text) ||
    text.split(" ").length === 1
  ) {
    console.warn("Можливо, це ім'я, число, email. Пропускаємо переклад.");
    return text;
  }

  try {
    const response = await fetch(
      `https://lingva.ml/api/v1/translate/en/${targetLanguage}/${encodeURIComponent(
        text
      )}`
    );

    if (!response.ok) {
      throw new Error(`HTTP помилка! Статус: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.translation) {
      console.error("Помилка перекладу: некоректні дані від API", data);
      return text;
    }

    return data.translation;
  } catch (error) {
    console.error("Помилка запиту:", error);
    return text;
  }
};

// Функція для отримання контактів з бекенду і перекладу їх
export const fetchAllTruckLanguage = createAsyncThunk(
  "campers/fetchAllTruck",
  async (_, { thunkAPI, getState }) => {
    try {
      const response = await axios.get("/campers");
      const campers = response.data;

      // Отримуємо поточну мову з Redux (з дефолтним значенням)
      const currentLanguage = getState().language || "en";

      if (currentLanguage === "en") {
        return campers; // Якщо англійська, не перекладаємо
      }

      // Перекладемо на поточну мову
      const translatedCampers = await Promise.all(
        campers.map(async camper => ({
          ...camper,
          name: await translateText(camper.name, currentLanguage),
        }))
      );

      return translatedCampers;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
