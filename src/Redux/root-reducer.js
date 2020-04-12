
import { AuthActions } from '../Authentication/Store';
import { LocationsActions } from '../Locations/Store';
import { JumpsActions } from '../Jumps/Store';
import { getType } from 'typesafe-actions';
 

const demoLocationName = "Regis Mountain Bike Park";
const demoJump1 = "Wall Ride";
const demoJump2 = "Dropout";
const demoJump3 = "Barn Door";
const demoJump4 = "Steep Drop";
const demoJump5 = "Table Top";


const rootReducer = (state, action) => {
  switch(action.type) {    
    case AuthActions.viewRegisterPage: {
      return {
        ...state,
        showLoginPage: false
      }
    }

    case AuthActions.viewLoginPage: {
      return {
        ...state,
        showLoginPage: true
      }
    }

    case getType(AuthActions.registerUser.success): {
      return {
        ...state,
        isNewRegistrationSuccess: true,
        showLoginPage: true 
      }
    }

    case getType(AuthActions.loginUser.success): {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
      }
    }

    case getType(LocationsActions.fetchLocations.success): {
      return {
        ...state,
        locations: action.payload,
        demoLocation: action.payload.find(p => p.name === demoLocationName)
      }
    }

    case getType(JumpsActions.fetchJumps.success): {
      return {
        ...state,
        jumps: action.payload,
        noJump1Created: action.payload.filter(jump => jump.name === demoJump1).length === 0,
        noJump2Created: action.payload.filter(jump => jump.name === demoJump2).length === 0
      }
    }

    case getType(LocationsActions.createLocation.success): {
      return {
        ...state,
        locations: [...state.locations, action.payload],
        demoLocation: action.payload.find(p => p.name === demoLocationName)
      }
    }

    case getType(JumpsActions.createJump.success): {
      return {
        ...state,
        jumps: [...state.jumps, action.payload],
        noJump1Created: (action.payload.name !== demoJump1 && state.jumps.filter(jump => jump.name === demoJump1).length === 0),
        noJump2Created: (action.payload.name !== demoJump2 && state.jumps.filter(jump => jump.name === demoJump2).length === 0)
      }
    }

    case 'SELECT_VIEW': {
      const selectedView = action.view;
      return {
        ...state,
        selectedView
      }
    }

    case 'FETCH_USER_FULFILLED': 
      return {
        ...state,
        [action.payload.login]: action.payload
      }

    default: {
      return state;
    }
  }
}

export default rootReducer;