import { Add_To_Card } from "../redux/constant.js";

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_To_Card:
            return [
                ...state,
                action.data
            ];

        default:
            return state;
    }

}