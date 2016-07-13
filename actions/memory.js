import { FLIP_TILE, RESTART_GAME } from '../constants/memory';

export default {

    flipTile : (id) => ({
        type : FLIP_TILE,
        id
    }),

    restart : () => ({
        type : RESTART_GAME
    })

}
