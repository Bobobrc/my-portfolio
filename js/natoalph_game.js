const natoAlphabet = [
  ["A", "alpha"],
  ["B", "bravo"],
  ["C", "charlie"],
  ["D", "delta"],
  ["E", "echo"],
  ["F", "foxtrot"],
  ["G", "golf"],
  ["H", "hotel"],
  ["I", "india"],
  ["J", "juliett"],
  ["K", "kilo"],
  ["L", "lima"],
  ["M", "mike"],
  ["N", "november"],
  ["O", "oscar"],
  ["P", "papa"],
  ["Q", "quebec"],
  ["R", "romeo"],
  ["S", "sierra"],
  ["T", "tango"],
  ["U", "uniform"],
  ["V", "victor"],
  ["W", "whiskey"],
  ["X", "xray"],
  ["Y", "yankee"],
  ["Z", "zulu"],
]

const learnBtn = document.getElementById("learnBtn")
const playBtn = document.getElementById("playBtn")
const score = document.getElementById("score")

function check() {
  let correctCount = 0
  const userInputs = document.querySelectorAll(".userInput")
  userInputs.forEach((input, index) => {
    const userAnswer = input.value.trim().toLowerCase()
    const correctAnswer = natoAlphabet[index][1]

    if (userAnswer === correctAnswer) {
      input.style.backgroundColor = "lightgreen"
      correctCount++
    } else {
      input.style.backgroundColor = "lightcoral"
      input.value = ""
    }
  })
  score.innerHTML = `${correctCount} / 26`
  score.style.fontWeight = "bold"
}

function play() {
  document.getElementById("learn").style.display = "none"
  document.getElementById("play").style.display = "grid"
  document.getElementById("submitBtn").style.display = "grid"
  document.getElementById("score").style.display = "grid"
  playBtn.style.background = "#FFA500"
  playBtn.style.color = "black"
  learnBtn.style.background = "#0d6efd"
  learnBtn.style.color = "white"
}

function learn() {
  document.getElementById("play").style.display = "none"
  document.getElementById("learn").style.display = "grid"
  document.getElementById("submitBtn").style.display = "none"
  document.getElementById("score").style.display = "none"
  learnBtn.style.background = "#FFA500"
  learnBtn.style.color = "black"
  playBtn.style.background = "#0d6efd"
  playBtn.style.color = "white"
}

learnBtn.addEventListener("click", learn)
playBtn.addEventListener("click", play)

document.querySelectorAll(".userInput").forEach((input) => {
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      check()
    }
  })
})
