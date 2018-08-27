import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE,
  EMPLOYEE_DELETE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name, value: 'jane' }
      // [action.payload.prop] IS NOT AN ARRAY, this is 'key interpolation'!
      // this -> [action.payload.prop] is equal to the following:
      // const newState = {};
      // newState[action.payload.prop] = action.payload.value
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
    case EMPLOYEE_SAVE:
    case EMPLOYEE_DELETE:
      return INITIAL_STATE; // reset all the properties in the form.
    default:
      return state;
  }
};
