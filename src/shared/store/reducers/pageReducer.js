import { ADD_PAGE } from "../actions/page/types";

const initialState = {
    page: {}
};

export default function pageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PAGE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}