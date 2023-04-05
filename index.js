const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
    if (error) {
        console.log('It didn\'t work', error);
        return;
    }
    console.log('Your IP address is:', ip);


fetchCoordsByIP(ip, (error, data) => {
    if (error) {
        console.log('There is error to get coordinates', error);
        return;
    }
    console.log('Your coordinate is: ', data);
});
});