import { defaultLang, routes } from "./src/i18n/ui.js";
import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

const pagesDir = path.resolve("src", "pages");

const langCodes = Object.keys(routes).filter((code) => code !== defaultLang);

async function cleanTranslationFolders() {
  const entries = await fs.readdir(pagesDir, { withFileTypes: true });

  const foldersToDelete = entries
    .filter((dirent) => dirent.isDirectory() && langCodes.includes(dirent.name))
    .map((dirent) => path.join(pagesDir, dirent.name));

  for (const folder of foldersToDelete) {
    try {
      await fs.rm(folder, { recursive: true, force: true });
      console.log(`[i18n - CleanUp] ✅ Deleted folder: ${folder}`);
    } catch (err) {
      console.error(
        `[i18n - CleanUp] ❌ Failed to delete folder ${folder}:`,
        err
      );
    }
  }
}

async function translatePageFiles(srcPath) {
  try {
    const filenames = await fs.readdir(srcPath);

    for (const filename of filenames) {
      const srcFilePath = path.join(srcPath, filename);

      if (await isDirectory(srcFilePath)) continue;
      const langCode = langCodes[0];
      const destPath = path.join(srcPath, langCode);
      const [newFileName, extension] = filename.split(".");
      const newRoute = routes[langCode][newFileName] + "." + extension;
      const destFilePath = path.join(destPath, newRoute);

      if (!existsSync(destPath)) {
        await fs.mkdir(destPath, { recursive: true });
      }

      const srcFileContent = await fs.readFile(srcFilePath, {
        encoding: "utf-8",
      });
      const destFileContent = srcFileContent.replace(
        /(["'`])\.\.\//g,
        "$1../../"
      );
      await fs.writeFile(destFilePath, destFileContent);
      console.log(
        `[i18n - Translation] ✅ Created: \\${langCode}\\${newRoute}`
      );
    }
  } catch (err) {
    console.log(`[i18n - Translation] ❌ Error translating pages: ${err}`);
  }
}

async function isDirectory(path) {
  const stat = await fs.stat(path);
  return stat.isDirectory();
}

cleanTranslationFolders().then(() => translatePageFiles(pagesDir));
