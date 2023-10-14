import { INCREMENT_BONUS, INCREMENT_BY_AMOUNT } from "../actions/action";

export function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
      case INCREMENT_BONUS:
        return { points: state.points + 1 };
      case INCREMENT_BY_AMOUNT:
        if (action.payload >= 100) return { points: state.points + 1 };
        return state;
      default:
        return state;
    }
  }