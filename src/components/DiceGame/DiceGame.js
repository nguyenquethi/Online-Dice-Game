import React, { Component } from 'react'
import Choosing from './Choosing'
import Result from './Result'
import './diceGame.scss'
import { connect } from 'react-redux';
import {randomNumInRange} from './../../util/util'

class DiceGame extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='bg_diceGame'>
        <div className="container space-y-5">
            <h1 className='text-6xl'>Dice Game</h1>
            <Choosing></Choosing>
            <Result></Result>
            <button onClick={this.props.playGame} className='py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 duration-500'>Play Game</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    playGame: () => {
     let newListDice = [];
     for (let i = 0; i < 3; i++) {
      newListDice.push({
        dice: randomNumInRange(6),
      });
     }

     const action = {
      type: 'PLAY_GAME',
      payload: newListDice,
     };
     dispatch(action);
    },
  };
}
export default connect(null, mapDispatchToProp)(DiceGame)