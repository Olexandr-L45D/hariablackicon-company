// scripts/translate-it.js
import fs from "fs";
import translate from "translate-google";

const sourcePath = "./public/locales/en/common.json";
const targetPath = "./public/locales/it/common.json";

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Source file not found: ${sourcePath}`);
}
const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
// ✅ ПІДТЯГУЄМО ІСНУЮЧИЙ ПЕРЕКЛАД якщо новий ключь то перекладаю
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

      targetObj[key] = await translate(sourceObj[key], { to: "it" });
    } else {
      if (!targetObj[key]) targetObj[key] = {};
      await walk(sourceObj[key], targetObj[key]);
    }
  }
}
(async () => {
  console.log("🇮🇹 Translating EN → IT...");
  await walk(source, existing);

  fs.mkdirSync("./public/locales/it", { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(existing, null, 2), "utf8");

  console.log("✅ Italian translation updated and new generated:", targetPath);
})();

// async function walk(obj, res) {
//   for (const key in obj) {
//     if (typeof obj[key] === "string") {
//       res[key] = await translate(obj[key], { to: "it" });
//     } else {
//       res[key] = {};
//       await walk(obj[key], res[key]);
//     }
//   }
// }
