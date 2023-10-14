import { DECREMENT, GET_USER_ACCOUNT_FULFILLED, GET_USER_ACCOUNT_PENDING, GET_USER_ACCOUNT_REJECTED, INCREMENT, INCREMENT_BY_AMOUNT } from "../actions/action";

export function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case GET_USER_ACCOUNT_FULFILLED:
      return { amount: action.payload, pending: false };
    case GET_USER_ACCOUNT_PENDING:
      return { ...state, pending: true };
    case GET_USER_ACCOUNT_REJECTED:
      return { ...state, error: action.error, pending: false };
    case INCREMENT:
      return { ...state, amount: state.amount + 1 };
    case DECREMENT:
      return { amount: state.amount - 1 };
    case INCREMENT_BY_AMOUNT:
      return { amount: state.amount + parseInt(action.payload) };
    default:
      return state;
  }
}