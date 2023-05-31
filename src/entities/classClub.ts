import { area } from "../interfaces/area";
export class classClub {
  id: number;
  area: area;
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
  constructor(
    id: number,
    area: area,
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string,
    address: string,
    phone: string,
    website: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: string
  ) {
    this.id = id;
    this.area = area;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.crestUrl = crestUrl;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.founded = founded;
    this.clubColors = clubColors;
    this.venue = venue;
    this.lastUpdated = lastUpdated;
  }
}
