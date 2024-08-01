let boxes = document.querySelectorAll(".boxes");
let reset = document.querySelector("#reset");

let winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let Oturn = true;

document.querySelector(".winner").innerText = "\nPlayer O Starts";

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // document.querySelector(".winner").innerText = "";
        if (box.innerText === "") {
            if (Oturn) {
                box.innerText = "O";
                document.querySelector(".winner").innerText = "X Turn";
            } else {
                box.innerText = "X";
                document.querySelector(".winner").innerText = "O Turn";
            }
            Oturn = !Oturn;
            checkWin();
        }
    });
});

reset.addEventListener("click", () => {
    boxes.forEach((box) => (box.innerText = ""));
    Oturn = true;
    document.querySelector(".winner").innerText = "\nPlayer O Starts";
    boxes.forEach((box) => (box.disabled=false));

});

const checkWin = () => {
    winnerPatterns.forEach((pattern) => {
        if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText && boxes[pattern[0]].innerText !== "" && boxes[pattern[1]].innerText !== "" && boxes[pattern[2]].innerText !== "") {
            document.querySelector(".winner").innerText = `Congratulations, Player ${boxes[pattern[0]].innerText} Won\nRefresh or Press Reset to Play New Game`;
            boxes.forEach((box) => {box.disabled=true});
        }
    });
};
