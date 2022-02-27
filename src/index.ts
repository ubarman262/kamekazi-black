import fs, { writeFile } from "fs";
import path from "path";
import ui from "./ui";
import setting from "./setting";
import TokenColor from "./theme";
import TokenColorItalic from "./themeItalic";
// Theme Directory
const THEME_DIR = path.join(__dirname, "..", "themes");

function makeTheme(name: string, italic?: string): void {
  // check if theme directory is exist
  if (!fs.existsSync(THEME_DIR)) {
    fs.mkdirSync(THEME_DIR);
  }
  // check if it is italic or not
  const themeTemplate = italic ? TokenColorItalic : TokenColor;
  const Theme = {
    ...setting,
    semanticHighlighting: true,
    colors: ui,
    tokenColors: themeTemplate,
  };

  writeFile(`${THEME_DIR}/theme-${name}.json`, JSON.stringify(Theme), (err) => {
    if (err) console.log("error", err);
  });
}

// Theme
makeTheme("color");
makeTheme("color-italic", "italic");
