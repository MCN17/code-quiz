GIVEN I am taking a code quiz

WHEN I click the start button

1. Need a Start Button
2. Clickable

THEN a timer starts and I am presented with a question

3. Timer - Boolean(variable) as "off switch", stop at 0
4. Questions to appear

WHEN I answer a question
5. A way to answer questions
THEN I am presented with another question
6. After answering -> next question

WHEN I answer a question incorrectly
7. Right/Wrong
THEN time is subtracted from the clock
8. Manipulate timer

WHEN all questions are answered -> endQuiz()
or 
the timer reaches 0 -> endQuiz()

THEN the game is over
9. Game needs end

WHEN the game is over
THEN I can save my initials and score
10. Save name, highscore