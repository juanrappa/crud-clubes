import * as fs from "node:fs";
import { Club } from "../interfaces/club";

export const deleteClub = (file: string, id: number): void => {
  const clubes: Club[] = JSON.parse(fs.readFileSync(file, "utf-8"));
  const newClubes: string = JSON.stringify(
    clubes.filter((club: Club) => {
      club.id !== id;
    })
  );
  fs.writeFileSync(file, newClubes);
};
