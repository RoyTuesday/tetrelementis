# Tetrelementis

### *A Tetris clone about learning the Chemical Elements*

## Setup

**Easy method:** I keep my most up-to-date, stable version of the game on my personal website <a href="http://peternatewood.com" target="_blank">here!</a>

**Download:** If you want to keep a copy on your own computer instead of visiting my site (and why don't you want to visit my site?), keep reading.

1. Clone the repo to your Desktop or whatever directory in which you want to keep it.
2. Use your favorite browser to open 'index.html' in the root directory.
3. Follow the in-game instructions to begin!

## Development
While first learning JavaScript, but before learning Git workflow, I spent some extra time building a Tetris clone in the browser. Early on, I decided to distinguish my version by assigning a chemical element to each Tetris block (or 'tetrinimo'). After several weeks, I had a functional, if clunky, game with a twist of Chemistry.

The more I learned about JavaScript, the more I realized my resulting game needed a total rehaul. Rather than start a new Git repository with no history of my work (or worse, continuing to work _without_ version control) I resolved to start over!

## Version History

:large_blue_diamond: **0.882 : 05 Mar 2016 -** All 118 elements have a brief description and link to a more detailed article on the element. A player can click on any element showing in the table to display its description.

:small_red_triangle_down: **0.764 : 04 Mar 2016 -** Game doesn't start until player presses the spacebar. On gameover, the board clears, allowing another game to begin. Starting screen includes directions. Four buttons in the upper right simulate the arrow keys.

:small_red_triangle_down: **0.705 : 24 Feb 2016 -** Game now displays a preview for the next tetrinimo. When one or more lines are filled, they are instantly cleared and all blocks above them move down. The Periodic Table of Elements fills in with each new tetrinimo.

:small_red_triangle_down: **0.588 : 16 Feb 2016 -** Player now can rotate tetrinimo, unless doing so would collide with the bounds of the grid or another tetrinimo.

:small_red_triangle_down: **0.529 : 15 Feb 2016 -** Player can make the tetrinimo fall more quickly by holding the down cursor key and can slide tetrinimo left or right with the corresponding cursor key. Tetrinimo will stop when colliding with the edges of the grid and with other tetrinimos. Default drop speed has been slowed.

:small_red_triangle_down: **0.353 : 13 Feb 2016 -** Line block drops until it reaches the bottom of the grid. Tetrinimo model includes function to move laterally.

:small_red_triangle_down: **0.235 : 09 Feb 2016 -** Line block drops five spaces and stops.

:small_red_triangle_down: **0.118 : 18 Jan 2016 -** Draw a tetrinimo on the grid.

:small_red_triangle_down: **0.059 : 12 Jan 2016 -** Draw the Tetris grid.

## MVP Checklist

The Minimum Viable Product must replicate Tetris, and have some educational content about the chemical elements.

:white_check_mark: Draw a grid 10 blocks wide, 20 blocks high.

:white_check_mark: Draw a tetrinimo on the grid.

:white_check_mark: Draw the appropriate chemical symbol on each block of the tetrinimo.

:white_check_mark: Drop a tetrinimo at a constant rate.

:white_check_mark: Floor collision: A tetrinimo stops falling once it reaches the bottom of the grid.

:white_check_mark: Wall collision: A tetrinimo stops moving laterally once it reaches a side of the grid.

:white_check_mark: Tetrinimo collision: A tetrinimo stops moving when it collides with a landed tetrinimo.

:white_check_mark: Lateral Control: Player can move the active tetrinimo left or right.

:white_check_mark: Vertical Control: Player can increase the falling speed of the active tetrinimo.

:white_check_mark: Rotation: Player can rotate the active tetrinimo clockwise or counter-clockwise.

:white_check_mark: Block preview: Display upcoming block.

:white_check_mark: Periodic Table: Fill in elements on the table as they are cleared from the grid.

:white_check_mark: Score: As player clears lines, score increases: more lines at once provide exponentially greater points.

:white_check_mark: Element Details: Small display with a few facts about each element.

:white_check_mark: External Links: Provide a link to an external page about each element (NOT Wikipedia!)

:white_medium_small_square: Levels: As score increases, blocks drop faster.

:white_medium_small_square: Difficulty options: Player can choose to begin at different drop speeds and whether level increases.

## Stretch Goals

:white_medium_small_square: Game responds with sound effects.

:white_medium_small_square: Ensure compatibility on mobile platforms.

:white_medium_small_square: Provide alternate control scheme for mobile users.

:white_medium_small_square: Ensure compatibility on more browsers: Opera, Internet Explorer.

## Production Screenshots

Version 0.764 (pictured below) was the earliest version to be reasonably playable.

![version 0.764](/imgs/ver-0_764.png)

Previous versions did not clear the board on a "Game Over." The player would have to refresh the page to play a new game.

## Old Version Screenshots

Here's the old game board, using a grid made of div elements.

![old game board](/imgs/old-tetris-board.png)

The upcoming tetrinimo preview also used div elements, and included a brief description of the chemical element the tetrinimo used.

![old game preview](/imgs/old-tetris-preview.png)

More of the old version, here we can see the periodic table filling in with every new tetrinimo.

![old game periodic table](/imgs/old-tetris-table.png)
