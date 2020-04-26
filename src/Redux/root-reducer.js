
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
        showLoginPage: false,
        registerErrorMessage: null,
        loginErrorMessage: null
      }
    }

    case AuthActions.viewLoginPage: {
      return {
        ...state,
        showLoginPage: true,
        registerErrorMessage: null,
        loginErrorMessage: null
      }
    }

    case getType(AuthActions.registerUser.success): {
      return {
        ...state,
        showLoginPage: true,
        registerErrorMessage: null
      }
    }

    case getType(AuthActions.registerUser.failure): {
      return {
        ...state,
        registerErrorMessage: action.payload.response.data.msg
      }
    }


    case getType(AuthActions.loginUser.success): {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.accessToken,
        loginErrorMessage: null,
      }
    }

    case getType(AuthActions.loginUser.failure): {
      return {
        ...state,
        isLoggedIn: false,
        loginErrorMessage: action.payload.response.data.msg
      }
    }

    case getType(AuthActions.logoutUser.success): {
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        updateMeErrorMessage: null
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
        updateMeErrorMessage: null
      }
    }

    case getType(UsersActions.updateMe.failure): {
      return {
        ...state,
        updateMeErrorMessage: action.payload.response.data.msg
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
        selectedView,
        updateMeErrorMessage: null
      }
    }

    default: {
      return state;
    }
  }
}

export default rootReducer;