
import { createStore } from 'redux';


const initialState={
    count:0
}
const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'increament':
            return {...state,count:state.count+1}
            case 'decreament':
                return {...state,count:state.count-1}
                default:
                    return state
    }
}
const store = createStore(counterReducer);
export default store