
import { LocationsActions } from '../../Locations/Store';

var $;
$ = require('jquery');


// For the first round of this application, the data
// is posted manually to the server upon app startup, 
// if it does not exist already.

export function setupDemoStore(dispatch, token) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3001/v1/locations",
        dataType: "json",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        success: (data) => {
            setupLocations(dispatch, token, data)
        },
        error: function(err) {
            console.log("error: " + err);
        }
    });
}

async function setupLocations(dispatch, token, data) {
    let filteredLocations = data.filter(location => location.name === "Regis Mountain Bike Park");

    if (filteredLocations.length !== 0) {
        for (var i = 0; i < filteredLocations.length; i++) {            
            var deleteRequest = {
                "url": `http://localhost:3001/v1/locations/${filteredLocations[i]._id}`,
                "method": "DELETE",
                "timeout": 0,
                "headers": {
                  "Authorization": `Bearer ${token}`,
                  "Content-Type": "application/json"
                }
              };
              
            await $.ajax(deleteRequest);
        }
    }

    const now = new Date();

    var request = {
        "url": "http://localhost:3001/v1/locations",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify(
            { 
                "name": "Regis Mountain Bike Park",
                "jumps": [
                    {
                        "name": "Dropout",
                        "events": [
                            {
                                "riderMass": 187,
                                "riderSpeed": 20.37,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 27).toJSON(),
                            },
                            {
                                "riderMass": 250,
                                "riderSpeed": 17.99,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30).toJSON()
                            },
                            {   
                                "riderMass": 235,
                                "riderSpeed": 18.68,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 17).toJSON()
                            },
                            {
                                "riderMass": 171,
                                "riderSpeed": 20.17,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 33).toJSON()
                            },
                            {
                                "riderMass": 103,
                                "riderSpeed": 20.29,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 50).toJSON()
                            },
                            {
                                "riderMass": 218,
                                "riderSpeed": 17.25,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 30).toJSON()
                            },
                            {
                                "riderMass": 215,
                                "riderSpeed": 17.74,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 29).toJSON()
                            },
                            {
                                "riderMass": 198,
                                "riderSpeed": 20.50,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 20).toJSON()
                            }
                        ]
                    },
                    {
                        "name": "Barn Door",
                        "events": [
                            {
                                "riderMass": 144,
                                "riderSpeed": 18.37,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 10).toJSON()
                            },
                            {
                                "riderMass": 184,
                                "riderSpeed": 19.32,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 15).toJSON()
                            },
                            {   
                                "riderMass": 200,
                                "riderSpeed": 18.43,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16,20).toJSON()
                            },
                            {
                                "riderMass": 246,
                                "riderSpeed": 17.02,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 57).toJSON()
                            }
                        ]
                    },
                    {
                        "name": "Tabletop",
                        "events": [
                            {
                                "riderMass": 135,
                                "riderSpeed": 11.96,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 20).toJSON()
                            },
                            {
                                "riderMass": 101,
                                "riderSpeed": 15.99,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 15).toJSON()
                            },
                            {   
                                "riderMass": 224,
                                "riderSpeed": 13.10,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 10).toJSON()
                            },
                            {
                                "riderMass": 159,
                                "riderSpeed": 9.82,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30).toJSON()
                            },
                            {
                                "riderMass": 213,
                                "riderSpeed": 20.55,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 33).toJSON()
                            },
                            {
                                "riderMass": 189,
                                "riderSpeed": 9.25,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 12).toJSON()
                            },
                            {
                                "riderMass": 236,
                                "riderSpeed": 12.82,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 13).toJSON()
                            },
                            {
                                "riderMass": 114,
                                "riderSpeed": 15.06,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 45).toJSON()
                            },
                            {
                                "riderMass": 213,
                                "riderSpeed": 13.07,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 10).toJSON()
                            },
                            {
                                "riderMass": 232,
                                "riderSpeed": 19.87,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 40).toJSON()
                            },
                            {
                                "riderMass": 182,
                                "riderSpeed": 12.01,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 10).toJSON()
                            },
                            {
                                "riderMass": 140,
                                "riderSpeed": 15.65,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 12).toJSON()
                            },
                            {
                                "riderMass": 193,
                                "riderSpeed": 20.78,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 40).toJSON()
                            },
                            {
                                "riderMass": 158,
                                "riderSpeed": 19.70,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 47).toJSON()
                            },
                            {
                                "riderMass": 216,
                                "riderSpeed": 18.53,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 30).toJSON()
                            },
                            {
                                "riderMass": 180,
                                "riderSpeed": 10.13,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 57).toJSON()
                            },
                            {
                                "riderMass": 244,
                                "riderSpeed": 19.06,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 39).toJSON()
                            },
                            {
                                "riderMass": 126,
                                "riderSpeed": 18.76,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 15).toJSON()
                            },
                            {
                                "riderMass": 109,
                                "riderSpeed": 18.50,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 30).toJSON()
                            },
                            {
                                "riderMass": 182,
                                "riderSpeed": 14.69,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 45).toJSON()
                            }
                        ]
                    },
                    {
                        "name": "Wall Ride",
                        "events": [
                            {
                                "riderMass": 219,
                                "riderSpeed": 11.88,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 30).toJSON()
                            },
                            {
                                "riderMass": 173,
                                "riderSpeed": 19.83,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 12).toJSON()
                            },
                            {   
                                "riderMass": 194,
                                "riderSpeed": 10.57,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 47).toJSON()
                            },
                            {
                                "riderMass": 221,
                                "riderSpeed": 17.03,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 17).toJSON()
                            },
                            {
                                "riderMass": 213,
                                "riderSpeed": 18.47,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 14).toJSON()
                            },
                            {
                                "riderMass": 178,
                                "riderSpeed": 13.58,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 30).toJSON()
                            },
                            {
                                "riderMass": 157,
                                "riderSpeed": 18.76,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 15).toJSON()
                            },
                            {
                                "riderMass": 191,
                                "riderSpeed": 18.73,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30).toJSON()
                            },
                            {
                                "riderMass": 145,
                                "riderSpeed": 11.00,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 15, 15).toJSON()
                            },
                            {
                                "riderMass": 226,
                                "riderSpeed": 19.80,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 30).toJSON()
                            },
                            {
                                "riderMass": 201,
                                "riderSpeed": 18.95,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 42).toJSON()
                            },
                            {
                                "riderMass": 121,
                                "riderSpeed": 20.80,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 30).toJSON()
                            },
                            {
                                "riderMass": 152,
                                "riderSpeed": 10.47,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 42).toJSON()
                            },
                            {
                                "riderMass": 167,
                                "riderSpeed": 13.88,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 28).toJSON()
                            }
                        ]
                    },
                    {
                        "name": "Stump Jump",
                        "events": [
                            {
                                "riderMass": 232,
                                "riderSpeed": 17.42,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 30).toJSON()
                            },
                            {
                                "riderMass": 142,
                                "riderSpeed": 19.31,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 31).toJSON()
                            },
                            {   
                                "riderMass": 240,
                                "riderSpeed": 19.98,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 30).toJSON()
                            },
                            {
                                "riderMass": 130,
                                "riderSpeed": 20.60,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 20).toJSON()
                            },
                            {
                                "riderMass": 188,
                                "riderSpeed": 18.58,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 32).toJSON()
                            },
                            {
                                "riderMass": 100,
                                "riderSpeed": 20.32,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 21).toJSON()
                            },
                            {
                                "riderMass": 222,
                                "riderSpeed": 18.25,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 25).toJSON()
                            },
                            {
                                "riderMass": 233,
                                "riderSpeed": 19.62,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 30).toJSON()
                            },
                            {
                                "riderMass": 95,
                                "riderSpeed": 18.92,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 15).toJSON()
                            },
                            {
                                "riderMass": 171,
                                "riderSpeed": 20.90,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 25).toJSON()
                            },
                            {
                                "riderMass": 231,
                                "riderSpeed": 18.51,
                                "timeStamp": new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 12).toJSON()
                            }
                        ]
                    }
                ]
            }
        ),
    };
      
    $.ajax(request).done(() => {
        dispatch(LocationsActions.fetchLocations.request(token));         
    });
}