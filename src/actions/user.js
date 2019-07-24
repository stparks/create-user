import * as types from './types';


export const setUserName = userName => ({
    type: types.ACTION_SET_USERNAME,
    payload: { userName }
});

export const setUserEmail = email => ({
    type: types.ACTION_SET_EMAIL,
    payload: { email }
});

export const setFirstName = firstName => ({
    type: types.ACTION_SET_USERNAME,
    payload: { firstName }
});

export const setLastName = lastName => ({
    type: types.ACTION_SET_LASTNAME,
    payload: { lastName }
});

export const setStreetAddress = streetAddress => ({
    type: types.ACTION_SET_STREETADDRESS,
    payload: { streetAddress }
});

export const setUnitNumber = unitNumber => ({
    type: types.ACTION_SET_UNITNUMBER,
    payload: { unitNumber }
});

export const setCity = city => ({
    type: types.ACTION_SET_CITY,
    payload: { city }
});

export const setState = state => ({
    type: types.ACTION_SET_STATE,
    payload: { state }
});

export const setZip = zip => ({
    type: types.ACTION_SET_ZIP,
    payload: { zip }
});

