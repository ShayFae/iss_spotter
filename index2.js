// const { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised')

//  fetchMyIp() 
//   .then(fetchCoordsByIp)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));
  
  nextISSTimesForMyLocation()
    .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })