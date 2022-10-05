import {appIntl} from '../../@crema/utility/helper/Utils';
import {Dispatch} from 'redux';
import {AppActions} from '../../types';
import {fetchError, fetchStart, fetchSuccess} from './Common';
import jwtAxios from '../../@crema/services/auth/jwt-auth';

export const saveProfile = () => {
  const {messages} = appIntl();
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(fetchStart());

    console.log('fetchStart: ', fetchStart);
    jwtAxios
      .get('/api/chatApp/connections')
      .then((data) => {
        if (data.status === 200) {
          dispatch(fetchSuccess());
        } else {
          dispatch(fetchError(String(messages['message.somethingWentWrong'])));
        }
      })
      .catch((error) => {
        dispatch(fetchError(error.message));
      });
  };
};
