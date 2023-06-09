import { area } from "../interfaces/area";
import { Club } from "../interfaces/club";

export const createNewClub = (classClub: any, body: any, img: any): Club => {
  const id = Number(body.id);
  const area: area = { id: Number(body.areaId), name: body.areaName };
  const name = body.name;
  const shortName = body.shortName;
  const tla = body.tla;
  const address = body.address;
  const phone = body.phone;
  const website = body.website;
  const email = body.website;
  const founded = body.founded;
  const clubColors = body.clubColors;
  const venue = body.venue;
  const lastUpdated = body.lastUpdated;
  const crestUrl = img;

  const newClub = new classClub(
    id,
    area,
    name,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    lastUpdated
  );
  return newClub;
};
