import produce from "immer";
import {
  SchoolState,
  SchoolActions,
  GET_SCHOOLS,
  GET_SCHOOL,
  UPDATE_SCHOOL,
  DELETE_SCHOOL,
  RESET_SCHOOL_STATE,
  CREATE_SCHOOL,
} from "../types";

const initialState: SchoolState = {
  school_data: {
    current_page: 1,
    data: [],
    pages: 0,
    per_page: 0,
    total: 0,
  },
  current_school: null,
};

const schoolReducer = (state = initialState, action: SchoolActions) => {
  switch (action.type) {
    case GET_SCHOOLS: {
      return produce(state, (draft) => {
        draft.school_data = action.payload;
      });
    }

    case GET_SCHOOL: {
      return produce(state, (draft) => {
        draft.current_school = action.payload;
      });
    }

    case CREATE_SCHOOL: {
      return produce(state, (draft) => {
        draft.school_data.data.unshift(action.payload);
      });
    }

    case UPDATE_SCHOOL: {
      return produce(state, (draft) => {
        draft.school_data.data.map((school) =>
          school?.uuid === action?.payload?.uuid ? action.payload : school
        );
      });
    }

    case DELETE_SCHOOL: {
return { ...state }
    }

    case RESET_SCHOOL_STATE: {
      return { ...initialState };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default schoolReducer;