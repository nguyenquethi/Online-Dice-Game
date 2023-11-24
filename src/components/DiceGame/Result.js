import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    console.log(this.props);
    const {goal, yourChoosing, totalGame} = this.props;
    return (
      <div>
        <p className='text-4xl'>
          Your dice: <span className='text-red-500'>{yourChoosing?"Even":"Odd"}</span>
        </p>
        <p className='text-4xl'>
          Goal: <span className='text-blue-500'>{goal}</span>
        </p>
        <p className='text-4xl'>
          Total Game: <span className='text-yellow-500'>{totalGame}</span>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    goal: state.diceGame.goal,
    yourChoosing: state.diceGame.yourChoosing,
    totalGame: state.diceGame.totalGame,
  }
} 
export default (connect)(mapStateToProps) (Result);
