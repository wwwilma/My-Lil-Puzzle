import React, { useState, useEffect } from 'react';
import Tile from '../tile/Tile';
import { generateBoard, getBoardSize, isSolved, moveTile } from '../../helpers/helpers';
import useScreenSize from '../../hooks/useScreenSize';
import Button from '../button/Button';
import "./Board.css";

type BoardProps = {
    rows: number;
    cols: number;
};

/**
 * 
 * @param rows Number of rows in the board.
 * @param cols  Number of columns in the board.
 * @returns Element representing the board.
 */
const Board: React.FC<BoardProps> = ({rows, cols}) => {
    const [tiles, setTiles] = useState<number[]>(generateBoard(cols, rows)); // State to store the tiles on the board
    const [solved, setSolved] = useState(false); // State to track if the board is solved
    const screenSize = useScreenSize(); 

    // Calculate the maximum numbers of columns and rows that fit on the screen
    const maxCols = Math.floor(screenSize.width / 100); 
    const maxRows = Math.floor(screenSize.height / 100);

    // Calculate the numbers of columns and rows to fit on the screen
    const colsToFit = Math.min(cols, maxCols); 
    const rowsToFit = Math.min(rows, maxRows);

    // Calculate tile size based on screen size and number of columns/rows
    const tileSize = Math.min(
        ((screenSize.width - 40) / colsToFit) - 12, 
        ((screenSize.height - 40) / rowsToFit) - 12
    );

    // Calculate the width and the height of the inner board
    const innerBoardWidth = (tileSize * colsToFit) + (8 * (colsToFit - 1));
    const innerBoardHeight = (tileSize * rowsToFit) + (8 * (rowsToFit - 1));

    // Function to handle tile click event
    const onTileClick = (id: number) => {
        setTiles(prevTiles => {
            const movedTiles = moveTile(id, cols, prevTiles);
            isSolved(movedTiles) && setSolved(true);
            return movedTiles;
        });
    };

    // Function to shuffle the tiles and start the game
    const shuffleTiles = () => {
        setTiles(generateBoard(cols, rows));
        setSolved(false);
    };

    // Effect to generate a new board when number of rows and columns change
    useEffect(() => {
        setTiles(generateBoard(cols, rows));
    }, [cols, rows]);

    return (
        <div className='board-container'>
            <div className='inner-board' style={{ "--cols": cols, "--rows": rows, width: `${innerBoardWidth}px`, height: `${innerBoardHeight}px` } as React.CSSProperties}>
                {tiles.map((tile, i) => (
                    <Tile
                        key={i}
                        isCorrect={tile === i + 1}
                        isHidden={tile === getBoardSize(cols, rows)}
                        number={tile}
                        onClick={() => onTileClick(i)}
                        size={tileSize}
                        tileId={i}
                        cols={cols}
                    />    
                ))}
            </div>
            <Button onClick={() => shuffleTiles()} text ="Starta om" />
            {solved && (
                <div className='text'>
                    Du har vunnit!
                </div>
            )}
        </div>
    );
};

export default Board;