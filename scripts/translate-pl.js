// scripts/translate-pl.js
import fs from "fs";
import translate from "translate-google";

const sourcePath = "./public/locales/en/common.json";
const targetPath = "./public/locales/pl/common.json";

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Source file not found: ${sourcePath}`);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const result = {};

async function walk(obj, res) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      res[key] = await translate(obj[key], { to: "pl" });
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      res[key] = {};
      await walk(obj[key], res[key]);
    }
  }
}

(async () => {
  console.log("🇵🇱 Translating EN → PL...");
  await walk(source, result);

  fs.mkdirSync("./public/locales/pl", { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(result, null, 2), "utf8");

  console.log("✅ Polish translation generated:", targetPath);
})();
