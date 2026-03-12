// scripts/translate-it.js
import fs from "fs";
import translate from "translate-google";

const sourcePath = "./public/locales/en/common.json";
const targetPath = "./public/locales/it/common.json";

// if (!fs.existsSync(sourcePath)) {
//   console.error("❌ Source file not found:", sourcePath);
//   process.exit(1);
// }
if (!fs.existsSync(sourcePath)) {
  throw new Error(`Source file not found: ${sourcePath}`);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const result = {};

async function walk(obj, res) {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      res[key] = await translate(obj[key], { to: "it" });
    } else {
      res[key] = {};
      await walk(obj[key], res[key]);
    }
  }
}

(async () => {
  console.log("🇮🇹 Translating EN → IT...");
  await walk(source, result);

  fs.mkdirSync("./public/locales/it", { recursive: true });
  fs.writeFileSync(targetPath, JSON.stringify(result, null, 2), "utf8");

  console.log("✅ Italian translation generated:", targetPath);
})();
