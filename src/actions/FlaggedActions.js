import * as ActionTypes from './ActionTypes';

const axios = require('axios');

const { API_HOST } = process.env;

const onSuccess = (dispatch, action, data) => {
    dispatch({ type: action, data });
};

const onError = (dispatch, action, data) => {
    dispatch({ type: action, data: data.message });
};
