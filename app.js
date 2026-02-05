const boxes = document.querySelectorAll(".box");
let button = document.querySelector("#resetBtn");
let msg = document.querySelector(".msg");
let hide = document.querySelector(".hide");
let palyGame = document.querySelector("#play");


let turnO = true;// playerX , playerO;
let count = 0; // to track Draw

const  winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [6,4,2],
    [2,5,8]
    
];


const resetGame = ()=>{
 turnO = true;
 enableBtn();
 hide.classList.add("hide");
 
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
       if(turnO){
        box.innerText = "O"
        turnO = false;
    
       }else{
        box.innerText = "X"
        turnO = true;
       }
       box.disabled = true;
       count++;
       
        let isWinner = checkWinner();
        if(count ===9 && !isWinner){
            drawMatch();
        }
    })
})

const drawMatch = ()=>{
    msg.innerText = `Match Was Draw :`;
    hide.classList.remove("hide");
    disabledBtn();

};

const disabledBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner)=>{
    msg.innerText = `congatulations, winner is ${winner}`;
    hide.classList.remove("hide");
    disabledBtn();
}

const checkWinner = ()=>{
for(let win of winPatterns){

    let pos1Val = boxes[win[0]].innerText;
    let pos2Val = boxes[win[1]].innerText;
    let pos3Val = boxes[win[2]].innerText;

    if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            
            showWinner(pos1Val);
        }
        
    }

}
}



palyGame.addEventListener("click",resetGame);
button.addEventListener("click",resetGame);

