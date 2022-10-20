let PLAYER_NAME, PLAYER_LEVEL, PLAYER_POINTS, MIN_RANGE, MAX_RANGE, SECRET_NUMBER, NO_OF_LIVES;

PLAYER_NAME = prompt("Hi there. kindly tell us your name");

while (!PLAYER_NAME) {
  PLAYER_NAME = prompt("We need your name to proceed");
}
function welcome() {
  console.log(`Hi ${PLAYER_NAME}!, welcome and thank you for playing my guessing game!`)
  let response = prompt('Press Enter to continue')
  console.log('Here is how the game works. I will think of a secrete number, and you\'re going to attempt guessing the number.')
  response = prompt('Press Enter to continue.')
  console.log('Here are the rules')
  console.log('For beginners, you have 3 lives. For every three levels you pass, you get additional live. Fun. Let\'s go.')
  response = prompt('Press Enter to continue.')
  console.log('Now, you are all set to play')
}
main();

function main() {
  PLAYER_LEVEL = 1;
  PLAYER_POINTS = 0;
  MIN_RANGE = 1;
  MAX_RANGE = 2
  NO_OF_LIVES = 3
  SECRET_NUMBER = generateNewSecretNumber()

  welcome()
  outputResult()
  collectAnswer()

  function collectAnswer() {
    let response = prompt(`Guess my secret number, it's between ${MIN_RANGE} and ${MAX_RANGE}...`)
    while (response !== SECRET_NUMBER) {
      if (NO_OF_LIVES <= 0) {
        playerLoose()
        break
      }
      else if (Number.isNaN(parseInt(response))) {
        response = prompt('Please write a number!')
      } else if (response > SECRET_NUMBER) {
        --NO_OF_LIVES
        response = prompt('Too high, try a lower number!')
      } else if (response < SECRET_NUMBER) {
        --NO_OF_LIVES
        response = prompt('Too low, try a higher number')
      } else {
        playerWin()
        break
      }
    }
  }

  function playerWin() {
    console.log('Great! you got the number')
    let response = prompt("Press Enter to continue")
    console.log('Ready for the next Level?')
    response = prompt("Hit Enter!")
    PLAYER_LEVEL++
    PLAYER_POINTS++
    MAX_RANGE++
    SECRET_NUMBER = generateNewSecretNumber()

    NO_OF_LIVES = 3 + Math.floor(PLAYER_LEVEL / 3)

    outputResult()
    collectAnswer()
  }

  function playerLoose() {
    console.log("=============================================")
    console.log('You\'ve ran out of lives, unfortunately')
    console.log('Nice game though, you did Well!')
    outputResult()
    console.log("Press Control+C to exit the game")
    return
  }
  function outputResult() {
    console.table({
      Player: PLAYER_NAME,
      Level: PLAYER_LEVEL,
      Points: PLAYER_POINTS
    })
  }

  function generateNewSecretNumber() {
    return Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE + 1) + MIN_RANGE);
  }

}

