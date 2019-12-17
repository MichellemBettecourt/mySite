 Homework 9: Generate scrabble board game
File: https://michellembettecourt.github.io/mySite/GUI_HW9/hw9.html
Name: Michelle Bettencourt
E-mail: michelle_bettencourt@student.uml.edu
University affiliation: UMass Lowell student in GUI COMP.4610
Date: December 16, 2019
Description: We were asked to make one row of a scrabble board

How to use it

- Drag the tiles from the holder on the left to the board
- Note the running total of your score
- Make a word and click the make work button
- After that you will get more tiles from the bag but KEEP the one's you did not use.
- Keep doing this until you can not make any more words
- Click new Game

How I did it
- I found that implementing the board was pretty easy
- I took an image off the internet and places a grid of div directly on top
- The tiles were given a draggle feature from jquery
- The grid elements where given drop able.
- When ever a user drops a piece I keep track of the tile and the piece based on their ids


Small existing bug:
  - It is not listed anywhere on the rubric as a requirement
  - But if a use drags a tile to the board they can move it again.
  - I have tried to fix it but can not figure it out.
  - But I did the extra credit

RUBRIC
Program Integrity / Design
• (4) letter tiles in the player’s “hand” are selected randomly from a data structure with the
proper distribution of the letters                                                                | DONE
• (4) letter tiles can be dragged-and-dropped onto target Scrabble squares                        | DONE
• (4) program identifies which letter tile is dropped onto which Scrabble square                  | DONE
• (4) board includes bonus squares                                                                | DONE
• (4) score is tallied correctly, including consideration of bonus square multipliers             | DONE
Additional Functionality
• (3) any number of words can be played until the player wishes to quit                           | DONE
• (3) the board is cleared after each round so that a new word can be played                      | DONE using New Game button
• (3) after playing a word, only the number of letter tiles needed to bring the player’s “hand”
back to 7 tiles are selected                                                                      | DONE using More Tiles button
• (3) score is kept for multiple words                                                            | DONE


Source Code Documentation and Formatting
• user name and pertinent contact information appear in all source files                          | DONE
• all files contain adequate explanatory documentation that is meaningful and does not merely
echo code                                                                                         | DONE to the best of my knowledge
• all files are properly indented and formatted with adequate white space for readability         | DONE
• any sources used are cited in comments embedded within code                                     | DONE
• Complete write-up about implemented features                                                    | DONE

Extra Credit
• (1 points) multiple Scrabble board lines are implemented                                        | DONE
• (2 point) Full Scrabble board lines are implemented                                             | DONE
• (1 points) Validating to se
