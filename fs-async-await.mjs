import fs from "node:fs/promises";

console.log("leyendo el primer archivo.........");
const text = await fs.readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("leyendo el segundo archivo.........");
const text2 = await fs.readFile("./archivo2.txt", "utf-8");
console.log(text2);
