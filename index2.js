const {  nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
    console.log(passTimes);
})
.catch((err) => {
    console.log('It didn\'t work', err);
});


