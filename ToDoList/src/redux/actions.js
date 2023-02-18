export const SET_TASK = 'SET_TASK';

export const SET_TASK_ID = 'SET_TASK_ID';

export const setTasks = tasks => dispatch => {
    dispatch({
        type: SET_TASK,
        payload: tasks,
    });
};

export const setTaskId = tasksId => dispatch => {
    dispatch({
        type: SET_TASK_ID,
        payload: tasksId,
    });
};
