import {Action} from '@ngrx/store'

export class AddProduct implements Action{
    readonly type = CartActionTypes.AddProduct
    constructor(public payload:any){}
}

export class RemoveProduct implements Action{
    readonly type = CartActionTypes.RemoveProduct
    constructor(public payload:any){}
}

export enum CartActionTypes{
    AddProduct ='AddProduct',
    RemoveProduct ='RemoveProduct',
}
export type CartActions = AddProduct | RemoveProduct