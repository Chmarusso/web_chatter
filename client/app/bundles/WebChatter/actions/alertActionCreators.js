import { RENDER, CLEAR } from '../constants/alertConstants';

export const renderAlert = (type, message) => ({
  type: RENDER, alertType: type, message: message
});

export const clearAlert = () => ({
  type: RENDER, alertType: null, message: null
});