
// Convert wind direction to compass
function compass(windDirection) {
  const compassSectors = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];

  
  // Dividing windDirection by 22.5 (degrees for each sector) to get numbers ranging from 0 to 16
  let index = windDirection % 360;
  index = Math.round(index / 22.5);
  const compassDirection = compassSectors[index];

  return compassDirection
}

export default compass