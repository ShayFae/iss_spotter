const request = require('request-promise-native');

// const fetchMyIp = function() {
//   return request('https://api.ipify.org?format=json')
// };

// const fetchCoordsByIp = function(body) {
//   const ip = JSON.parse(body).ip;
//   return request(`https://freegeoip.app/json/${ip}`)
// };

// const fetchISSFlyOverTimes = function(body) {
//   const { latitude, longitude } = JSON.parse(body);
//   // request(`https://iss-pass.herokuapp.com/json/?lat=${location.latitude}&lon=${location.longitude}`)
//   const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
//   return request(url);
// };

const nextISSTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation }
// module.exports = { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes };