const moment = require('moment');
const request = require('request-promise-native');

async function main() {

    try {

        let data = require('./default.json');

        let interval = setInterval(() => {

            data.endpoints.forEach(endpoint => {

                for (let i = 0; i < endpoint.load; i++) {
                    
                    console.log(`${moment()}: Success: [${endpoint.url}]`);

                    request(endpoint.url).catch(err => {
                        console.log(`${moment()}: Failed: [${err.message}]`);
                    });
                }

            });

        }, data.requestInterval);


    } catch (err) {
        console.log(err.message);
    }
}

main();