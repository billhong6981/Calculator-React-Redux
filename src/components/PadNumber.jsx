import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { change_display_value } from '../actions/Actions.jsx';

class PadNumber extends Component {

  constructor(props) {
    super(props);
    this.changeNumber = this.changeNumber.bind(this);
  };

  changeNumber() {
      this.props.change_display_value(this.props.display_value * 10 + this.props.value);
  }

  render(){
    let { value } = this.props;
    return (
      <div className="pad" onClick={ () => this.changeNumber() }>
        {value}
      </div>
    )
  }
}

export default connect(
  state => ({
    display_value: state.display_value,
  }),
  dispatch => ({
    change_display_value: bindActionCreators(change_display_value, dispatch),
  })
)(PadNumber);

//PadNumber.propTypes = {
//  value: PropTypes.number.isRequired,
//  change_display: PropTypes.func.isRequired
//}
