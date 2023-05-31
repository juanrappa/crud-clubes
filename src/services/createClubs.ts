import { Club } from "../interfaces/club";
export const createClubs = (
  listOfClubs: object[],
  createClub: Function,
  classClub: any,
  selectClub: Function
): Club[] => {
  const clubs: Club[] = listOfClubs.map(
    (club: any): Club => createClub(club.id, classClub, listOfClubs, selectClub)
  );
  return clubs;
};
