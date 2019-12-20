import {combineReducers} from 'redux'
import {exp1, exp2} from './exp1.reducer'

export const rootReducer = combineReducers({
    exp1,
    exp2,
});