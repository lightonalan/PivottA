import { GET_LIST_NOTICE_BOARD_SUCCESS, GET_LIST_NOTICE_BOARD_FAILED } from "../actions/types";

const initialState = {
    listNotice: [],
};

export const noticeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_NOTICE_BOARD_SUCCESS:
            const data = action.payload;
            return {
                ...state,
                listNotice: data,

            }
        case GET_LIST_NOTICE_BOARD_FAILED:
            return {
                ...state
            }
        default:
            return state
    }
};

