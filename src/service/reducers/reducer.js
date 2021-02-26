import {ADD_TO_CART} from '../../service/constants';

const initialState = {
    cartData:[]
}

export default function cartItems(state = [], action){

    switch(action.type){
        case ADD_TO_CART :
            return [
                ...state,
            {cartData: action.data}
            ]
            break;
        default :
            return state
    }

}