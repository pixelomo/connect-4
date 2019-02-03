import { declareWinner } from '../actions/winner'

const initial = {
    player: 'red',
    board: [
        ['','','','','','',''], // 0
        ['','','','','','',''], // 1 
        ['','','','','','',''], // 2
        ['','','','','','',''], // 3
        ['','','','','','',''], // 4
        ['','','','','','',''], // 5
        ['','','','','','',''], // 6
    ]
}

const board = (state = initial, action) => {

    if (action.type === 'NEW_GAME') {
        return { ...initial }
    }

    if (action.type === 'SLOT_SELECTED') {
        // console.log('Slot selected on column ' + action.column)
        const slot = state.player;
        const col = state.board[action.column]
        const empty = col.findIndex(e => e === '');
        col.splice(empty, '', slot)
        const board = state.board.slice()
        board[action.column] = col
        return{
            player: state.player === 'red' ? 'yellow' : 'red',
            board: board
        }
    } 
    
    return state;
}

export default board