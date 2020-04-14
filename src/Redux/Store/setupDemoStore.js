
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
                                "riderSpeed": 8.37,
                                //"timeStamp": new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay(), new Date().getHours(), new Date().getMinutes(), new Date().getSeconds())
                            },
                            {
                                "riderMass": 250,
                                "riderSpeed": 5.99
                            },
                            {   
                                "riderMass": 235,
                                "riderSpeed": 6.68
                            },
                            {
                                "riderMass": 171,
                                "riderSpeed": 8.17
                            },
                            {
                                "riderMass": 103,
                                "riderSpeed": 8.29
                            },
                            {
                                "riderMass": 218,
                                "riderSpeed": 5.25
                            },
                            {
                                "riderMass": 215,
                                "riderSpeed": 5.74
                            },
                            {
                                "riderMass": 198,
                                "riderSpeed": 8.50
                            }
                        ]
                    },
                    {
                        "name": "Barn Door",
                        "events": [
                            {
                                "riderMass": 144,
                                "riderSpeed": 6.37
                            },
                            {
                                "riderMass": 184,
                                "riderSpeed": 7.32
                            },
                            {   
                                "riderMass": 200,
                                "riderSpeed": 6.43
                            },
                            {
                                "riderMass": 246,
                                "riderSpeed": 5.02
                            }
                        ]
                    },
                    {
                        "name": "Tabletop",
                        "events": [
                            {
                                "riderMass": 135,
                                "riderSpeed": 11.96
                            },
                            {
                                "riderMass": 101,
                                "riderSpeed": 3.99
                            },
                            {   
                                "riderMass": 224,
                                "riderSpeed": 13.10
                            },
                            {
                                "riderMass": 159,
                                "riderSpeed": 9.82
                            },
                            {
                                "riderMass": 213,
                                "riderSpeed": 8.55
                            },
                            {
                                "riderMass": 189,
                                "riderSpeed": 9.25
                            },
                            {
                                "riderMass": 236,
                                "riderSpeed": 12.82
                            },
                            {
                                "riderMass": 114,
                                "riderSpeed": 3.06
                            },
                            {
                                "riderMass": 213,
                                "riderSpeed": 13.07
                            },
                            {
                                "riderMass": 232,
                                "riderSpeed": 7.87
                            },
                            {
                                "riderMass": 182,
                                "riderSpeed": 12.01
                            },
                            {
                                "riderMass": 140,
                                "riderSpeed": 3.65
                            },
                            {
                                "riderMass": 193,
                                "riderSpeed": 8.78
                            },
                            {
                                "riderMass": 158,
                                "riderSpeed": 7.70
                            },
                            {
                                "riderMass": 216,
                                "riderSpeed": 6.53
                            },
                            {
                                "riderMass": 180,
                                "riderSpeed": 10.13
                            },
                            {
                                "riderMass": 244,
                                "riderSpeed": 7.06
                            },
                            {
                                "riderMass": 126,
                                "riderSpeed": 6.76
                            },
                            {
                                "riderMass": 109,
                                "riderSpeed": 6.50
                            },
                            {
                                "riderMass": 182,
                                "riderSpeed": 2.69
                            }
                        ]
                    },
                    {
                        "name": "Wall Ride",
                        "events": [
                            {
                                "riderMass": 219,
                                "riderSpeed": 11.88
                            },
                            {
                                "riderMass": 173,
                                "riderSpeed": 7.83
                            },
                            {   
                                "riderMass": 194,
                                "riderSpeed": 10.57
                            },
                            {
                                "riderMass": 221,
                                "riderSpeed": 5.03
                            },
                            {
                                "riderMass": 213,
                                "riderSpeed": 6.47
                            },
                            {
                                "riderMass": 178,
                                "riderSpeed": 13.58
                            },
                            {
                                "riderMass": 157,
                                "riderSpeed": 6.76
                            },
                            {
                                "riderMass": 191,
                                "riderSpeed": 6.73
                            },
                            {
                                "riderMass": 145,
                                "riderSpeed": 11.00
                            },
                            {
                                "riderMass": 226,
                                "riderSpeed": 7.80
                            },
                            {
                                "riderMass": 201,
                                "riderSpeed": 6.95
                            },
                            {
                                "riderMass": 121,
                                "riderSpeed": 8.80
                            },
                            {
                                "riderMass": 152,
                                "riderSpeed": 10.47
                            },
                            {
                                "riderMass": 167,
                                "riderSpeed": 13.88
                            }
                        ]
                    },
                    {
                        "name": "Stump Jump",
                        "events": [
                            {
                                "riderMass": 232,
                                "riderSpeed": 5.42
                            },
                            {
                                "riderMass": 142,
                                "riderSpeed": 7.31
                            },
                            {   
                                "riderMass": 240,
                                "riderSpeed": 7.98
                            },
                            {
                                "riderMass": 130,
                                "riderSpeed": 8.60
                            },
                            {
                                "riderMass": 188,
                                "riderSpeed": 6.58
                            },
                            {
                                "riderMass": 100,
                                "riderSpeed": 8.32
                            },
                            {
                                "riderMass": 222,
                                "riderSpeed": 6.25
                            },
                            {
                                "riderMass": 233,
                                "riderSpeed": 7.62
                            },
                            {
                                "riderMass": 95,
                                "riderSpeed": 6.92
                            },
                            {
                                "riderMass": 171,
                                "riderSpeed": 8.90
                            },
                            {
                                "riderMass": 231,
                                "riderSpeed": 6.51
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