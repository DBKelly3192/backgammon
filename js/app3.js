// const displayInstructions = () => {
//   $('#introduction').css('display', 'none')
//   $('#modalInstruction').css('display', 'flex')
// }
const displayTable = () => {
  $('#introduction').css('display', 'none')
  // $('#modalInstruction').css('display', 'none')

  $('#table').css('display', 'grid')
  $('#panelTop').css('display', 'flex')
  $('#panelRight').css('display', 'flex')
  $('#panelBottom').css('display', 'flex')
  $('#panelLeft').css('display', 'flex')
}

class Person {
  constructor (name, color, turn, possessDB, roll, offboarding, checkers) {
    this.name = name;
    this.color = color;
    this.turn = turn;
    this.possessDB = possessDB || false;
    this.roll = roll;
    this.offboarding = offboarding || false;
    this.checkers = checkers;
  }
  constructBoard () {
    for (let i = 0; i < 24; i++) {
      const $point = $(`#point${i}`)
      const $triangle = $('<div></div>')
      if (i < 12) {
        $triangle.addClass('triangle')
      } else {
        $triangle.addClass('upsideDownTriangle')
      }
      $point.append($triangle)
    }
  }
  constructCheckers (point, num) {
    const $point = $(`#point${point}`)
    const $checkers = $(`<div></div>`)

    if (this.color === 'black') {
      $checkers.addClass('checkerDark')
    } else {
      $checkers.addClass('checkerLight')
    }

    for (let i = 0; i < num; i++) {
      $point.append($checkers.clone());
    }
  }
  rollDice () {
    const dice = []

    for (let i = 0; i < 2; i++) {
      dice.push(Math.ceil(Math.random()*6))
      }

    if (dice[0] === dice[1]) {
      dice[2] = dice[0]
      dice[3] = dice[1]
    }
    console.log(dice)
    checkValidMove(dice)
  }
  checkValidMove (move) {

    for (let i = 0; i < move.length; i++) {

    }
  }
}

const player1 = new Person('David', 'black')
const player2 = new Person('Katie', 'white')

player1.constructBoard()
player1.constructCheckers(5, 5)
player1.constructCheckers(7, 3)
player1.constructCheckers(12, 5)
player1.constructCheckers(23, 2)

player2.constructCheckers(18, 5)
player2.constructCheckers(16, 3)
player2.constructCheckers(11, 5)
player2.constructCheckers(0, 2)

$(() => {
  const $play = $('#play')
  // const $begin = $('#begin')
  const $rollPlayer1 = $('#rollPlayer1')
  const $rollPlayer2 = $('#rollPlayer2')

  $play.on('click', displayTable)
  // $play.on('click', displayInstructions)
  // $begin.on('click', displayTable)
  $rollPlayer1.one('click', player1.rollDice)
  $rollPlayer2.one('click', player2.rollDice)
})
