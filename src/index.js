import express from "express";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import "dotenv/config";

const app = express();

app.use(
	express.static(join(dirname(fileURLToPath(import.meta.url)), "../public/"))
);

app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${process.env.PORT}`);
	console.log(`http://localhost:${process.env.PORT}`);
});
