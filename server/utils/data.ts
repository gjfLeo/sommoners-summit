import path from "node:path";
import fs from "node:fs";
import fse from "fs-extra";

export function readData<R, P extends string = string>(dataPath: P): R | undefined;
export function readData<R, P extends string = string>(dataPath: P, defaultData: R): R;
export function readData<R, P extends string = string>(dataPath: P, defaultData?: R): R | undefined {
  const filePath = path.resolve("server/data", `${dataPath}.json`);
  if (!fse.existsSync(filePath)) {
    return defaultData;
  }
  return fse.readJsonSync(filePath) as R ?? defaultData;
}

export function readDataList<R, P extends string = string>(dataPath: P): R[] {
  const dirPath = path.resolve("server/data", `${dataPath}`);
  return fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(file => file.isFile() && file.name.endsWith(".json"))
    .filter(file => !file.name.startsWith("_"))
    .map((file) => {
      const filePath = path.resolve(dirPath, file.name);
      return fse.readJsonSync(filePath) as R;
    });
}

export function writeData<R, P extends string = string>(dataPath: P, data: R): void {
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.ensureDirSync(path.dirname(fullPath));
  fse.writeJsonSync(fullPath, data, { spaces: 2 });
}

export function deleteData<P extends string = string>(dataPath: P): void {
  const fullPath = path.resolve("server/data", `${dataPath}.json`);
  fse.removeSync(fullPath);
}
