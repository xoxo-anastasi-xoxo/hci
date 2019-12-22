import {ADD_EXP1_INFO, ADD_EXP2_INFO, CLEAR_ALL} from '../actions/actions';

export const exp1 = (
    state = [],
    action,
) => {
    switch (action.type) {
        case ADD_EXP1_INFO: {
            return state.push(action.payload);
        }
        case CLEAR_ALL: {
            return [];
        }
        default: {
            return state;
        }
    }
};

export const exp2 = (
    state = [],
    action,
) => {
    switch (action.type) {
        case ADD_EXP2_INFO: {
            state.push(action.payload);
            return state;
        }
        case CLEAR_ALL: {
            return [];
        }
        default: {
            return state;
        }
    }
};