const morseCode = [
  ["A", "● ▬"],
  ["B", "▬ ● ● ●"],
  ["C", "▬ ● ▬ ●"],
  ["D", "▬ ● ●"],
  ["E", "●"],
  ["F", "● ● ▬ ●"],
  ["G", "▬ ▬ ●"],
  ["H", "● ● ● ●"],
  ["I", "● ●"],
  ["J", "● ▬ ▬ ▬"],
  ["K", "▬ ● ▬"],
  ["L", "● ▬ ● ●"],
  ["M", "▬ ▬"],
  ["N", "▬ ●"],
  ["O", "▬ ▬ ▬"],
  ["P", "● ▬ ▬ ●"],
  ["Q", "▬ ▬ ● ▬"],
  ["R", "● ▬ ●"],
  ["S", "● ● ●"],
  ["T", "▬"],
  ["U", "● ● ▬"],
  ["V", "● ● ● ▬"],
  ["W", "● ▬ ▬"],
  ["X", "▬ ● ● ▬"],
  ["Y", "▬ ● ▬ ▬"],
  ["Z", "▬ ▬ ● ●"],
  ["0", "▬ ▬ ▬ ▬ ▬"],
  ["1", "● ▬ ▬ ▬ ▬"],
  ["2", "● ● ▬ ▬ ▬"],
  ["3", "● ● ● ▬ ▬"],
  ["4", "● ● ● ● ▬"],
  ["5", "● ● ● ● ●"],
  ["6", "▬ ● ● ● ●"],
  ["7", "▬ ▬ ● ● ●"],
  ["8", "▬ ▬ ▬ ● ●"],
  ["9", "▬ ▬ ▬ ▬ ●"],
]

const playBtn = document.getElementById("playBtn")
const learnBtn = document.getElementById("learnBtn")
const resetBtn = document.getElementById("resetBtn")
const element = document.getElementById("elementPlay")
const score = document.getElementById("score")
let correctCount = 0

let gameArray = [...morseCode]
const index = Math.floor(Math.random() * gameArray.length)
let randomElement = gameArray.splice(index, 1)[0]
element.innerHTML = randomElement[1]

function check() {
  const userInput = document.getElementById("userInput").value.toUpperCase()
  if (userInput === randomElement[0]) {
    correctCount++
  }
  if (gameArray.length > 0) {
    const index = Math.floor(Math.random() * gameArray.length)
    randomElement = gameArray.splice(index, 1)[0]
    element.innerHTML = randomElement[1]

    score.innerHTML = `${correctCount} / 36`
    score.style.fontWeight = "bold"
  } else {
    alert("Game over! Final score: " + correctCount + " / 36")
  }

  document.getElementById("userInput").value = ""
}
function play() {
  document.getElementById("learn").style.display = "none"
  document.getElementById("play").style.display = "block"
  playBtn.style.background = "#FFA500"
  playBtn.style.color = "black"
  learnBtn.style.background = "#0d6efd"
  learnBtn.style.color = "white"
}

function learn() {
  const learnBtn = document.getElementById("learnBtn")

  document.getElementById("play").style.display = "none"
  document.getElementById("learn").style.display = "flex"
  learnBtn.style.background = "#FFA500"
  learnBtn.style.color = "black"
  playBtn.style.background = "#0d6efd"
  playBtn.style.color = "white"
}

function reset() {
  correctCount = 0

  score.innerHTML = `${correctCount} / 36`
  score.style.fontWeight = "bold"

  gameArray = [...morseCode]
  const index = Math.floor(Math.random() * gameArray.length)
  randomElement = gameArray.splice(index, 1)[0]
  element.innerHTML = randomElement[1]

  const userInput = document.getElementById("userInput").value.toUpperCase()
  if (userInput === randomElement[0]) {
    correctCount++
  }
  if (gameArray.length > 0) {
    const index = Math.floor(Math.random() * gameArray.length)
    randomElement = gameArray.splice(index, 1)[0]
    element.innerHTML = randomElement[1]

    score.innerHTML = `${correctCount} / 36`
    score.style.fontWeight = "bold"
  } else {
    alert("Game over! Final score: " + correctCount + " / 36")
  }

  document.getElementById("userInput").value = ""
}

learnBtn.addEventListener("click", learn)
playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
document.getElementById("submitBtn").addEventListener("click", check)

const input = document.querySelector("#userInput")
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    check()
  }
})
