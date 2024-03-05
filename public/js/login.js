/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:4000/api/v1/users/login',
      data: { email, password },
    });
    console.log(res.data.data.user);
    if (res.data.status === 'success') {
      showAlert('success', 'Loggin success');
      window.setTimeout(() => {
        location.assign('/');
      }, 500);
    }
  } catch (err) {
    console.log(err.response.data);
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:4000/api/v1/users/logout',
    });

    if (res.data.status === 'success') {
      location.reload(true);
    }
  } catch (err) {
    showAlert('error', 'Error logging out! try again.');
  }
};
