import React from 'react';
import "./Tile.css"

type TileProps = {
    isCorrect: boolean; 
    isHidden: boolean;
    number: number; 
    onClick: () => void;
    tileId: number; 
    size: number; 
    cols: number; 
};

/**
 * Tile component representing a tile in the puzzle.
 * @param isCorrect Tells if the tile is in the correct position.
 * @param isHidden Tells if the tile is hidden, i.e. 0 for visible and 1 for hidden.
 * @param number Number displayed on tile.
 * @param onClick Callback function to handle tile click.
 * @param tileId  Identifier of the tile.
 * @param size Size of the tile.
 * @param cols The number of columns.
 * @returns Element representing the tile.
 */
const Tile: React.FC<TileProps> = ({
    isCorrect,
    isHidden,
    number,
    onClick,
    tileId,
    size,
    cols,
}) => {
    // Dynamically generate classes for the tile based on its properties
    const tileClasses = `tile ${isCorrect ? "correct" : ""} ${isHidden ? "hidden" : ""}`;

    return (
        <div
        className={tileClasses}
        onClick={onClick}
        style={{ "--tile-size": `${size}px`, "--cols": cols } as React.CSSProperties}
        >
            <span className="tile-number">{number}</span>    
        </div>
    );
};

export default Tile;