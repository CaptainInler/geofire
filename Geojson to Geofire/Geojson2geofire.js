'use strict';

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let data = {
getSavedNotes: function() {

    let xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    let data = null;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            data = this.responseText;
        }
    });

    xhr.open("GET", "/test.json", false);
    // cache-control nicht erlaubt wenn allowCrossDomain aktiv ist
    // xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();

    return data;
},};

// data.getSavedNotes();
// let jsonParsed = JSON.parse(data.getSavedNotes());
// console.log(jsonParsed.features[0]);


// Define JSON File
let obj = require("./baumkataster.json");
let qwer = obj.features;
console.log(typeof(qwer));


let geohash = require('ngeohash');

let geohashes = new Object();

for(let k in qwer) {


    console.log(qwer[k].properties.baumnummer);
    console.log(geohash.encode(qwer[k].geometry.coordinates[0], qwer[k].geometry.coordinates[1]));
    console.log(qwer[k].geometry.coordinates);
    let objname = qwer[k].properties.baumnummer;


    let obj = new Object();
    obj["g"] = geohash.encode(qwer[k].geometry.coordinates[0], qwer[k].geometry.coordinates[1]);
    obj["l"] = qwer[k].geometry.coordinates;
    geohashes[objname] = obj;

}

// schreiben in die inputdatei:

obj["GeoHashes"] = geohashes
let json = JSON.stringify(obj);

// schreiben in eine neue Datei
// let output = new Object();
// output["GeoHashes"] = geohashes
// let json = JSON.stringify(output);


let fs = require('fs');

fs.writeFile('myjsonfile.json', json);




"https://data.stadt-zuerich.ch/dataset/baumkataster/resource/c7e85cfe-7899-4aa4-9a59-3b0c7b6a4937/download/baumkataster.json"
"http://echo.jsontest.com/key/value/one/two"