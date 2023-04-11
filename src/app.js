export default function characterSorting(data) {
  return data.sort((a, b) => (a.health < b.health ? 1 : -1));
}
