import React from 'react';

import TileListItem from './TileListItem';

export default ({
    tiles,
    flipTile
}) => (
    <ul className="tiles">
        {
            tiles.map(tile =>
                <TileListItem
                    key={tile.id}
                    tile={tile}
                    flipTile={flipTile}
                />
            )
        }
    </ul>
)
