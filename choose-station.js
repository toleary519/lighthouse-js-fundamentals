let chooseStations = function (stations) {
  let goodStations = ""
  for (station of stations) {
    if (station[2] >= 20 && station[3] === 'school' || 'community centre')
    return station[1];
    goodStations = station[1] += stations;
  }
return goodStations;
}
console.log(chooseStations(stations));