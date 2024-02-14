import React from 'react';
import Board from "../board/Board";
import "./Game.css"

type GameProps = {
    rows: number;
    cols: number;
};

/**
 * Game component representing the game container.
 * @param rows Number of rows in the board.
 * @param cols  Number of columns in the board.
 * @returns Element representing the game.
 */
const Game: React.FC<GameProps> = ({rows, cols}) => {
    return (
        <div className='game-container'>
            <div className='game'>
                <Board rows={rows} cols={cols}/>
            </div>
        </div>
    );
};

export default Game;