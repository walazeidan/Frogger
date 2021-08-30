function init(){

  const grid = document.querySelector('.grid')
  const h1 = document.querySelector('h1')
  const h2 = document.querySelector('h2')
  // const audio = document.getElementById('audio')
  const startButton = document.getElementById('start')
  const restartButton = document.getElementById('restart')
  const frogCatcherPlacement = [89 , 91 , 93 , 95 , 97 ]
  let heronShift = 'right'
  const rockPlacement = [77 , 79 , 82 , 85 , 87]
  const heronPlacement = [33 , 35 , 37 , 39 , 41]
  const homePlacement = [1, 2, 3, 4, 6, 7, 8, 9]
  let frogCatcherShift = 'right'


  
  
  
  
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
      console.log(heronShift)
    }, 1000)
  }

  function addRock(){
    for (let i = 0; i < rockPlacement.length; i++) {
      cells[rockPlacement[i]].classList.add('rock')
    }
  }

  function addBoat(){
    cells[76].classList.add('boat')
    setInterval(() => {
      const boat = document.querySelectorAll('.boat')
      for (let i = 0; i < 10; i++){
        const boatId = parseFloat(boat[i].id)
        if (boatId > 66) {
          cells[boatId].classList.remove('boat')
          cells[boatId - 1].classList.add('boat')
        // } else if (cells[i].classList.contains('boat')){
        //   cells[boatId].classList.remove('boat')
        //   cells[boatId + 1].classList.add('boat')
        }
      }
    }, 1000)
  } 


  function addBoat2(){
    cells[44].classList.add('boat2')
    setInterval(() => {
      const boat2 = document.querySelectorAll('.boat2')
      for (let i = 0; i < 11; i++){
        const boat2Id = parseFloat(boat2[i].id)
        if (boat2Id < 54) {
          cells[boat2Id].classList.remove('boat2')
          cells[boat2Id + 1].classList.add('boat2')
          // cells[car2Id - 1].classList.remove('car2')
        } 
      } 
      // cells[76].classList.add('car')
        
    }, 1000)
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
      console.log(frogCatcherShift)
    }, 800)
  }

  function addFumes(){
    cells[22].classList.add('fumes')
    setInterval(() => {
      const fumes = document.querySelectorAll('.fumes')
      for (let i = 0; i < 11; i++){
        const fumesId = parseFloat(fumes[i].id)
        cells[fumesId + 1].classList.add('fumes')
      }
      for (let i = 0; i < 11; i++){
        const fumesId = parseFloat(fumes[i].id)
        cells[fumesId + 1].classList.remove('fumes')
      }
    }, 500)
  }

  function addSquirrelRight(){
    cells[11].classList.add('squirrel-right')
    setInterval(() => {
      const squirrelRight = document.querySelectorAll('.squirrel-right')
      for (let i = 0; i < 5; i++){
        const squirrelRightId = parseFloat(squirrelRight[i].id)
        cells[squirrelRightId + 1].classList.add('squirrel-right')
      }
      for (let i = 0; i < 5; i++){
        const squirrelRightId = parseFloat(squirrelRight[i].id)
        cells[squirrelRightId + 1].classList.remove('squirrel-right')
      }
    }, 300)
  }

  function addSquirrelLeft(){
    cells[21].classList.add('squirrel-left')
    setInterval(() => {
      const SquirrelLeft = document.querySelectorAll('.squirrel-left')
      for (let i = 0; i < 5; i++){
        const squirrelLeftId = parseFloat(SquirrelLeft[i].id)
        cells[squirrelLeftId - 1].classList.add('squirrel-left')
      }
      for (let i = 0; i < 5; i++){
        const squirrelLeftId = parseFloat(SquirrelLeft[i].id)
        cells[squirrelLeftId - 1].classList.remove('squirrel-left')
      }
    }, 300)
  }

  function addHome(){
    for (let i = 0; i < homePlacement.length; i++) {
      cells[homePlacement[i]].classList.add('home')
    }
  }

  // function playMusic() {
  //   audio.src = '/Users/walazeidan/Desktop/development/projects/Project-One/music/Kevin MacLeod - Pixelland ♫ NO COPYRIGHT 8-bit Music (1).mp3'
  //   audio.play()
  // }

  function winGame(){
    // for (let i = 0; i < 109; i++){
    if (cells[5].classList.contains('frog')){
      h1.innerText = 'YOU HAVE WON!'
      h2.innerText = 'Press Restart to Play Again!'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }

  function loseGame() {
    for (let i = 0; i < 109; i++) {
      if (cells[currentPosition].classList.contains('frog-catcher') || cells[currentPosition].classList.contains('rock') || cells[currentPosition].classList.contains('heron')
      || cells[currentPosition].classList.contains('boat') || cells[currentPosition].classList.contains('boat2') || cells[currentPosition].classList.contains('fumes')
      || cells[currentPosition].classList.contains('squirrel-right') || cells[currentPosition].classList.contains('squirrel-left')){
        h1.innerHTML = 'LOST!'
        h2.innerText = 'Press Restart to Try Again!'
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }
  


  function startGame() {
    startButton.disabled = true
    addHerons()
    addRock()
    addBoat()
    addBoat2()
    addFrogCatcher()
    addFumes()
    addSquirrelRight()
    addSquirrelLeft()
    addHome()
  }
    
  function restartGame() {
    startButton.disabled = false
    for (let i = 0; i < 109; i++) {
      if (cells[i].classList.contains('frog')) {
        cells[i].classList.remove('frog')
      }
      addFrog(startingPosition)
      h1.innerText = 'Frogger'
      h2.innerText = ''
    }
  }

    


  restartButton.addEventListener('click' ,restartGame)
  startButton.addEventListener('click' , startGame) 
  document.addEventListener('keydown', handleKeyDown)
  createGrid(currentPosition)
}

window.addEventListener('DOMContentLoaded', init)