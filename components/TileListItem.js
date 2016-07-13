import React from 'react';
import classNames from 'classnames';

export default ({
    tile,
    flipTile
}) => {

    let tileClass = classNames({
        'flipper' : true,
        'flipped' : tile.flipped || tile.discovered
    });

    return (
        <li className="flip-container">
            <div className={tileClass}>
                <div className="front" onClick={() => flipTile(tile.id)}></div>
        		<div className="back">
                    <img src={tile.url} />
        		</div>
        	</div>
        </li>
    );
}
