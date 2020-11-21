import * as ActionTypes from './ActionTypes';

const axios = require('axios');

const { API_HOST } = process.env;

const onSuccess = (dispatch, action, data) => {
    dispatch({ type: action, data });
};

const onError = (dispatch, action, data) => {
    dispatch({ type: action, data: data.message });
};

export const getClasses = (id) => async (dispatch) => {
    let response;
    try {
        // TODO axios call here
        onSuccess(dispatch, ActionTypes.GET_CLASSES_SUCCESS, response.data);
        return true;
    } catch (error) {
        if (!response) {
            onError(dispatch, ActionTypes.GET_CLASSES_FAIL, { message: 'Not able to connect to network' });
        } else {
            onError(dispatch, ActionTypes.GET_CLASSES_FAIL, error.response.data.message);
        }
        return false;
    }
};

export const getStudents = (id) => async (dispatch) => {
    let response;
    try {
        // TODO axios call here
        onSuccess(dispatch, ActionTypes.GET_STUDENTS_SUCCESS, response.data);
        return true;
    } catch (error) {
        if (!response) {
            onError(dispatch, ActionTypes.GET_STUDENTS_FAIL, { message: 'Not able to connect to network' });
        } else {
            onError(dispatch, ActionTypes.GET_STUDENTS_FAIL, error.response.data.message);
        }
        return false;
    }
};
