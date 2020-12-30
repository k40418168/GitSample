let start = document.getElementById("start");
let restart = document.getElementById("restart");
let cheat = document.getElementById("cheat");
let _answer = [];
let guess = document.getElementById("guess");
guess.setAttribute("disabled",true);
restart.setAttribute("disabled",true);
cheat.setAttribute("disabled",true);

function randomNum() {
    _answer = [];
    for(i=0;i<4;i++){
        let number = Math.floor(Math.random()*10);
        if(!_answer.includes(number)){
            _answer.push(number);
        }
        else{
            i--;
        }
    }
}
start.onclick = function(){
    randomNum();
    start.setAttribute("disabled",true);
    clearInfo();
    guess.removeAttribute("disabled");
    cheat.removeAttribute("disabled");
    restart.removeAttribute("disabled");
}
cheat.onclick = function () {
    if(cheat.hasAttribute("disabled")){
        return;
    }
    alert(`${_answer.join('')}`);
}
function clearInfo (){
    document.getElementById("guessResults").innerHTML = "";
}
restart.onclick = function(){
    if(restart.hasAttribute("disabled")){
        return;
    }
    clearInfo();
    randomNum();
}
guess.onclick = function (event) {
    if(guess.hasAttribute("disabled")){
        return;
    }
    Comparison();
    OutResult();
    
}
let A = 0,B = 0;
let userGuess = "";
let _userGuess =[];
let result,notNum;
function Comparison(){
    userGuess = document.getElementById("userGuess").value;
    _userGuess = userGuess.split('');
    A=0,B=0;
    for(i=0;i<4;i++){
        if(_answer[i] == _userGuess[i]){
            A++;
        }
        if(_answer.includes(parseInt(_userGuess[i]))){
            B++;
        }
    }
    B=B-A;
}

function OutResult(){
    let liGuess = document.createElement("li");
    liGuess.setAttribute("class","list-group-item");
    let ulGuess = document.getElementById("guessResults");
    let spanGuess = document.createElement("span");
    if(A==4){
        spanGuess.setAttribute("class","label label-success");
        spanGuess.textContent = (`${A}A${B}B`);
        alert("你猜對了");
        guess.setAttribute("disabled",true);
    }
    else{
        spanGuess.setAttribute("class","label label-danger");
        spanGuess.textContent = (`${A}A${B}B`);
    }
    
    liGuess.append(spanGuess,` ${userGuess}`);
    ulGuess.append(liGuess);
}
