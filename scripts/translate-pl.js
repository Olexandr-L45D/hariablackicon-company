// scripts/translate-pl.js
import fs from "fs";
import translate from "translate-google";

const sourcePath = "./public/locales/en/common.json";
const targetPath = "./public/locales/pl/common.json";

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Source file not found: ${sourcePath}`);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));

const existing = fs.existsSync(targetPath)
  ? JSON.parse(fs.readFileSync(targetPath, "utf8"))
  : {};

async function walk(sourceObj, targetObj) {
  for (const key in sourceObj) {
    if (typeof sourceObj[key] === "string") {
      // ✅ якщо вже є переклад — не чіпаємо
      if (targetObj[key]) {
        continue;
      }

      targetObj[key] = await translate(sourceObj[key], { to: "pl" });
    } else {
      if (!targetObj[key]) targetObj[key] = {};
      await walk(sourceObj[key], targetObj[key]);
    }
  }
}
(async () => {
  console.log("🇮🇹 Translating EN → PL...");
  await walk(source, existing);

  fs.mkdirSync("./public/locales/pl", { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(existing, null, 2), "utf8");

  console.log("✅ Poland translation updated and new generated:", targetPath);
})();
