import {ADD_EXP1_INFO, ADD_EXP2_INFO} from '../actions/actions';

export const exp1 = (
    state = [],
    action,
) => {
    switch (action.type) {
        case ADD_EXP1_INFO: {
            return state.push(action.payload);
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
    console.log(action.type);
    switch (action.type) {
        case ADD_EXP2_INFO: {
            console.log(ADD_EXP2_INFO);
            state.push(action.payload);
            return state;
        }
        default: {
            return state;
        }
    }
};