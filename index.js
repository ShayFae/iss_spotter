/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIp } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

const exampleCoordsGiven = { latitude: '49.27670', longitude: '-123.13000' };

// fetchCoordsByIp('76.25.248.61', (error, location) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned Location:' , location);
// });

fetchISSFlyOverTimes(exampleCoordsGiven,(error, passedTime) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned ISS fly over times:' , passedTime);
});