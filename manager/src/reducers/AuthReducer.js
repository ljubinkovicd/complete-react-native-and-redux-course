import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

// One reducer responsible for all things authentication:
// validation, spinner animation, etc...
const INITIAL_STATE = {
  email: 'email@gmail.com',
  password: '123456',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      // make a copy of my state object,
      // and toss email: action.payload into the previous state object.
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      // make a copy of my state object,
      // and toss password: action.payload into the previous state object.
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', loading: false };
    default:
      return state;
  }
};
