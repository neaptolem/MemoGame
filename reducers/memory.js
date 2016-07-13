import {
    FLIP_TILE,
    RESTART_GAME
} from '../constants/memory';
import generateTiles from '../data/tiles';

const initialState = {
    round: 1,
    guess1: null,
    guess2: null,
    tiles: generateTiles()
};

export default function memory(state = initialState, action) {
    switch (action.type) {

        case FLIP_TILE:

            let newState = {
                round: state.round + 1
            };

            if (state.round % 2 == 1) {
                let tileClicked = state.tiles.find((tile) => {
                    return tile.id === action.id;
                });

                Object.assign(newState, {
                    guess1: tileClicked.id,
                    guess2: null,
                    tiles: state.tiles.map((tile) => {
                        return tile.id === action.id ?
                            Object.assign({}, tile, {
                                flipped: true
                            }) :
                            Object.assign({}, tile, {
                                flipped: false
                            })
                    })
                })
            } else {
                let tileClicked = state.tiles.find((tile) => {
                    return tile.id === action.id;
                });

                if (tileClicked.rel === state.guess1) {
                    Object.assign(newState, {
                        guess1: state.guess1,
                        guess2: tileClicked.rel,
                        tiles: state.tiles.map((tile) => {
                            return (tile.id === action.id || tile.id === state.guess1) ?
                                Object.assign({}, tile, {
                                    flipped: true,
                                    discovered: true
                                }) :
                                tile
                        })
                    })
                } else {
                    Object.assign(newState, {
                        guess1: state.guess1,
                        guess2: tileClicked.rel,
                        tiles: state.tiles.map((tile) => {
                            return tile.id === action.id ?
                                Object.assign({}, tile, {
                                    flipped: true
                                }) :
                                tile
                        })
                    })
                }
            }

            return newState;

        case RESTART_GAME:

            return {
                round: 1,
                guess1: null,
                guess2: null,
                tiles: generateTiles()
            };

        default:
            return state;
    }
}
