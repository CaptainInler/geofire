# Geofire

Version used
- Firebase 3.0.
- Geofire 4.1.0.

## JS Example
Simple Example of Geofire usage and all you need for your first step with Geofire in Javascript.
The code is based on:
- Geofire-js Example: https://github.com/firebase/geofire-js/tree/master/examples

The code in this folder shows how to retrive Data out of a Geofire-DB with Javascript.

Requierments:
- Access to a Firebase (Realtimedatabase)
- ...


### Steps to get you flying
Note: This example just shows how to simple access data. Don't use the Settings (especialy the Access Rules) in production
1. Create a Google-Account (if not allready existing...)
2. Go to [Firebase.com](firebase.com) and create a Firebase-Project
3. Create a RealtimeDatabase (RTDB) inside your Firebase-Project
4. Import [`Geofire in RTDB simple example.json`](https://github.com/CaptainInler/geofire/blob/master/Geofire%20in%20RTDB%20simple%20example.json) to the RTDB
5. Change Access Rules of the RTDB to:
    ```
        {
          "rules": {
            ".read": true,
            ".write": false,
            "TopNode": {
              ".indexOn": "g"
            } 
          }
        }
    ```
    5.1. `read` and `write` manage the Rules how people can access your Datas (e.g. if they have to be logged in or not)
    5.2. `"TopNode": ...` indicates the indexed datafield. This is not so important if there are not so many Objects in your RTDB like in the given example json. But if the RTDB contains 62'000 Objects it can easily decrease the data access time 10 times or even more.
6. Download the examplecode provided in the directory `JS Example`
7. Get `API-KEY` and `databaseURL` for your Firebase-Project and replace the existing entries in the file `js/geofire.js`

Codefragments you may want to play with:
- Change the radius to 1100 and you'll get 4 fish back instead of 3..
    ```
        let geoQuery = geoFire.query({
          center: [-40, 159],
          radius: 1100
        });
    ```

## Geojson to Geofire
A node.js converter to add geohashes to a given geojson. The new json can be importet in Firebase und access by geofire
