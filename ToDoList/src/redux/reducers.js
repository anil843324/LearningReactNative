

import { SET_TASK, SET_TASK_ID } from './actions';


const initialState = {
    tasks: [],
    taskID: 1,
}


export const taskReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_TASK:
            return { ...state, tasks: action.payload }
        case SET_TASK_ID:
            return { ...state, taskID: action.payload }
        default:
            return state;
    }
};
