import React, { Component } from 'react'
import Dice from './Dice'
import { connect } from 'react-redux';

class Choosing extends Component {
  render() {
    console.log(this.props);
    const styleButton = 'bg-purple-600 text-white p-14 text-5xl rounded-md border-4 border-green-500';
    return (
      <div className='flex justify-between px-6'>
        <button className={styleButton} onClick={() => {this.props.handleChange(true)}}>Even</button>
        <Dice></Dice>
        <button className={styleButton} onClick={() => {this.props.handleChange(false)}}>Odd</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleChange: (value) => {
      const action = {
        type: 'CHANGING OPTION',
        payload: value,
      };
      dispatch(action);
    }
  };
}

export default connect(null, mapDispatchToProps)(Choosing)