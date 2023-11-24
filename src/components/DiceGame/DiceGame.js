import React, { Component } from 'react'
import Choosing from './Choosing'
import Result from './Result'
import './diceGame.scss'

export default class DiceGame extends Component {
  render() {
    return (
      <div className='bg_diceGame'>
        <div className="container space-y-5">
            <h1 className='text-6xl'>Dice Game</h1>
            <Choosing></Choosing>
            <Result></Result>
            <button className='py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 duration-500'>Play Game</button>
        </div>
      </div>
    )
  }
}
