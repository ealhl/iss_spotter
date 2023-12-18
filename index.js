// index.js
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP(ip, (error, coords) => {
//   if (error) {
//     console.log("It didn't work for fetchCoords By IP!");
//     return;
//   }
//   console.log("It worked! Returned Coords:", coords);
// });

// fetchISSFlyOverTimes(coords, (error, response) => {
//   if (error) {
//     console.log("It didn't work for fetchCoords By Coords!");
//     return;
//   }
//   console.log("It worked! Returned result:", response);
// });

const printPassTimes = function (result) {
  for (const pass of result) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
