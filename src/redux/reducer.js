import { Add_To_Card, Remove_To_Card } from "../redux/constant.js";

const initialState = [];
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_To_Card:
            return [
                ...state,
                action.data
            ];

        case Remove_To_Card:
            const result = state?.filter((item) => item?.name != action.data);

            console.log(result, state, "result>>>>>>>>>>>>>>>>>>>>>>>>")
            return [...result];

        default:
            return state;
    }

}