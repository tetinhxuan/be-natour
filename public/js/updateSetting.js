import axios from 'axios';
import { showAlert } from './alert';

export const updateUserByAPI = async (name, email) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: 'http://localhost:4000/api/v1/users/updateMe',
      data: { name, email },
    });
    console.log(res);
    if (res.status === 204) {
      showAlert('success', 'Update success');
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
