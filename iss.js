const request = require('request');

// const fetchMyIP = function(callback) {
//   request('https://api.ipify.org?format=json', (error, response, body) => {
//     const ip = JSON.parse(body).ip;
//     if (error) {
//       return callback(error, null);
//     }
//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching IP. Response: ${body}`), null);
//       return;
//     }
//     callback(null, ip);
// });

// };


const fetchCoordsByIp = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    // const data = JSON.parse(body);
    // for(let i = 0; i < data; i++) {
    // console.log(data[0].latitude, data[0].longitude)
    // }
    const { latitude, longitude } = JSON.parse(body);
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coords. Response: ${body}`), null);
      return;
    }
    callback(null, { latitude, longitude });
  });
};

module.exports = { fetchCoordsByIp };
// module.exports = { fetchMyIP };