import { authActions } from "../../actionTypes";

const initialState = {
    activeItem: false,
    withSearch: false,
    withPlus: false,
    withoutPadY: false,
    withoutPadX: false,
    withCart: false,
    isProAccount: false,
    searchFunc: () => undefined,
    plusFunction: () => undefined
};

const layoutReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case "UPDATE_LAYOUT": {
      return {
        ...state,
        ...payload
      }
    }

    default:
      return {...state};
  }
};

export default layoutReducer;
