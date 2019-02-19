const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        weather.fetchWeather(
            results.latitude,
            results.longitude,
            (errorMessage, weatherResult) => {
                if(errorMessage) {
                    console.log(errorMessage)
                } else {
                    console.log(
                        `Currently weather in ${JSON.stringify(results.address, undefined, 2)} - ${weatherResult.temperature}, but feels like - ${weatherResult.apparentTemperature}`
                    );
                }
        });
    }
});

