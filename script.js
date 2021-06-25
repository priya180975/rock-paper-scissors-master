let rules=document.querySelector("#rules");
let close=document.querySelector("#close");
let displayRules=document.querySelector(".rulespage");
let selections=document.querySelectorAll(".select");
let centerSelection=document.querySelector("#center-selection");
let afterSelection=document.getElementById("after-selection")
let scored=document.querySelector("#score-no")

close.addEventListener("click",rulesClose);
rules.addEventListener("click",displayR);
selections.forEach(a=>a.addEventListener("click",selectedOption))

function displayR(){
    displayRules.style.display="block"
}

function rulesClose(){
    displayRules.style.display="none";
}

function selectedOption(e){
    let selectedElement=e.target;
    let dataNo=selectedElement.getAttribute("data-no")
   
    let selectedDiv=makeDiv(dataNo);
    document.querySelector("#human").innerHTML=selectedDiv;

    centerSelection.style.display="none"
    afterSelection.style.display="grid";

    let computer=document.querySelector("#computer");

    // let a=houseSelects()
    let rand=Math.floor((Math.random()*3)+1);
    let house=makeDiv(rand);

    computer.innerHTML=house;
    computer.classList.remove("temporary")

    //winner(dataNo,rand)
    let newdiv=document.createElement("div");
    afterSelection.appendChild(newdiv);
    newdiv.classList.add("winner");
    newdiv.innerHTML=winner(dataNo,rand);

    let playAgain=document.querySelector("#play-again");
    playAgain.addEventListener("click",again)
}

function makeDiv(dataNo)
{
    classname=(dataNo==1?"paper":dataNo==2?"rock":"scissors");
    let madeDiv=
    `<div class="border" id=${classname+"-div"}>
        <div class="selection">
        <button class=${classname} data-no=${dataNo}>
            <img src="images/icon-${classname}.svg" alt="paper" class=${classname}" data-no=${dataNo}>
        </button>
        </div>
    </div>`
    return madeDiv;
}


function winner(human,computer){
    let result=(human==computer?"TIE":(human==1 && computer==3)||(human==2 && computer==1)||(human==3 && computer==2)?"YOU LOSE":"YOU WIN")

    return winnertemp(result)
}

function winnertemp(text)
{
    let scr=(text=="TIE")?0:(text=="YOU LOSE")?-1:1
    score(scr)
    
    if(scr=="1")
    {
        let human=document.querySelector("#human");
        human.classList.add("pseudo-1");
    }

    if(scr==-1)
    {
        let computer=document.querySelector("#computer");
        computer.classList.toggle("pseudo-1")
    }

    let div= 
    `<div id="text">${text}</div>
    <div>
        <button id="play-again">PLAY AGAIN</button>
    </div>`;

    return div
}

function again()
{
    if(document.querySelector(".pseudo-1"))
    {document.querySelector(".pseudo-1").classList.remove("pseudo-1")}
    document.querySelector(".winner").remove();
    centerSelection.style.display="grid";
    afterSelection.style.display="none";
}

function score(scr)
{
    console.log(scr)
    let s=parseInt(scored.innerText)+scr;
    scored.innerText=s
}