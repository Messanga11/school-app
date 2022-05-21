import produce from "immer";
import {
  SchoolPostState,
  SchoolPostActions,
  GET_SCHOOL_POSTS,
  GET_SCHOOL_POST,
  UPDATE_SCHOOL_POST,
  DELETE_SCHOOL_POST,
  RESET_SCHOOL_POST_STATE,
  CREATE_SCHOOL_POST,
} from "../types";

const initialState: SchoolPostState = {
  school_post_data: {
    current_page: 1,
    data: [],
    pages: 0,
    per_page: 0,
    total: 0,
  },
  current_school_post: null,
};

const school_postReducer = (state = initialState, action: SchoolPostActions) => {
  switch (action.type) {
    case GET_SCHOOL_POSTS: {
      return produce(state, (draft) => {
        draft.school_post_data = action.payload;
      });
    }

    case GET_SCHOOL_POST: {
      return produce(state, (draft) => {
        draft.current_school_post = action.payload;
      });
    }

    case CREATE_SCHOOL_POST: {
      return produce(state, (draft) => {
        draft.school_post_data.data.unshift(action.payload);
      });
    }

    case UPDATE_SCHOOL_POST: {
      return produce(state, (draft) => {
        draft.school_post_data.data.map((school_post) =>
          school_post?.uuid === action?.payload?.uuid ? action.payload : school_post
        );
      });
    }

    case DELETE_SCHOOL_POST: {
return { ...state }
    }

    case RESET_SCHOOL_POST_STATE: {
      return { ...initialState };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default school_postReducer;