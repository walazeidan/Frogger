# Project-One
My first dev project for the Software Engineering Immersive course and also my first ever project using JavaScript. We were presented with a list of games to choose from. I chose frogger even though prior to this I had never even heard of it. After a little bit of research, I concluded that this was the perfect level of difficulty to challenge me at my current skill level. 
<img width="1438" alt="Screenshot 2021-11-02 at 15 19 25" src="https://user-images.githubusercontent.com/87997491/139876179-89e5c320-d90a-4f7b-b90d-c90dc3cbf3af.png">

# Goal
To build a functioning browser grid game using pure Javascript in one week.

# Technologies used
* HTML
* CSS
* JavaScript
* Github

# Approach and Timeline
__Day 1__ <br />
I spent the first day planning - considering the functionality I want to implement and dividing it into manageable chunks so as not to get overwhelmed. I eventually decided to split the functionality into 2 sections: MVP and nice-to-haves. The MVP being critical to how the game functions while the nice-to-haves would be considered only if I had time.
__Day 2__ <br />
I decided that for MVP I wanted a minimum of 8 obstacles. The first row would be the starting position of the player and the final row, should it be reached, would be where the game would be won. With this in mind I set about creating a 10 x 10 grid with the player positioned in the center of the first row. I did this using a for loop to create the div elements, I then pushed these divs to an empty array and appended them to the grid div in my HTML.
```
function createGrid(startPos){
    for (let i = 0; i < cellCount; i++){ 
      const cell = document.createElement('div') 
      cell.innerText = i 
      cell.setAttribute('id' , i)
      grid.appendChild(cell) 
      cells.push(cell)
    }
    addFrog(startPos)
  }
  ```
  I created keydown event listeners to allow the player to move when the corresponding keys are pressed, with logic to refrain the player from moving off the grid.
```
function handleKeyDown(event){
    
    removeFrog(currentPosition)

    const key = event.keyCode 
    const right = 39
    const left = 37
    const up = 38
    const down = 40

    if (key === right && currentPosition % width !== width - 1){
      currentPosition++
    } else if (key === left && currentPosition % width !== 0){
      currentPosition--
    } else if (key === up && currentPosition >= width){
      currentPosition -= width
    } else if (key === down && currentPosition + width <= cellCount - 1){
      currentPosition += width
    } else {
      console.log('INVALID KEY')
    } 
 ```
  __Day 3 - 6__ <br />
These days consisted of developing the functions that would place and move the obstacles. I wanted the obstacles to move in different ways so the game would be more challenging. My idea was that some obstacles would be stagnant, some would move from one cell to another, and some would move along the whole length of the grid. These were some of the most challenging days for me. The stagnant obstacles were simple enough but the mobile obstacles proved to be more difficult. Getting them to move smoothly and effectively took a lot of hard work and I had to approach it from a few angles before settling on using various if statements and for loops within set intervals. 
* Here is a code snippet of the function that allowed the herons moved from div to div:
```
function addHerons() {
    for (let i = 0; i < heronPlacement.length; i++) {
      cells[heronPlacement[i]].classList.add('heron')
    }
    setInterval(() => {
      const heron = document.querySelectorAll('.heron')
      for (let i = 0; i < heron.length; i++){
        const heronId = parseFloat(heron[i].id)
        heron[i].classList.remove('heron')
        if (heronShift === 'right') {
          cells[heronId + 1].classList.add('heron')
        } else {
          cells[heronId - 1].classList.add('heron')
        }
      }
      if (heronShift === 'right'){
        heronShift = 'left'
      } else {
        heronShift = 'right'
      }
    }, 1000)
  }
  ```
* Here is a code snippet of the function that allowed the boats to move along the whole length of the grid:
```
function addBoat(){
    const boatStartingPosition = 76
    let boatIndex = 0
    let boatInterval = setInterval(boatFunction ,700)
    function boatFunction() {
      const boat = document.querySelectorAll('.boat')
      cells[boatStartingPosition + boatIndex].classList.add('boat')
      if ((boatStartingPosition + boatIndex) === 66) {
        boat.forEach(item => item.classList.remove('boat'))
        boatIndex = 0
      } else if ((boatStartingPosition + boatIndex) > 66) {
        boat.forEach(item => item.classList.remove('boat'))
        boatIndex--
      } else {
        boatIndex = 0
      }
    }
  } 
  ```
  
By the end of day 6, I had all my obstacles presented as I wanted them.
__Day 7__ <br />
This day was spent creating the win and lose functions. I spent most of the day focusing on the lose function. Essentially, I had to build a function that ends the game when the player collides with an obstacle. This called for an if statement that would prevent the player from moving when a collision occurs, it would also trigger ‘losing music’ and the text of the heading would read ‘Game Over’.
```
function loseGame() {
    if (cells[currentPosition].classList.contains('frog-catcher') || cells[currentPosition].classList.contains('rock') || cells[currentPosition].classList.contains('heron')
    || cells[currentPosition].classList.contains('boat') || cells[currentPosition].classList.contains('boat2') || cells[currentPosition].classList.contains('fumes')
    || cells[currentPosition].classList.contains('squirrel-right') || cells[currentPosition].classList.contains('squirrel-left')){
      h1.innerHTML = 'GAME OVER'
      h2.innerText = 'Press Restart to Try Again!'
      document.removeEventListener('keydown', handleKeyDown)
      const gameOver = document.querySelector('.gameover')
      gameOver.classList.add('show')
      gameOver.innerText = 'Press Restart to Try Again!'
      grid.style.color = 'rgba(0,0,0,0)'
      losingMusic()
    }
  }
  ```
The win function ends the game when the player reaches cell 5 on the final row. I used another if statement, except this time it would trigger ‘winning music’ and the heading would read ‘You have won’.
```
function winGame(){
    if (cells[5].classList.contains('frog')){
      h1.innerText = 'YOU HAVE WON!'
      h2.innerText = 'Press Restart to Play Again!'
      document.removeEventListener('keydown', handleKeyDown)
      const gameOver = document.querySelector('.gameover')
      gameOver.classList.add('show')
      gameOver.innerText = 'Press Restart to Play Again'
      grid.style.color = 'rgba(0,0,0,0)'
      winningMusic()
      
    }
    
  }
  ```
__Day 8 - 9__ <br />
I spent the final days fixing minor errors and styling. I also found a bit of time to make a restart function that allows players, at the press of a button, to restart the game when they win/lose. I also created a button that when pressed displays a panel that tells players how to play the game. One thing that was on my nice-to-have list that I unfortunately didn’t get to make was a timer that ends the game when it reaches 0, making the game a race against the clock.

# Bugs
Some of the obstacles don’t trigger the lose game function unless the player crashes into it as opposed to when a moving obstacle lands on the same div as the player

# Wins and Challenges
* My biggest win in making this game was the experience I gained in programmatic thinking and the increased understanding of javascript that I gained. 
* The biggest challenge was in getting the obstacles to move in the way I wanted them to. This took a lot of time, patience and debugging!

# Future Improvements
* I definitely wished I had time to make a timer that counted down from 45 seconds before triggering the lose function. 
* Had I more time, I would’ve also liked to create more levels that get progressively more difficult - perhaps the obstacles would move faster and more sporadically.
* I wish I had thought to make this game responsive. As this was my first project, I underestimated the importance of creating something that can be viewed/played on mobile devices.

# Key Learning
This project really helped solidify basic javascript concepts and put into practise what I had been learning for the last 3 weeks. I particularly got a lot of practise in if statements and for loops. 










