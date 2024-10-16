let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let newgamebutton=document.querySelector("#new-button");
let msgConatainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;

const win_patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turno=true;
    enable();
    msgConatainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turno){
            box.innerText="O";
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        check();


        
    });
});
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
        
    }}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }}

const show=(winner)=>{
    msg.innerText=`Congratulations, the winner is ${winner}`;
    msgConatainer.classList.remove("hide");
    
    disable();
}

const check=()=>{
    for(let pattern of win_patterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
                console.log("winner",p1);

                show(p1)

        }
    }
}

}
newgamebutton.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)