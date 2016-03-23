# Tetrelementis

### *A Tetris clone about learning the Chemical Elements*

<img src='/imgs/marathon-ver-1_0.png' title='Marathon Mode'/>

## Setup

**Easy method:** I keep my most up-to-date, stable version of the game on my personal website <a href="http://peternatewood.com" target="_blank">here!</a>

**Download:** If you want to keep a copy on your own computer instead of visiting my site (and why don't you want to visit my site?), keep reading.

1. Clone the repo to your Desktop or whatever directory in which you want to keep it.
2. Use your favorite browser to open 'index.html' in the root directory.
3. Follow the in-game instructions to begin!

<img src='/imgs/start-screen-ver-1_0.png' title="Start screen and directions"/>

## How to Play

Use the arrow keys and spacebar or the buttons in the upper right to control the game.
* Spacebar starts a new game, and pauses/resumes a game in progress.
* Arrow keys move the falling Tetris block (tetromino)
* Left and Right translate the tetromino left and right
* Up rotates the tetromino clockwise
* Down speeds up the tetromino (for those early levels when you just can't wait)

When the game starts, a tetromino of a random shape and chemical element will appear at the top of the game board and begin to fall. Once it cannot fall any further, either by hitting the bottom or another tetromino, a new random tetromino will appear at the top of the board.

Each new tetromino will be of a chemical element that has not yet appeared until the entire periodic table has filled up. Then, the collection of possible elements is reset, so that further tetrominos don't have repeats, and the table left full.

Your objective is to keep the board clear enough that more tetrominos can drop; if there is no more space for a tetromino to appear, the game is over. In order to keep the game going, you must fill every quadrant in a horizontal line accross the board. Once a line is filled, all its quadrants are emptied and every block above it falls one row down.

Every line you clear adds to your score; the more lines cleared at once, the more points earned. You can clear as many as four lines at once, if you're clever about it. Be wary! As your points increase, so does the Level; each level makes the tetromino drop faster, until it drops as fast as if you held the down arrow all the time!

There are three game modes: **Marathon**, **Fixed Level**, and **Pentathlon**
* **Marathon:** The classic Tetris gamemode in which tetrominos are generated forever, and the level increases with your score
* **Fixed Level:** Like **Marathon**, but you choose at which level you want to start, and the level does not increase
* **Pentathlon:** Like **Marathon**, but each tetromino is a permutation of _five_ blocks instead of four (not for the faint of heart)

## Development

While first learning JavaScript, but before learning Git workflow, I spent some extra time building a Tetris clone in the browser. Early on, I decided to distinguish my version by assigning a chemical element to each Tetris block (or 'tetromino'). After several weeks, I had a functional, if clunky, game with a twist of Chemistry.

The more I learned about JavaScript, the more I realized my resulting game needed a total rehaul. Rather than start a new Git repository with no history of my work (or worse, continuing to work _without_ version control) I resolved to start over!

## Browser Support

The game has been tested and operates correctly in the following browsers:

<img src='/imgs/logo-firefox.png' height=16 title='Firefox logo'/> FireFox: version 44

<img src='/imgs/logo-chrome.png' height=16 title='Chrome logo'/> Chrome: version 48

<img src='/imgs/logo-opera.png' height=16 title='Opera logo'/> Opera: version 35

<img src='/imgs/logo-ie-11.png' height=16 title='Internet Explorer 11 logo'/> Internet Explorer (IE): version 11

* Testing for Safari is pending.
* The game should operate normally in IE 9 and 10.
* Scripts may not load correctly in IE 8.

## Version History

:large_blue_diamond: **1.000 : 06 Mar 2016 -** Add three game modes: Marathon, Fixed Level, and Pentathlon.

:small_red_triangle_down: **0.941 : 05 Mar 2016 -** All 118 elements have a brief description and link to a more detailed article on the element. A player can click on any element showing in the table to display its description. As the player's score increases, the game level increases, increasing the tetrominos' drop speed.

:small_red_triangle_down: **0.764 : 04 Mar 2016 -** Game doesn't start until player presses the spacebar. On gameover, the board clears, allowing another game to begin. Starting screen includes directions. Four buttons in the upper right simulate the arrow keys.

:small_red_triangle_down: **0.705 : 24 Feb 2016 -** Game now displays a preview for the next tetromino. When one or more lines are filled, they are instantly cleared and all blocks above them move down. The Periodic Table of Elements fills in with each new tetromino.

:small_red_triangle_down: **0.588 : 16 Feb 2016 -** Player now can rotate tetromino, unless doing so would collide with the bounds of the grid or another tetromino.

:small_red_triangle_down: **0.529 : 15 Feb 2016 -** Player can make the tetromino fall more quickly by holding the down cursor key and can slide tetromino left or right with the corresponding cursor key. Tetromino will stop when colliding with the edges of the grid and with other tetrominos. Default drop speed has been slowed.

:small_red_triangle_down: **0.353 : 13 Feb 2016 -** Line block drops until it reaches the bottom of the grid. Tetromino model includes function to move laterally.

:small_red_triangle_down: **0.235 : 09 Feb 2016 -** Line block drops five spaces and stops.

:small_red_triangle_down: **0.118 : 18 Jan 2016 -** Draw a tetromino on the grid.

:small_red_triangle_down: **0.059 : 12 Jan 2016 -** Draw the Tetris grid.

## MVP Checklist

The Minimum Viable Product must replicate Tetris, and have some educational content about the chemical elements.

:white_check_mark: Draw a grid 10 blocks wide, 20 blocks high.

:white_check_mark: Draw a tetromino on the grid.

:white_check_mark: Draw the appropriate chemical symbol on each block of the tetromino.

:white_check_mark: Drop a tetromino at a constant rate.

:white_check_mark: Floor collision: A tetromino stops falling once it reaches the bottom of the grid.

:white_check_mark: Wall collision: A tetromino stops moving laterally once it reaches a side of the grid.

:white_check_mark: Tetromino collision: A tetromino stops moving when it collides with a landed tetromino.

:white_check_mark: Lateral Control: Player can move the active tetromino left or right.

:white_check_mark: Vertical Control: Player can increase the falling speed of the active tetromino.

:white_check_mark: Rotation: Player can rotate the active tetromino clockwise or counter-clockwise.

:white_check_mark: Block preview: Display upcoming block.

:white_check_mark: Periodic Table: Fill in elements on the table as they are cleared from the grid.

:white_check_mark: Score: As player clears lines, score increases: more lines at once provide exponentially greater points.

:white_check_mark: Element Details: Small display with a few facts about each element.

:white_check_mark: External Links: Provide a link to an external page about each element (NOT Wikipedia!)

:white_check_mark: Levels: As score increases, blocks drop faster.

:white_check_mark: Game Modes: Player can choose between three game modes:
* Marathon uses four-block tetrominos, the level starts at zero and increases based on score up to level 20.
* Fixed Level uses four-block tetrominos but the level starts and stays at the selected number.
* Pentathlon is like Marathon mode but uses five-block tetrominos.

## Planned Features

:white_medium_small_square: Game responds with sound effects.

:white_medium_small_square: Ensure compatibility on mobile platforms.

:white_medium_small_square: Provide alternate control scheme for mobile users.

:white_medium_small_square: Ensure compatibility on more browsers: Opera, Internet Explorer.

## Production Screenshots

Version 1.0 added the extremely difficult Pentathlon mode.

<img src='/imgs/pentathlon-ver-1_0.png' title='Version 1.0 Pentathlon mode'/>

Version 0.764 (pictured below) was the earliest version to be reasonably playable.

<img src='/imgs/ver-0_764.png' title='Version 0.764'/>

Previous versions did not clear the board on a "Game Over." The player would have to refresh the page to play a new game.

## Old Version Screenshots

Here's the old game board, using a grid made of div elements.

<img src='/imgs/old-tetris-board.png' title='Old game board'/>

The upcoming tetromino preview also used div elements, and included a brief description of the chemical element the tetromino used.

<img src='/imgs/old-tetris-preview.png' title='Old game preview'/>

More of the old version, here we can see the periodic table filling in with every new tetromino.

<img src='/imgs/old-tetris-table.png' title='Old game periodic table'/>
