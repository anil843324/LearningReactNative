import { REMOVE_FROM_WISHLIST, ADD_TO_WISHLIST } from '../ActionTypes';

export const reducers2 = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            const checkData = state.filter((item) => item.id === action.payload.id)
            let flag = false;

            if (checkData.length > 0) {
                flag = true;
            }
            if (flag) {
                return state;
            } else {
                return [...state, action.payload];
            }

        case REMOVE_FROM_WISHLIST:
            const deletedArray2 = state.filter(
                (item, index) => index !== action.payload,
            );
            return deletedArray2;
        default:
            return state;
    }
};

