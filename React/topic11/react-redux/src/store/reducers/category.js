// import { ARTIR } from "../type"

import { SUB_CATEGORY } from "../types/category";

let initialState = {
  sub_category: ["drink","fruit"],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUB_CATEGORY:
      return { ...state, sub_category: action.payload };
    default:
      return state;
  }
};
