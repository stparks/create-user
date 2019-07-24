import createReducer from "../lib/createReducer";
import * as types from '../actions/types';

const initialState = {
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    streetAddress: '',
    unitNumber: '',
    city: '',
    state: '',
    zip: ''
};

export default createReducer(initialState, {
    [types.ACTION_SET_USERNAME](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_EMAIL](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_USERFIRSTNAME](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_LASTNAME](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_STREETADDRESS](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_UNITNUMBER](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_CITY](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_STATE](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },

    [types.ACTION_SET_ZIP](state, action) {
        let newState = Object.assign({}, state, { ...action.payload });
        console.log(state);
        console.log(newState);

        return newState;
    },});