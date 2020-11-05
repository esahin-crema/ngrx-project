import { State } from '@ngrx/store';
import {CartActionTypes,CartActions} from "./actions";
export let initialState=[]
export function reducer(state=initialState,action:CartActions){
    switch(action.type){
        case CartActionTypes.AddProduct:
            return [...state,action.payload]
        case CartActionTypes.RemoveProduct:
            let product = action.payload
            return state.filter((el)=>el.id != product.id)
        default:
            return state
    }
}