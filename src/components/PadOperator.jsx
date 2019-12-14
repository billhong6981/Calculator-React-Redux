import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { change_sign, change_display_value, change_operation, set_operand, set_operator, clear } from '../actions/Actions.jsx';

class PadOperator extends Component {

  constructor(props) {
    super(props);
    this.changeNumber = this.changeNumber.bind(this);
  };

  changeNumber() {
    const number = this.props.value;
    if (number === 'c') {
      this.props.clear();
    } else if (number === '=') {
      this.props.set_operator(this.props.display_value)
      this.props.change_sign(number)
    } else {
      this.props.set_operand(this.props.display_value)
      this.props.change_display_value(0)
      this.props.change_operation(number)
    }
  }

  render() {
    let { value } = this.props;
    return (
      <div className="pad operator" onClick={() => this.changeNumber()}>
        {value}
      </div>
    )
  }
}

export default connect(
  state => ({
    sign: state.sign,
    display_value: state.display_value,
    operation: state.operation,
    operator: state.operator,
    operand: state.operand
  }),
  dispatch => ({
    change_sign: bindActionCreators(change_sign, dispatch),
    change_display_value: bindActionCreators(change_display_value, dispatch),
    change_operation: bindActionCreators(change_operation, dispatch),
    set_operand: bindActionCreators(set_operand, dispatch),
    set_operator: bindActionCreators(set_operator, dispatch),
    clear: bindActionCreators(clear, dispatch)
  })
)(PadOperator);

//PadNumber.propTypes = {
//  value: PropTypes.number.isRequired,
//  change_display: PropTypes.func.isRequired
//}
