import { SET_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  product: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
}
