function init(){
  const grid = document.querySelector('.grid')
  const h1 = document.querySelector('h1')
  const h2 = document.querySelector('h2')
  const audio = document.getElementById('audio')
  const startButton = document.getElementById('start')
  const restartButton = document.getElementById('restart')
  const howToPlayButton = document.getElementById('play')
  const frogCatcherPlacement = [89 , 91 , 93 , 95 , 97 ]
  let heronShift = 'right'
  const rockPlacement = [56, 59, 61, 64, 77, 79, 82, 85, 87]
  const heronPlacement = [33 , 35 , 37 , 39 , 41]
  const homePlacement = [1, 2, 3, 4, 6, 7, 8, 9]
  let frogCatcherShift = 'right'
  const gameOver = document.querySelector('.gameover')

  const width = 11
  const cellCount = width * 10
  const cells = []
  const className = 'frog'
  const startingPosition = 104
  let currentPosition = startingPosition


  


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

  function addFrog(cellPosition){
    cells[cellPosition].classList.add(className)
  }

  function removeFrog(position){
    cells[position].classList.remove(className)
  }

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

    
    addFrog(currentPosition) 
    winGame()
    loseGame()
  }


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

  function addRock(){
    for (let i = 0; i < rockPlacement.length; i++) {
      cells[rockPlacement[i]].classList.add('rock')
    }
  }

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


  function addBoat2(){
    const boat2StartingPosition = 44
    let boat2Index = 0
    let boat2Interval = setInterval(boat2Function ,700)
    function boat2Function() {
      const boat2 = document.querySelectorAll('.boat2')
      cells[boat2StartingPosition + boat2Index].classList.add('boat2')
      if ((boat2StartingPosition + boat2Index) === 54) {
        boat2.forEach(item => item.classList.remove('boat2'))
        boat2Index = 0
      } else if ((boat2StartingPosition + boat2Index) < 54) {
        boat2.forEach(item => item.classList.remove('boat2'))
        boat2Index++
      } else {
        boat2Index = 0
      }
    }
  }


  function addFrogCatcher(){
    for (let i = 0; i < frogCatcherPlacement.length; i++) {
      cells[frogCatcherPlacement[i]].classList.add('frog-catcher')
    }
    setInterval(() => {
      const frogCatcher = document.querySelectorAll('.frog-catcher')
      for (let i = 0; i < frogCatcher.length; i++){
        const frogCatcherId = parseFloat(frogCatcher[i].id)
        frogCatcher[i].classList.remove('frog-catcher')
        if (frogCatcherShift === 'right') {
          cells[frogCatcherId + 1].classList.add('frog-catcher')
        } else {
          cells[frogCatcherId - 1].classList.add('frog-catcher')
        }
      }
      if (frogCatcherShift === 'right'){
        frogCatcherShift = 'left'
      } else {
        frogCatcherShift = 'right'
      }
    }, 800)
  }

  function addFumes(){
    const fumesStartingPosition = 22
    let fumesIndex = 0
    let fumesInterval = setInterval(fumesFunction ,600)
    function fumesFunction() {
      const fumes = document.querySelectorAll('.fumes')
      if (fumesIndex < 11){
        cells[fumesStartingPosition + fumesIndex].classList.add('fumes')
        fumesIndex++
      } else {
        fumes.forEach(item => item.classList.remove('fumes'))
        fumesIndex = 0
        
      }
    }
  }

  function addSquirrelRight(){
    const squirrelStartingPosition = 11
    let squirrelIndex = 0
    let squirrelInterval = setInterval(squirrelRightFunction ,300)
    function squirrelRightFunction() {
      const squirrelRight = document.querySelectorAll('.squirrel-right')
      if (squirrelIndex < 5){
        cells[squirrelStartingPosition + squirrelIndex].classList.add('squirrel-right')
        squirrelIndex++
      } else {
        squirrelRight.forEach(item => item.classList.remove('squirrel-right'))
        squirrelIndex = 0
        
      }
    }
  }

  function addSquirrelLeft(){
    const squirrelStartingPosition = 21
    let squirrelIndex = 0
    let squirrelInterval = setInterval(squirrelLeftFunction ,300)
    function squirrelLeftFunction() {
      const squirrelLeft = document.querySelectorAll('.squirrel-left')
      if (squirrelIndex > -5){
        cells[squirrelStartingPosition + squirrelIndex].classList.add('squirrel-left')
        squirrelIndex--
      } else { 
        squirrelLeft.forEach(item => item.classList.remove('squirrel-left'))
        squirrelIndex = 0
        
      }
    }
  }

  function addHome(){
    for (let i = 0; i < homePlacement.length; i++) {
      cells[homePlacement[i]].classList.add('lily-pad')
    }
  }

  function playMusic() {
    audio.src = 'music/Kevin MacLeod - Pixelland ♫ NO COPYRIGHT 8-bit Music (1).mp3'
    audio.play()
  }

  function losingMusic() {
    audio.src = 'music/losing.wav'
    audio.play()
  }

  function winningMusic() {
    audio.src = 'music/winning.wav'
    audio.play()
  }

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

  function startGame() {
    startButton.disabled = true
    document.addEventListener('keydown', handleKeyDown)
    gameOver.classList.remove('show')
    addHerons()
    addRock()
    addBoat()
    addBoat2()
    addFrogCatcher()
    addFumes()
    addSquirrelRight()
    addSquirrelLeft()
    addHome()
    playMusic()
  }

  function restartGame() {
    removeFrog(currentPosition)
    currentPosition = startingPosition
    addFrog(currentPosition)
    h1.innerText = 'Frogger'
    // h2.innerText = ''
    document.addEventListener('keydown', handleKeyDown)
    gameOver.classList.remove('show')
    winGame()
    loseGame()
    playMusic()
  }

  function howToPlay(){

    gameOver.classList.add('show')
    grid.style.color = 'rgba(0,0,0,0)'
    gameOver.innerText = 'Press the arrow keys on your keyboard to help Frogger get to the pond across the grid!  Watch out for the obstacles!'
    gameOver.style.textAlign = 'center'
  }

  howToPlayButton.addEventListener('click' ,howToPlay)
  restartButton.addEventListener('click' ,restartGame)
  startButton.addEventListener('click' , startGame) 
  // document.addEventListener('keydown', handleKeyDown)
  createGrid(currentPosition)
}

window.addEventListener('DOMContentLoaded', init)