import path from "path";
import fs from "fs";
import * as matter from "gray-matter";
import { parse } from "marked";

export async function getHomeData() {
  const filePath = path.join(process.cwd(), "src", "content", "about.md");
  const file = fs.readFileSync(filePath, "utf8");
  const parsed = matter.default(file);
  const html = await parse(parsed.content);
  return {
    data: parsed.data,
    content: html,
  };
}
