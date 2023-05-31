import { Club } from "../interfaces/club";
export const createClub = (
  id: number,
  classClub: any,
  listOfClubs: object[],
  selectClub: Function
) => {
  const clubSelected: Club = selectClub(id, listOfClubs);
  const club: Club = new classClub(
    clubSelected.id,
    clubSelected.area,
    clubSelected.name,
    clubSelected.shortName,
    clubSelected.tla,
    clubSelected.crestUrl,
    clubSelected.address,
    clubSelected.phone,
    clubSelected.website,
    clubSelected.email,
    clubSelected.founded,
    clubSelected.clubColors,
    clubSelected.venue,
    clubSelected.lastUpdated
  );
  return club;
};
