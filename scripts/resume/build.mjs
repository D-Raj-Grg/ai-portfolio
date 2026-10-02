// Renders scripts/resume/resume.html to public/resume.pdf with headless Chromium.
// Usage: pnpm resume   (set CHROMIUM_PATH to use a specific Chromium binary)
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, "resume.html");
const out = path.join(here, "..", "..", "public", "resume.pdf");

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
const page = await browser.newPage();
await page.goto(pathToFileURL(src).href, { waitUntil: "load" });
await page.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log(`Wrote ${path.relative(process.cwd(), out)}`);
