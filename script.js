
let music = new Audio("gamestartbg.mp3")
let audioTurn = new Audio("step.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;




// Function to change turn....

const changeTurn = ()=>{
    return turn === "X"? "0" : "X"
}





//Function to check win.....

const checkWin =()=>{
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText ) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won "
            isgameover = true;
            gameover.play();
            document.querySelector('#imgbox').getElementsByTagName('img')[0].style.width = "76px" 
        }
    });

};





// Game Logic......
 /* music.play()  */
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener("click", ()=>{
        if(boxText.innerText=== ''){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    });
});




// Add onclik listner to reset button....

reset.addEventListener('click' , ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element=>{
        element.innerText= ''
    });

    turn = "X"
    isgameover =false
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('#imgbox').getElementsByTagName('img')[0].style.width = "0"
    
});