function init(){

  const grid = document.querySelector('.grid')
  // const heron = document.querySelectorAll('.heron')
  // console.log(heron)
  const startButton = document.getElementById('start')
  const frog = document.querySelectorAll('.froggo')
  const heronAttack = document.querySelectorAll('.heron')
  const heronPlacement = [89 , 91 , 93 , 95 , 97 ]
  let heronShift = 'right'
  const rockPlacement = [77 , 79 , 82 , 85 , 87]
  const lilypadPlacement = [55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65]
  const frogCatcherPlacement = [33 , 35 , 37 , 39 , 41]

  let frogCatcherShift = 'right'
  // let carShift = 'right'
  // const fumesPlacement = [22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32]

  
  
  
  
  const width = 11
  const cellCount = width * 10
  const cells = []
  const className = 'froggo'
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
          // console.log(heron + 1)
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

  function addCar(){
    cells[76].classList.add('car')
    setInterval(() => {
      const car = document.querySelectorAll('.car')
      for (let i = 0; i < 11; i++){
        const carId = parseFloat(car[i].id)
        if (carId >= 66) {
          cells[carId].classList.remove('car')
          cells[carId - 1].classList.add('car')
        }
      } 
        
    }, 1000)
  }

  function addLily(){
    for (let i = 0; i < lilypadPlacement.length; i++) {
      cells[lilypadPlacement[i]].classList.add('lilypad')
    }
  }

  function addCar2(){
    cells[44].classList.add('car2')
    setInterval(() => {
      const car2 = document.querySelectorAll('.car2')
      for (let i = 0; i < 11; i++){
        const car2Id = parseFloat(car2[i].id)
        if (car2Id < 54) {
          cells[car2Id].classList.remove('car2')
          cells[car2Id + 1].classList.add('car2')
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
          // console.log(heronId + 1)
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
    // const cellAdd = cells[22]
    setInterval(() => {
      const fumes = document.querySelectorAll('.fumes')
      // const fumesId = parseFloat(fumes[i].id)
      for (let i = 0; i < 10; i++){
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



  


  function startGame() {
    startButton.disabled = true
    addHerons()
    addRock()
    addCar()
    addLily()
    addCar2()
    addFrogCatcher()
    addFumes()
    addSquirrelRight()
    addSquirrelLeft()
    
  }
    

    

    
  
  startButton.addEventListener('click' , startGame) 
  document.addEventListener('keydown', handleKeyDown)
  createGrid(currentPosition)
}

window.addEventListener('DOMContentLoaded', init)