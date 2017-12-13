import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const fetchCurrentUser = () => dispatch => (
  SessionAPIUtil.fetchCurrentUser().then(
    promise => dispatch(receiveCurrentUser(promise.data.current_user)),
    err => dispatch(receiveSessionErrors(err))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    err => dispatch(receiveSessionErrors(err))
  )
);
