import axios from 'axios';
import { showAlert } from './alert';

// type ís either 'password' or 'data'

export const updateSetting = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://localhost:4000/api/v1/users/updatePassword'
        : 'http://localhost:4000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', 'Update success');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
