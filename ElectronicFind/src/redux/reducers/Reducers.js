import { ADD_TO_CART, REMOVE_FROM_CART } from '../ActionTypes';

const initialState = {
    cartRedux: [],
    checkDataOrNot: false,

}


export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            const checkData = state.cartRedux.filter((item) => item.id === action.payload.id)
            let flag = false;

            if (checkData.length > 0) {
                flag = true;
            }
            if (flag) {
                return {
                    ...state,
                    checkDataOrNot: true
                }
            } else {
                return {
                    ...state,
                    checkDataOrNot: false,
                    cartRedux: [...state.cartRedux, action.payload]
                }
            }

        case REMOVE_FROM_CART:
            const deletedArray1 = state.cartRedux.filter(
                (item, index) => item.id !== action.payload,
            );
            return {
                ...state,
                cartRedux: deletedArray1
            }
        default:
            return state;
    }
};

