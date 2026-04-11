// scripts/translate-products-it.js
import fs from "fs";
import translate from "translate-google";

const sourcePath = "./public/data/projectProductsTable.en.json";
const targetPath = "./public/data/projectProductsTable.it.json";

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Source file not found: ${sourcePath}`);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf-8"));

async function translateItem(item) {
  const newItem = {};

  for (const key in item) {
    const value = item[key];
    // ✅ перекладаємо тільки строки
    if (typeof value === "string" && value.trim() !== "") {
      try {
        newItem[key] = await translate(value, { to: "it" });
      } catch (e) {
        console.log("Error:", key, e);
        newItem[key] = value;
      }
    } else {
      newItem[key] = value;
    }
  }
  return newItem;
}

async function run() {
  console.log("🇮🇹 Translating products EN → IT...");

  const result = [];

  for (const item of source) {
    const translated = await translateItem(item);
    result.push(translated);
    // анти-блок
    await new Promise(r => setTimeout(r, 100));
  }

  fs.writeFileSync(targetPath, JSON.stringify(result, null, 2), "utf8");
  // console.log("Translating item:", item.id);

  console.log("✅ Italian products generated:", targetPath);
}

run();
