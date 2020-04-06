
import { AuthActions } from '../Authentication/Store';
import { getType } from 'typesafe-actions';
 

const rootReducer = (state, action) => {
  switch(action.type) {    
    case getType(AuthActions.registerUser.success): {
      return {
        ...state,
        isNewRegistrationSuccess: true,
      }
    }

    case getType(AuthActions.loginUser.success): {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
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