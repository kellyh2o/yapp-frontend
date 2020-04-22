
import { AuthActions } from '../Authentication/Store';
import { LocationsActions } from '../Locations/Store';
import { UsersActions } from '../Users/Store';
import { getType } from 'typesafe-actions';
 

const demoLocationName = "Regis Mountain Bike Park";

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
        token: action.payload.accessToken,
      }
    }

    case getType(AuthActions.logoutUser.success): {
      return {
        ...state,
        isLoggedIn: false,
        token: '',
      }
    }

    case getType(UsersActions.fetchMe.success): {
      return {
        ...state,
        me: action.payload,
      }
    }

    case getType(UsersActions.updateMe.success): {
      return {
        ...state,
        me: action.payload,
      }
    }

    case getType(LocationsActions.fetchLocations.success): {
      return {
        ...state,
        locations: action.payload,
        demoLocation: action.payload.find(p => p.name === demoLocationName)
      }
    }

    case getType(LocationsActions.createLocation.success): {
      return {
        ...state,
        locations: [...state.locations, action.payload],
        demoLocation: action.payload.find(p => p.name === demoLocationName)
      }
    }

    case 'SELECT_VIEW': {
      const selectedView = action.view;
      return {
        ...state,
        selectedView
      }
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;