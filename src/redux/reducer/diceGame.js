const initialState = {
    yourChoosing: true,
    goal: 0,
    totalGame: 0,
    listDice: [{dice: 1}, {dice: 3}, {dice: 4}],
};

export const diceGame = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'CHANGING OPTION': {
            const newState = {...state};
            newState.yourChoosing = action.payload;
            return newState;
        }
        case 'PLAY_GAME': {
            const newState = {...state};
            newState.listDice = action.payload;
            // calculate the sum of 3 dice
            let sumDice = 0;
            for (let item of newState.listDice){
                sumDice += item.dice;
            }
            // check player win or lose
            if (sumDice > 10) {
                if(newState.yourChoosing){
                    newState.goal += 1;
                }
            }else {
                if(!newState.yourChoosing) {
                    newState.goal += 1;
                }
            }
            // doing plus to total game one more value
            newState.totalGame += 1;

            return newState;
        }
        default: {
            return state;
        }
    }
}