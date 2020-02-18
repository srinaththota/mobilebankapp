import { TRANSFER_MONEY } from '../actions/types';
const initialState={
    transferStatusfromStore:'money transfered',
    transactions:''
}
const moneyTransfer=(state=initialState,action)=>{

    switch(action.type){
        case TRANSFER_MONEY:
            return{
                ...state,
                transferStatusfromStore:'got request for money transfer'
            }
    }
    return state;
}

export default moneyTransfer;