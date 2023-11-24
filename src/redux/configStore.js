import {configureStore} from '@reduxjs/toolkit'
import {diceGame} from './reducer/diceGame'

export const store = configureStore({
    reducer: {
        diceGame,
    }
})