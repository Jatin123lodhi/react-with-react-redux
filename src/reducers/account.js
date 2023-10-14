import { produce } from "immer";
import {
  DECREMENT,
  DECREMENT_BY_AMOUNT,
  GET_USER_ACCOUNT_FULFILLED,
  GET_USER_ACCOUNT_PENDING,
  GET_USER_ACCOUNT_REJECTED,
  INCREMENT,
  INCREMENT_BY_AMOUNT,
} from "../actions/action";

//reducer with immer-
export function accountReducer(state = { amount: 1 }, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_USER_ACCOUNT_FULFILLED:
        // return { amount: action.payload, pending: false };
        draft.amount = action.payload;
        draft.pending = false;
        break;
      case GET_USER_ACCOUNT_PENDING:
        // return { ...state, pending: true };
        draft.pending = true;
        break;
      case GET_USER_ACCOUNT_REJECTED:
        // return { ...state, error: action.error, pending: false };
        draft.error = action.error;
        draft.pending = false;
        break;
      case INCREMENT:
        // return { ...state, amount: state.amount + 1 };
        draft.amount += 1;
        break;
      case DECREMENT:
        draft.amount -= 1;
        break;
      case INCREMENT_BY_AMOUNT:
        // return { amount: state.amount + parseInt(action.payload) };
        draft.amount += parseInt(action.payload);
        break;
      case DECREMENT_BY_AMOUNT:
        const decrementValue = parseInt(action.payload);

        if (state.amount >= decrementValue) draft.amount -= decrementValue;
        // return {...state,error: 'This is not valid '}
        else{

          draft.error = "This is not valid";
        }
        break;
      default:
        break;
    }
  });
}

// export function accountReducer(state = { amount: 1 }, action) {
//   switch (action.type) {
//     case GET_USER_ACCOUNT_FULFILLED:
//       return { amount: action.payload, pending: false };
//     case GET_USER_ACCOUNT_PENDING:
//       return { ...state, pending: true };
//     case GET_USER_ACCOUNT_REJECTED:
//       return { ...state, error: action.error, pending: false };
//     case INCREMENT:
//       return { ...state, amount: state.amount + 1 };
//     case DECREMENT:
//       return { amount: state.amount - 1 };
//     case INCREMENT_BY_AMOUNT:
//       return { amount: state.amount + parseInt(action.payload) };
//     case DECREMENT_BY_AMOUNT:
//       const decrementValue = parseInt(action.payload)

//       if(state.amount>= decrementValue)
//       return { amount: state.amount - parseInt(action.payload) };
//       return {...state,error: 'This is not valid '}
//     default:
//       return state;
//   }
// }
