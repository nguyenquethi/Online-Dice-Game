import React, { Component } from 'react'
import dice1 from './../../assets/image/1.png'
import dice2 from './../../assets/image/2.png'
import dice3 from './../../assets/image/3.png'
import dice4 from './../../assets/image/4.png'
import dice5 from './../../assets/image/5.png'
import dice6 from './../../assets/image/6.png'

export default class Dice extends Component {
  render() {
    return (
      <div className='flex sapce-x-3 bg-white h-20'>
        <img className='h-20' src={dice1} alt="" />
        <img src={dice2} alt="" />
        <img src={dice3} alt="" />
      </div>
    )
  }
}
