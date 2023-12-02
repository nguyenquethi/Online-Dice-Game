import React, { Component } from 'react'
import { connect } from 'react-redux'




class Dice extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='flex sapce-x-3 bg-white h-20'>

        {this.props.listDice.map((item, index) => {
          return (
            <img className='h-20' src={`./image/${item.dice}.png`} alt="" />
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listDice: state.diceGame.listDice,

  };
}

export default connect(mapStateToProps)(Dice);
