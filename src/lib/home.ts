import path from "path";
import fs from "fs";
import { parse } from "marked";

export async function getHomeData() {
  const filePath = path.join(process.cwd(), "src", "content", "about.md");
  const file = fs.readFileSync(filePath, "utf8");

  const parsedMd = parse(file);

  return parsedMd;
}
