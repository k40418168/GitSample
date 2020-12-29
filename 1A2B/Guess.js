let start = document.getElementById("start");
let restart = document.getElementById("restart");
let cheat = document.getElementById("cheat");
let _answer = [];

function randomNum() {
    answer = [];
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
}
cheat.onclick = function () {
    alert(`${_answer.join('')}`);
}
function clearInfo (){
    document.getElementById("guessResults").innerHTML = "";
}
restart.onclick = function(){
    clearInfo();
    randomNum();
}
let A = 0,B = 0;
let userGuess = "";
let _userGuess =[];
let result,notNum;

function Comparison(){
    userGuess = document.getElementById("userGuess").Value;
    _userGuess = userGuess.split("");
    for(i=0;i<4;i++){
        if(_answer[i] == _userGuess[i]){
            A++;
        }
        if(_userGuess.includes(parseInt(_answer[i]))){
            B++;
        }
    }
}

function OutResult(){
    
}