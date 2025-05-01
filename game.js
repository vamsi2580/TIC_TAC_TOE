let turn = false;
const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const buttons=document.querySelectorAll(".Box button");
const rstbtn=document.querySelector(".reset");
const congra=document.querySelector(".hide");
function reset(){
    buttons.forEach(button =>{
        button.innerText="";
        button.disabled=false;
        turn=false;
        congra.innerText="";
    });
}
function btclick(event){
    if(turn){
        event.target.innerText="O";
        event.target.disabled=true;
        turn=false;
    }
    else{
        event.target.innerText="X";
        event.target.disabled=true;
        turn=true;
    }
    checkWinner();
}

function call(btn){
    btn.addEventListener("click",btclick);
}

buttons.forEach(call);
rstbtn.addEventListener("click",reset);
let count=0;
function checkWinner() {
    count++;
    for(let patterns of winPatterns){
        let val1=buttons[patterns[0]].innerText;
        let val2=buttons[patterns[1]].innerText;
        let val3=buttons[patterns[2]].innerText;
        
    if (val1!="" && val2!="" && val3!=""){
        if (val1==val2 && val2==val3){
            console.log("winner");
            congra.innerText=`Congratulations ${val1}`;
            }
            else if(count==9){
                congra.innerText="Game Draw";
            }
        }
    }
    console.log(count);
    
}