// console.log("Making tictactoe");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let Msg = document.querySelector(".winnerMsg");
let resultContainer = document.querySelector(".result-container");
let newGameBtn = document.querySelector(".new-game-btn");

let bigContainer = document.querySelector(".big-container");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerHTML = "O";
      box.style.border = " 2px solid white";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      box.style.border = " 2px solid white";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  resultContainer.classList.add("hide");
  for (let box of boxes) {
    box.style.backgroundColor = "#435334";
    box.style.border = "none";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showResult = (winner) => {
  Msg.innerHTML = `Congratulations! The Winner is "${winner}"`;
  resultContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        showResult(pos1Val);
        boxes[pattern[0]].style.backgroundColor = "#3F4E4F";
        boxes[pattern[1]].style.backgroundColor = "#3F4E4F";
        boxes[pattern[2]].style.backgroundColor = "#3F4E4F";
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
