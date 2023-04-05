const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
    // use request to fetch IP address from JSON API

    request('https://api.ipify.org?format=json', function (error, response, body) {
        if (error) {
            callback(error, null);
            return;
        }

        if (response.statusCode !== 200) {
            const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
            callback(Error(msg), null);
        }
        callback(null, JSON.parse(body).ip);
    });
}

const fetchCoordsByIP = function (ip, callback) {
    request(`http://ipwhois.app/json/${ip}`, function (error, res, body) {

        if (error) {
            callback(error, null);
            return;
        }
        const parsedBody = JSON.parse(body);
        // check if "success" is true or not
        if (!parsedBody.success) {
            const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
            callback(Error(message), null);
            return;
        }

        const { latitude, longitude } = parsedBody;
        callback(null, { latitude, longitude });
    });
}

module.exports = { fetchMyIP, fetchCoordsByIP };