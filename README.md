# N-puzzle

## Description

Welcome to the N-puzzle! This project is a React application built with TypeScript.

The puzzle game consists of a grid of numbered tiles, with one tile missing. The goal of the game is to rearrange the tiles to place them in the correct order, starting from 1 at the top left corner.

## How to Play

### Rules
To play, simply click on a tile. This will move the tile towards the blank space if it is in the same row or column as it. The tile does not have to be directly adjacent to the blank space. If you click on a tile several steps from it, all of those tiles will move towards that space.

### Winning
The puzzle is considered solved when the tiles are arranged in ascending numerical order, from left to right, top to bottom, with the empty space in the bottom right corner. If you manage to move the tiles into the correct order, you have won.

### Restart
Click on the restart button "Starta om" to shuffle the tiles and play again. You can start over with a rearranged board at any time by clicking the button.

## How to Run the Program

1. Download the project.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```
4. Once the installation is complete, start the development server:

   ```bash
   npm start
   ```
   This will open the application in your default web browser, usually at http://localhost:3000.

## Changing the Number of Rows and Columns

You are welcome to play around with different numbers of rows and columns in the game. To do this, navigate to `src/App.tsx` and locate the comment indicating where to make the changes.

## Contact
Do you have any questions or suggestions for improvement? Please let me know!
