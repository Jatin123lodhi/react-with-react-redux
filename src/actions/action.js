import axios from "axios";

export const INCREMENT = "account/increment";
export const DECREMENT = "account/decrement";
export const INCREMENT_BY_AMOUNT = "account/incrementByAmount";
export const INIT = "account/init";
export const INCREMENT_BONUS = "bonus/increment";
export const GET_USER_ACCOUNT_PENDING = "account/getUser/pending";
export const GET_USER_ACCOUNT_FULFILLED = "account/getUser/fulfilled";
export const GET_USER_ACCOUNT_REJECTED = "account/getUser/rejected";

//Action creators
export function getUser(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
      dispatch(getAccountUserFulfilled(data.amount));
    } catch (err) {
      dispatch(getAccountUserRejected(err.message));
    }
  };
}

export function getAccountUserFulfilled(value) {
  return { type: GET_USER_ACCOUNT_FULFILLED, payload: value };
}
export function getAccountUserPending() {
  return { type: GET_USER_ACCOUNT_PENDING };
}
export function getAccountUserRejected(value) {
  return { type: GET_USER_ACCOUNT_REJECTED, error: value };
}

export function initUser(value) {
  return { type: INIT, payload: value };
}

export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}

export function incrementByAmount(value) {
  return { type: INCREMENT_BY_AMOUNT, payload: value };
}

export function incrementBonus() {
  return { type: INCREMENT_BONUS };
}
