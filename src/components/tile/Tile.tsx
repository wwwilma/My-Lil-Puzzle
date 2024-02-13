import React from 'react';
import "./Tile.css"

type TileProps = {
    isCorrect: boolean;
    isHidden: number;
    number: number;
    size: number;
    tileId: number;
    onClick: () => void;
    cols: number;
};

export {};