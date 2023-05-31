export const selectClub = (id: number, listOfClubs: object[]): object => {
  const club: object = listOfClubs.filter((clubs: any) => clubs.id === id)[0];
  return club;
};
