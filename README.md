# Tetrelementis

### *A Tetris clone about learning the Chemical Elements*

## Setup

**Easy method:** I keep my most up-to-date, stable version of the game on my personal website [here!](http://roytuesday.github.io/projects/index.html)

**Download:** If you want to keep a copy on your own computer instead of visiting my site (and why don't you want to visit my site?), keep reading.

1. Clone the repo to your Desktop or whatever directory in which you want to keep it.
2. Use your favorite browser to open 'index.html' in the root directory.
3. Follow the in-game instructions to begin!

## Development
While first learning JavaScript, but before learning Git workflow, I spent some extra time building a Tetris clone in the browser. Early on, I decided to distinguish my version by assigning a chemical element to each Tetris block (or 'tetrinimo'). After several weeks, I had a functional, if clunky, game with a twist of Chemistry.

The more I learned about JavaScript, the more I realized my resulting game needed a total rehaul. Rather than start a new Git repository with no history of my work (or worse, continuing to work _without_ Git) I resolved to start over!

## Version History

:large_blue_diamond: **0.471 : 15 Feb 2016 -** Player can now move the tetrinimo left or right using the cursor keys. The tetrinimo stops moving if it reaches either edge of the grid or collides with another tetrinimo.

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

:white_medium_small_square: Vertical Control: Player can increase the falling speed of the active tetrinimo.

:white_medium_small_square: Rotation: Player can rotate the active tetrinimo clockwise or counter-clockwise.

:white_medium_small_square: Block preview: Display upcoming block.

:white_medium_small_square: Score: As player clears lines, score increases: more lines at once provide exponentially greater points.

:white_medium_small_square: Levels: As score increases, blocks drop faster.

:white_medium_small_square: Difficulty options: Player can choose to begin at different drop speeds and whether level increases.

:white_medium_small_square: Periodic Table: Fill in elements on the table as they are cleared from the grid.

:white_medium_small_square: Element Details: Small display with a few facts about each element.

:white_medium_small_square: External Links: Provide a link to an external page about each element (NOT Wikipedia!)

## Stretch Goals

:white_medium_small_square: Ensure compatability on mobile platforms

:white_medium_small_square: Provide alternate control scheme for mobile users

:white_medium_small_square: Ensure compatability on more browsers: Opera, Internet Explorer
