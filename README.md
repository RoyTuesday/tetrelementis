# Tetrelementis

### *A Tetris clone about learning the Chemical Elements*

## Setup

**Easy method:** I keep my most up-to-date, stable version of the game on my personal website [here!](http://roytuesday.github.io/projects/index.html)

**Download:** If you want to keep a copy on your own computer instead of visiting my site (and why don't you want to visit my site?), keep reading.

1. Clone the repo to your Desktop or whatever directory in which you want to keep it.
2. Use your favorite browser to open 'index.html' in the 'app' directory
3. Follow the in-game instructions to begin!

## Development
While first learning JavaScript, but before learning Git workflow, I spent some extra time building a Tetris clone in the browser. Early on, I decided to distinguish my version by assigning a chemical element to each Tetris block (or 'tetrinimo'). After several weeks, I had a functional, if clunky, game with a twist of Chemistry.

The more I learned about JavaScript, the more I realized my resulting game needed a total rehaul. Rather than start a new Git repository with no history of my work (or worse, continuing to work _without_ Git) I resolved to start over!

## Version History

0.1: Tetris grid, line block drops five spaces and stops.

## MVP Checklist

The Minimum Viable Product must replicate Tetris, and have some educational content about the chemical elements.

<p>&#10004 Draw a grid 10 blocks wide, 20 blocks high.</p>
<p>&#10004 Draw a tetrinimo on the grid.</p>
<p>&#10004 Draw the appropriate chemical symbol on each block of the tetrinimo.</p>
<p>&#10004 Drop a tetrinimo at a constant rate.</p>
<p>&#10064 Floor collision: A tetrinimo stops falling once it reaches the bottom of the grid.</p>
<p>&#10064 Wall collision: A tetrinimo stops moving laterally once it reaches a side of the grid.</p>
<p>&#10064 Tetrinimo collision: A tetrinimo stops moving when it collides with a landed tetrinimo.</p>
<p>&#10064 Lateral Control: Player can move the active tetrinimo left or right.</p>
<p>&#10064 Vertical Control: Player can increase the falling speed of the active tetrinimo.</p>
<p>&#10064 Block preview: Display upcoming block.</p>
<p>&#10064 Score: As player clears lines, score increases: more lines at once provide exponentially greater points.</p>
<p>&#10064 Levels: As score increases, blocks drop faster.</p>
<p>&#10064 Difficulty options: Player can choose to begin at different drop speeds and whether level increases.</p>
<p>&#10064 Periodic Table: Fill in elements on the table as they are cleared from the grid.</p>
<p>&#10064 Element Details: Small display with a few facts about each element.</p>
<p>&#10064 External Links: Provide a link to an external page about each element (NOT Wikipedia!)</p>

## Stretch Goals

<p>&#10064 Provide alternate control scheme for tablet and mobile users</p>
<p>&#10064</p>