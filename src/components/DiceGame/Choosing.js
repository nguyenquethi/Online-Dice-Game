import React, { Component } from 'react'
import Dice from './Dice'

export default class Choosing extends Component {
  render() {
    const styleButton = 'bg-purple-600 text-white p-14 text-5xl rounded-md border-4 border-green-500';
    return (
      <div className='flex justify-between px-6'>
        <button className={styleButton}>Even</button>
        <Dice></Dice>
        <button className={styleButton}>Odd</button>
      </div>
    )
  }
}
