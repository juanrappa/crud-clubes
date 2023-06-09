import * as fs from "node:fs";
import { Club } from "../interfaces/club";

export const deleteClub = (file: string, id: number): void => {
  const clubes: Club[] = JSON.parse(fs.readFileSync(file, "utf-8"));
  const newClubes: any = clubes.filter((club: Club) => {
    return club.id !== id;
  });
  const stringify = JSON.stringify(newClubes);
  fs.writeFileSync(file, stringify);
};
