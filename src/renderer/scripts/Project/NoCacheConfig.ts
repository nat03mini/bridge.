import { promises as fs } from "fs";
import path from "path";
import { CURRENT } from "../constants";
import FileType from "../editor/FileType";

export async function getNoCacheFiles() {
    try {
        return (await fs.readFile(path.join(CURRENT.PROJECT_PATH, ".no-cache"))).toString("utf-8").split("\n");
    } catch {
        return [];
    }
}

export async function useCache(file_path: string) {
    return !(await getNoCacheFiles()).includes(FileType.get(file_path));
}