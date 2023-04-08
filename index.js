const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
    if (error) {
        console.log('It didn\'t work', error);
        return;
    }
    console.log('Your IP address is:', ip);


    fetchCoordsByIP(ip, (error, coords) => {
        if (error) {
            console.log('There is error to get coordinates', error);
            return;
        }
        console.log('Your coordinate is: ', coords);


        fetchISSFlyOverTimes(coords, (cordsError, output) => {
            // console.log('response is: ', cordsError.message);
            if (cordsError) {
                console.log('It didn\'t work', cordsError);
                return;
            }
            console.log('Flyeouver time:', output);
        });
    });
});