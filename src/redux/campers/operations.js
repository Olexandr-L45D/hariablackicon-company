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

// export const fetchAllTruck = createAsyncThunk(
//   "campers/fetchAllTruck",

//   async ({ page = 1 }, { thunkAPI, getState }) => {
//     try {
//       const filter = getState().filters.filters;

//       const response = await axios.get("/", {
//         params: {
//           page,
//           filter,
//           limit: 4,
//         },
//       });

//       return response.data;
//       // `axios` автоматично повертає вже розпарсений JSON у response.data
//     } catch (e) {
//       // При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const findTruckById = createAsyncThunk(
//   "campers/findTruckById",
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.get("/", { params: { id } });
//       return response.data; // Повертаємо об'єкт, який прийшов із сервера
//     } catch (error) {
//       // Перевіряємо, чи це AxiosError, і передаємо серіалізовану інформацію
//       return thunkAPI.rejectWithValue({
//         status: error.response?.status,
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
