import {combineReducers} from 'redux';
import {burgerReduce} from './burgerReduce';

 const rootReducer = combineReducers({
    burgerReduce,
})



export default rootReducer