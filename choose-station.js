let stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['A', 10, 'school'],
  ['B', 9, 'restaurant'],
  ['C', 21, 'community centre'],
  ['D', 15, 'school'],
  ['E', 50, 'restaurant'],
  ['F', 20, 'school'],
  ['G', 40, 'community centre'],
  ['H', 50, 'school']
];

function chooseStations(stations) {
  const goodStations = [];

  for (const station of stations) {
    const capacity = station[1];
    const type = station[2];
    if ((capacity >= 20) && (type == 'school' || 'community centre')) {
      goodStations.push(station[0]);
    }  
  }
  return goodStations;
}
chooseStations(stations);



