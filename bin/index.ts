#! /usr/bin/env node
const yargs = require("yargs");

const usage = "\nUsage: Geocode addresses using Google API";
const options = yargs
    .usage(usage)
    .option('address', {alias: 'a', type: 'string', description: 'Address to geocode', demandOption: true})
    .help(true)
    .argv;

require('dotenv').config()
const request = require('request');
const baseUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${options.address}&key=${process.env.GOOGLE_API_KEY}`;

request(baseUrl, (error, response, body) => {
    console.log(JSON.parse(body).results[0].geometry.location);
})
