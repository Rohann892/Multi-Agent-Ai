import { cert, initializeApp } from "firebase-admin/app";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../serviceAccountKey.json"), "utf8")
);

export const app = initializeApp({
    credential: cert(serviceAccount)
});
