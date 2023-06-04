import * as fs from "node:fs";
import { Club } from "../interfaces/club";

export const saveClub = (file: string, club: Club): void => {
  const clubes = JSON.parse(fs.readFileSync(file, "utf-8"));
  clubes.push(club);
  fs.writeFileSync(file, JSON.stringify(clubes));
};
