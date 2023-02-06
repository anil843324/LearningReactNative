import { DELETE_ORDER, ADD_ORDER } from '../ActionTypes';

export const orderReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER:


            return [...state, action.payload];


        case DELETE_ORDER:
            const deletedArray2 = state.filter(
                (item, index) => index !== action.payload,
            );
            return deletedArray2;
        default:
            return state;
    }
};

