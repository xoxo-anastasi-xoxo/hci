import {combineReducers} from 'redux'
import {exp1, exp2} from './exp.reducer'

export const rootReducer = combineReducers({
    exp1,
    exp2,
});