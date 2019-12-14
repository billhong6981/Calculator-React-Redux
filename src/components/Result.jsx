import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { change_display_value } from '../actions/Actions.jsx';

const operations = {
    '+': 'Addition',
    '-': 'Subtraction',
    'x': 'Multiply',
    '/': 'Devision'
}
function Addition(a, b) {
    return (a + b)
}
function Subtraction(a, b) {
    return (a - b)
}
function Multiply(a, b) {
    return a * b
}
function Devision(a, b) {
    if (b === 0) {
        return 0;
    }
    return parseFloat(a) / b
}

class Result extends Component {
    handleEqualSign() {
        const fn = operations[this.props.operation];
        const v = eval(fn)(this.props.operand, this.props.operator)
        this.props.change_display_value(v)
    }

    componentDidUpdate(preProps) {
        if (this.props.sign !== preProps.sign) {
            this.handleEqualSign()
        }
    }
    render() {
        const { display_value } = this.props;
        return (
            <div className="result">
                {display_value}
            </div>
        )
    }
}

export default connect(
    state => ({
        display_value: state.display_value,
        sign: state.sign,
        operation: state.operation,
        operand: state.operand,
        operator: state.operator
    }),
    dispatch => ({
        change_display_value: bindActionCreators(change_display_value, dispatch),
    })
)(Result);

/*
export default connect(
    state => ({
       display_value: state.display_value,
    }),
)(Display);
*/