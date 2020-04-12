import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { LocationsActions } from '../../Locations/Store/';

export const FETCH_JUMPS = "jumps/FETCH_JUMPS";
export const FETCH_JUMPS_SUCCESS = "jumps/FETCH_JUMPS_SUCCESS";
export const FETCH_JUMPS_FAILURE = "jumps/FETCH_JUMPS_FAILURE";
export const FETCH_JUMPS_CANCEL = "jumps/FETCH_JUMPS_CANCEL";

export const FETCH_JUMP = "jumps/FETCH_JUMP";
export const FETCH_JUMP_SUCCESS = "jumps/FETCH_JUMP_SUCCESS";
export const FETCH_JUMP_FAILURE = "jumps/FETCH_JUMP_FAILURE";
export const FETCH_JUMP_CANCEL = "jumps/FETCH_JUMP_CANCEL";

export const CREATE_JUMP = "jumps/CREATE_JUMP";
export const CREATE_JUMP_SUCCESS = "jumps/CREATE_JUMP_SUCCESS";
export const CREATE_JUMP_FAILURE = "jumps/CREATE_JUMP_FAILURE";
export const CREATE_JUMP_CANCEL = "jumps/CREATE_JUMP_CANCEL";

export const fetchJumps = createAsyncAction(
    FETCH_JUMPS,
    FETCH_JUMPS_SUCCESS,
    FETCH_JUMPS_FAILURE,
    FETCH_JUMPS_CANCEL
)();

export const fetchJump = createAsyncAction(
    FETCH_JUMP,
    FETCH_JUMP_SUCCESS,
    FETCH_JUMP_FAILURE,
    FETCH_JUMP_CANCEL
)();

export const createJump = createAsyncAction(
    CREATE_JUMP,
    CREATE_JUMP_SUCCESS,
    CREATE_JUMP_FAILURE,
    CREATE_JUMP_CANCEL
)();

var $;
$ = require('jquery');

const demoLocationName = "Regis Mountain Bike Park";
const demoJump1 = "Wall Ride";
const demoJump2 = "Dropout";
const demoJump3 = "Barn Door";
const demoJump4 = "Steep Drop";
const demoJump5 = "Table Top";

export function setupStore(dispatch, token) {
    // $.ajax({
    //     type: "GET",
    //     url: "http://localhost:3001/v1/locations",
    //     dataType: "json",
    //     headers: {
    //         "auth-token": token,
    //     },
    //     success: (data) => {
    //         setupLocations(dispatch, token, data)
    //     },
    //     error: function(err) {
    //         console.log("error: " + err);
    //     }
    // });
}

function setupLocations(dispatch, token, data) {
    // let filteredLocations = data.filter(location => location.name === "Regis Mountain Bike Park");

    // if (filteredLocations.length === 0) {

    //     let url = "http://localhost:3001/v1/locations";

    //     $.ajax({
    //         type: "POST",
    //         url: url,
    //         dataType: "json",
    //         headers: {
    //             "auth-token": token,
    //         },
    //         data: {
    //             name: "Regis Mountain Bike Park"
    //         },
    //         success: (data) => { 
    //             dispatch(LocationsActions.fetchLocations.request(token));
    //             setupJumps(dispatch, token, data);
    //         },
    //         error: function(err) {
    //             console.log("error");
    //         }
    //     })
    // }
    // else {
    //     setupJumps(dispatch, token, filteredLocations[0]);
    // }
}


function setupJumps(dispatch, token, demoLocation) {

    // let url = "http://localhost:3001/v1/locations/{locationId}/jumps";
    // url = url.replace("{locationId}", encodeURIComponent(demoLocation._id));

    // $.ajax({
    //     type: "GET",
    //     url: url,
    //     dataType: "json",
    //     headers: {
    //         "auth-token": token,
    //     },
    //     success: (jumps) => {
    //         if (jumps.filter(jump => jump.name === demoJump1).length === 0) {
    //             setupJump1(dispatch, token, demoLocation);
    //         }
    //         if (jumps.filter(jump => jump.name === demoJump2).length === 0) {
    //             setupJump2(dispatch, token, demoLocation);
    //         }
    //         if (jumps.filter(jump => jump.name === demoJump3).length === 0) {
    //             setupJump3(dispatch, token, demoLocation);
    //         }
    //         if (jumps.filter(jump => jump.name === demoJump4).length === 0) {
    //             setupJump4(dispatch, token, demoLocation);
    //         }
    //         if (jumps.filter(jump => jump.name === demoJump5).length === 0) {
    //             setupJump5(dispatch, token, demoLocation);
    //         }
    //     },
    //     error: function(err) {
    //         console.log("error: " + err);
    //     }
    // });


}

// function setupJump1(dispatch, token, demoLocation) {
//     let url = "http://localhost:3001/v1/locations/{locationId}/jumps";
//     url = url.replace("{locationId}", encodeURIComponent(demoLocation._id));

//     $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "json",
//         headers: {
//             "auth-token": token,
//         },
//         data: {
//             name: "Dropout"
//         },
//         success: (data) => {
//             //dispatch(fetchJumps.request(token, demoLocation._id));
//         },
//         error: function(err) {
//             console.log("error");
//         }
//     })
// }


// function setupJump2(dispatch, token, demoLocation) {
//     let url = "http://localhost:3001/v1/locations/{locationId}/jumps";
//     url = url.replace("{locationId}", encodeURIComponent(demoLocation._id));

//     $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "json",
//         headers: {
//             "auth-token": token,
//         },
//         data: {
//             name: "Wall Ride"
//         },
//         success: function(newJump) {
//             //dispatch(fetchJumps.request(token, demoLocation._id));
//         },
//         error: function(err) {
//             console.log("error");
//         }
//     })
// }

// function setupJump3(dispatch, token, demoLocation) {
//     let url = "http://localhost:3001/v1/locations/{locationId}/jumps";
//     url = url.replace("{locationId}", encodeURIComponent(demoLocation._id));

//     $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "json",
//         headers: {
//             "auth-token": token,
//         },
//         data: {
//             name: "Barn Door"
//         },
//         success: function(newJump) {
//             //dispatch(fetchJumps.request(token, demoLocation._id));
//         },
//         error: function(err) {
//             console.log("error");
//         }
//     })
// }


// function setupJump4(dispatch, token, demoLocation) {
//     let url = "http://localhost:3001/v1/locations/{locationId}/jumps";
//     url = url.replace("{locationId}", encodeURIComponent(demoLocation._id));

//     $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "json",
//         headers: {
//             "auth-token": token,
//         },
//         data: {
//             name: "Steep Drop"
//         },
//         success: function(newJump) {
//             //dispatch(fetchJumps.request(token, demoLocation._id));
//         },
//         error: function(err) {
//             console.log("error");
//         }
//     })
// }

// function setupJump5(dispatch, token, demoLocation) {
//     let url = "http://localhost:3001/v1/locations/{locationId}/jumps";
//     url = url.replace("{locationId}", encodeURIComponent(demoLocation._id));

//     $.ajax({
//         type: "POST",
//         url: url,
//         dataType: "json",
//         headers: {
//             "auth-token": token,
//         },
//         data: {
//             name: "Table Top"
//         },
//         success: (data) => function(data, demoLocation) {
//             dispatch(fetchJumps.request(token, demoLocation._id));
//         },
//         error: function(err) {
//             console.log("error");
//         }
//     })
// }