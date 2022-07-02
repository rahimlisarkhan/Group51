import { combineReducers } from 'redux'
import { categoryReducer } from './category'
import { homeReducer } from './home'



const reducers = combineReducers({
    home:homeReducer,
    categories:categoryReducer
})


export default reducers