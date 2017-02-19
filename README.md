# <a href="http://peternatewood.com/projects/tetrelementis" target="_blank">Tetrelementis</a>

### *A Tetris clone about learning the Chemical Elements*

<img src='/imgs/marathon-ver-2_0.png' title='Marathon Mode'/>

## How to Play

Check it out on <a href="http://peternatewood.com/projects/tetrelementis">here on my website.</a>

Use the arrow keys and spacebar or the buttons in the upper right to control the game.
* Spacebar starts a new game, and pauses/resumes a game in progress.
* Arrow keys move the falling Tetris block (tetromino)
* Left and Right translate the tetromino left and right
* Z rotates the tetromino counter-clockwise and X rotates it clockwise.
* Down speeds up the tetromino (for those early levels when you just can't wait)

When the game starts, a tetromino of a random shape and chemical element will appear at the top of the game board and begin to fall. Once it cannot fall any further, either by hitting the bottom or another tetromino, a new random tetromino will appear at the top of the board.

Each new tetromino will be of a chemical element that has not yet appeared until the entire periodic table has filled up. Then, the collection of possible elements is reset, so that further tetrominos don't have repeats, and the table left full.

Your objective is to keep the board clear enough that more tetrominos can drop; if there is no more space for a tetromino to appear, the game is over. In order to keep the game going, you must fill every quadrant in a horizontal line accross the board. Once a line is filled, all its quadrants are emptied and every block above it falls one row down.

Every line you clear adds to your score; the more lines cleared at once, the more points earned. You can clear as many as four lines at once, if you're clever about it. Be wary! As your points increase, so does the Level; each level makes the tetromino drop faster, until it drops as fast as if you held the down arrow all the time!

There are three game modes: **Marathon** and **Fixed Level**
* **Marathon:** The classic Tetris gamemode in which tetrominos are generated forever, and the level increases with your score. Every ten points increases the level by one.
* **Fixed Level:** Like **Marathon**, but you choose at which level you want to start, and the level does not increase.

## Development

While first learning JavaScript, but before learning Git workflow, I spent some extra time building a Tetris clone in the browser. Early on, I decided to distinguish my version by assigning a chemical element to each Tetris block (or 'tetromino'). After several weeks, I had a functional, if clunky, game with a twist of Chemistry.

The more I learned about JavaScript, the more I realized my resulting game needed a total rehaul. Rather than start a new Git repository with no history of my work (or worse, continuing to work _without_ version control) I resolved to start over!

I decided to come back to this project one more time, after learning more about web development and how to optimize JavaScript performance. This version contains all of the features of the previous with some improvements, and I intend to complete many features I had not implemented before.

## Browser Support

The game has been tested and operates correctly in the following browsers:

<img src='/imgs/logo-firefox.png' height=16 title='Firefox logo'/> **FireFox:**
* Tested: version 51.0
* Oldest: version 3.6

<img src='/imgs/logo-chrome.png' height=16 title='Chrome logo'/> **Chrome:**
* Tested: version 56.0
* Oldest: version 4.0

<img src='/imgs/logo-opera.png' height=16 title='Opera logo'/> **Opera:**
* Tested: version 43.0
* Oldest: version 10.1

<img src='/imgs/logo-ie-11.png' height=16 title='Internet Explorer 11 logo'/> **Internet Explorer (IE):**
* Tested: version 11.0
* Oldest: version 9.0

#### Notes
* The game should operate normally in IE 9 and 10.
* Older versions of IE do not support the &lt;canvas&gt; tag.
* IE 11 and older do not support the webAudio API; if you want music or sound, appeal to Microsoft.
* Edge is just as finiky as older versions of IE, but should work just as well.

* Testing for Safari is pending. It doesn't support the keyEvent.key property; though I have built compatibility for this, it requires extensive testing to ensure keybinding will work correctly.

## Version History

:large_blue_diamond: **2.0 : 18 Feb 2017 -** Rewrote almost all the JS to get better performance, and use just one &lt;canvas&gt; element.

:small_red_triangle_down: **1.150 : 30 Mar 2016 -** High score is now saved in local storage, and returning users will find their high score is loaded into the page. Players can also reset their high score, if desired.

:small_red_triangle_down: **1.100 : 28 Mar 2016 -** Add controls to rotate the tetromino both clockwise and counter-clockwise. Button controls now more closely resemble keyboard keys.

:small_red_triangle_down: **1.000 : 06 Mar 2016 -** Add three game modes: Marathon, Fixed Level, and Pentathlon.

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

:white_check_mark: Opera compatibility

:white_check_mark: IE 11 compatibility

## Planned Features

:white_medium_small_square: Game responds with sound effects.

:white_medium_small_square: Compatibility on mobile platforms?

:white_medium_small_square: Provide alternate control scheme for mobile users (biggest barrier to mobile).

:white_medium_small_square: Ensure compatibility on more browsers: Safari.

## Production Screenshots
Version 2.0 introduces a mouse cursor, options menu, pause overlay, and keyboard icons that respond to key presses. Additionally, the JavaScript has been optimized for better performance.

<img src='/imgs/marathon-ver-2_0.png' title='Version 2.0 Marathon Mode'/>

Version 1.0 cleaned up the interface and used the &lt;canvas&gt; element instead of manipulating the classes on many divs. This approach also allowed me to fit the three-letter chemical symbols on tetromino blocks without too much trouble.

<img src='/imgs/marathon-ver-1_0.png' title='Version 1.0 Marathon Mode'/>

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
