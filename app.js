const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
       a: {
           demand: true,
           alias: 'address',
           describe: 'Address to fetch weather for',
           string: true
       }
    })
    .help()
    .alias('h', 'help')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);

request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyA9KBiF2lX5Rj9ehCaNAhSkws2ln2mvsic`,
        json: true
    },
    (error, response, body) => {
    if(error) {
        console.log('Unable to connect Google servers');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find that address');
    } else {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log(`Address: ${JSON.stringify(body.results[0].formatted_address, undefined, 2)}`); // Print the HTML for the Google homepage.
        console.log(`Latitude: ${JSON.stringify(body.results[0].geometry.location.lat, undefined, 2)}`);
        console.log(`Longitude: ${JSON.stringify(body.results[0].geometry.location.lng, undefined, 2)}`);
    }
});
