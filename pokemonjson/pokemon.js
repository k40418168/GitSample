let Id;
let Name;
let Hp;
let Attack;
let Defense;
let SpAttack;
let SpDefense;
let Speed;
let Pic;
let cloneContent;
let itemIndex = -1;
let loadAllIndex = 0;
let _pokemon = [];
let Index = 0,Remove = Index;

window.onload = getPokemonJson();
function getPokemonJson() {
  let xhl = new XMLHttpRequest();
  //整理資料成id name img
  xhl.onload = function () {
    pokemonArray = JSON.parse(this.responseText);
    pokemonArray.forEach(item => {
      let temp = {
        Id: item.id.toString().padStart(3, 0),
        Name: item.name["chinese"],
        Hp: item.base["HP"],
        Attack: item.base["Attack"],
        Defense: item.base["Defense"],
        SpAttack: item.base["Sp. Attack"],
        SpDefense: item.base["Sp. Attack"],
        Speed: item.base["Speed"],
        Pic: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id.toString().padStart(3,0)}.png`
      }
      _pokemon.push(temp);
    });
  }
  xhl.open("GET", "https://raw.githubusercontent.com/apprunner/pokemon.json/master/pokedex.json");
  xhl.send();
}


function AddOne () {
  pokeAddOne();
}
function LoadAll(){
  Reset();
  pokeTemplate();
}
function RemoveOne(){
  if (itemIndex < 0) {
    itemIndex = -1;
    return;
  }
  if (Index = 0){
    return;
  }
  itemIndex--;
  Reset();
  pokeTemplate(itemIndex);
}
function Reset(){
  let row = document.querySelector(".row");
  row.innerHTML = "";
  Index = 0;
}
function pokeTemplate(itemIndex) {
  let row = document.getElementsByClassName("row")[0];
  let card = document.getElementById("pokemonTemplate");
  //把getPokemonJson資料加到card
  _pokemon.forEach((item, index) => {
    if (itemIndex < index || loadAllIndex > 1) {
      return;
    }
    cloneContent = card.content.cloneNode(true);
    cloneContent.querySelector("img").src = item.Pic;
    // cloneContent.querySelector("h5").innerText = item.Id;
    cloneContent.querySelector("h5").innerText = item.Name;
    cloneContent.querySelector('.btn').setAttribute("data-bs-toggle", "modal");
    cloneContent.querySelector('.btn').setAttribute("data-bs-target", "#pokemonModal");
    pokeModal(item);
    row.append(cloneContent);
  })
}
function pokeModal(item) {
  cloneContent.querySelector('.btn').addEventListener('click', function () {
    let modal = document.querySelector("#pokemonModal");
    modal.querySelector(".modal-body").appendChild(genUl(item));
  })
}
function pokeAddOne(){
  let poke = _pokemon[Index];
  let row = document.getElementsByClassName("row")[0];
  let card = document.getElementById("pokemonTemplate");
  cloneContent = card.content.cloneNode(true);
  cloneContent.querySelector("img").src = poke.Pic;
    // cloneContent.querySelector("h5").innerText = item.Id;
  cloneContent.querySelector("h5").innerText = poke.Name;
  cloneContent.querySelector('.btn').setAttribute("data-bs-toggle", "modal");
  cloneContent.querySelector('.btn').setAttribute("data-bs-target", "#pokemonModal");
  pokeModal(poke);
  row.append(cloneContent);
  Index++;
  itemIndex++;
}
let ul = document.createElement("ul");

let genUl = function (item) {
  ul.innerHTML = "";
  let h5 = document.querySelector("#exampleModalLabel");
  h5.innerText = `${item.Id}`;
  let li = document.createElement("li");
  let modalImg = document.createElement("img");
  modalImg.setAttribute("src", item.Pic);
  li.setAttribute("style", "list-style:none;");

  li.innerHTML = `
  <p>名字 : ${item.Name}</p>
  <p>HP : ${item.Hp}</p>
  <p>攻擊力 : ${item.Attack}</p>
  <p>防禦力 : ${item.Defense}</p>
  <p>SP 攻擊力 : ${item.SpAttack}</p>
  <p>SP 防禦力 : ${item.SpDefense}</p>
  <p>速度 : ${item.Speed}</p>`;
  ul.appendChild(modalImg);
  ul.appendChild(li);
  return ul;
}
