import {actionTypes} from '../actions/Actions.jsx';

const initialState = {
    sign: null,
    display_value: 0,
    operation: null,
    operand: 0,
    operator: 0,
  };

export default (state = initialState, action) => {
    switch (action.type){
        case actionTypes.change_sign:
            return (
                Object.assign(
                    {},
                    state,
                    {sign: action.sign}
                )
            );
        case actionTypes.change_display_value:
            return (
                Object.assign(
                    {},
                    state,
                    {display_value: action.display_value}
                )
            );
        case actionTypes.change_operation:
            return (
                Object.assign(
                    {},
                    state,
                    {operation: action.operation}
                )
            );
        case actionTypes.set_operand:
            return (
                Object.assign(
                    {},
                    state,
                    {operand: action.operand}
                )
            );
        case actionTypes.set_operator:
            return (
                Object.assign(
                    {},
                    state,
                    {operator: action.operator}
                )
            );
        case actionTypes.clear:
            return initialState;
        default: 
            return state;
    }
};