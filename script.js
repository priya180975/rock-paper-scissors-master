let rules=document.querySelector("#rules");
let close=document.querySelector("#close");
let displayRules=document.querySelector(".rulespage");
let selections=document.querySelectorAll(".select")


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
    let centerSelection=document.querySelector("#center-selection");
    let afterSelection=document.getElementById("after-selection")
    let dataNo=selectedElement.getAttribute("data-no")
    console.log(dataNo)
    
    let selectedDiv=makeDiv(dataNo);
    document.querySelector("#human").innerHTML=selectedDiv;

    centerSelection.style.display="none"
    afterSelection.style.display="grid";
    centerSelection.setAttribute("id","after-selection")

    let computer=document.querySelector("#computer");

    let a=houseSelects()
    console.log(a[0],a[1])
    // setTimeout(function(){
    // computer.innerHTML=a[0]
    // computer.setAttribute("id","");},1000)

    computer.innerHTML=a[0]
    computer.setAttribute("id","");

    console.log(winner(dataNo,a[1]))
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


function houseSelects(){
    let rand=Math.floor((Math.random()*3)+1);
    let house=makeDiv(rand);
    return [house,rand];
}

function winner(human,computer){
    console.log(human,computer)
    let result=(human==computer?"TIE":(human==1 && computer==3)||(human==2 && computer==1)||(human==3 && computer==2)?"YOU LOSE":"YOU WIN")
    return winnertemp(result)
}

function winnertemp(text)
{
    let div= 
    `<div> 
        <div>${text}</div>
        <div>
            <button>PLAY AGAIN</button>
        </div>
    </div>`
    return div
}