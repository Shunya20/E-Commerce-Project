import { fetchProductsAPI } from '../services/api';

export const login = (username, password) => async (dispatch) => {
  try {
    // Example login logic - replace with actual API call
    const response = await fetch('http://example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    // Dispatch login success action
    dispatch({ type: 'LOGIN_SUCCESS', payload: data.user });
  } catch (error) {
    console.error('Error logging in:', error);
    // Optionally dispatch an error action
  }
};

export const register = (username, password) => async (dispatch) => {
  try {
    // Example registration logic - replace with actual API call
    const response = await fetch('http://example.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    // Dispatch register success action
    dispatch({ type: 'REGISTER_SUCCESS', payload: data.user });
  } catch (error) {
    console.error('Error registering:', error);
    // Optionally dispatch an error action
  }
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
