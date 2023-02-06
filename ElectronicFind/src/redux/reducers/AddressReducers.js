import { DELETE_ADDRESS, ADD_ADDRESS } from '../ActionTypes';

export const addressReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ADDRESS:


            return [...state, action.payload];


        case DELETE_ADDRESS:
            const deletedArray2 = state.filter(
                (item, index) => index !== action.payload,
            );
            return deletedArray2;
        default:
            return state;
    }
};

