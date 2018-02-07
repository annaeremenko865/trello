'use strict';
function createElem(tag){
  var elem = document.createElement(tag);
  return elem;
}

function append(elem, next){
  next.appendChild(elem);
}

let hr = createElem('hr');
hr.color = 'grey';
let header = document.getElementById('header');
append(hr, header);


let can = document.getElementById('can');

let ctx = can.getContext("2d");
can.width = can.offsetWidth;
can.height = can.offsetHeight;
let x = 20;
let y = 20;


function desk(i, j, z, k){  ctx.fillStyle = "#DCDCDC"
ctx.fillRect(x + i, y + j, 200, 70, 10);
ctx.font = '12pt tahoma';
ctx.textBaseline = 'top';
ctx.textAlign = 'center';
ctx.fillStyle = '#808080';
ctx.fillText('Создать новую доску...', x + z, y + k);

}

desk(5, 5, 100, 25);


function CreateCard(){
  this.x = x;
  this.y = y;
  this.createC = function(){
   ctx.fillStyle = "white";
   ctx.fillRect(this.x, this.y, 250, 130, 10);
  }
  this.setTextCG = function (text, i, j){
   ctx.font = '11pt tahoma';
   ctx.textBaseline = 'super';
   ctx.textAlign = 'center';
   ctx.fillStyle = 'grey';
   ctx.fillText(text, this.x + i, this.y + j);
  }
  this.setTextCB = function (text, i, j){
   ctx.font = 'bold 13pt Times New Roman' ;
   ctx.textBaseline = 'super';
   ctx.textAlign = 'center';
   ctx.fillStyle = 'black';
   ctx.fillText(text, this.x + i, this.y + j);
  }
  this.clearC = function(i, j){
   ctx.fillStyle = "#266b94";
   ctx.fillRect(this.x - i, this.y - j, 300, 300, 10);
  }
}

function CreateX(){
  this.x = x;
  this.y = y;

  this.create = function(i, j){
   ctx.fillStyle = "#C0C0C0";
   ctx.fillRect(this.x + i, this.y + j, 25, 25, 10);
  }
  this.createBut = function(i, j){
   ctx.fillStyle = "#C0C0C0";
   ctx.fillRect(this.x + i, this.y + j, 85, 30, 10);
  }
  this.setTextX = function (text, i, j){
   ctx.font = '11pt sans-serif';
   ctx.fillStyle = 'black';
   ctx.fillText(text, this.x + i, this.y + j);
  }
}

let card = new CreateCard();
let butX = new CreateX();

function addInput(x, y, i, j, text) {
  var input = createElem('input');
  input.type = 'text';
  input.font = '14px sans-serif';
  input.id = 'tab';
  input.style.position = 'fixed';
  input.style.display = 'block';
  input.style.left = x + 'px';
  input.style.top = y + 'px';
  input.style.color = 'grey';
  input.value = text;
  document.body.appendChild(input);
  input.style.width = i + 'px';
  input.style.height = j + 'px';
  input.focus();
}

function create(event){
  if (225 > event.offsetX && 25 < event.offsetX &&
   95 > event.offsetY && 25 < event.offsetY) {
    card.createC();
    card.setTextCG('Создание доски', 120, 15);
    butX.create(220, 10);
    butX.setTextX('X', 232, 15);
    card.setTextCG('____________________________', 120, 25);
    card.setTextCB('Название', 60, 45);
    addInput(40, 135, 200, 20, '');
    butX.createBut(20, 95);
    butX.setTextX('Создать', 55, 102);
    can.addEventListener('click', () => document.removeEventListener('click', create));
  }
 
}

function removeInput() {
 let nodes = document.getElementById('tab');

document.body.removeChild(nodes);
}

function cancel(e){
 if (butX.x + 245 > e.offsetX && butX.x + 220 < e.offsetX &&
   butX.y + 35 > e.offsetY && butX.y + 5 < e.offsetY ){
    card.clearC(5, 5);
    desk(5, 5, 100, 25);
    removeInput();
    can.addEventListener('click', () => document.addEventListener('click', create));
  }
}

function inputFree(){
 let input1 = createElem('input');
 input1.id = 'tab1';
 input1.value = ' Добавить список...'
 input1.style.marginTop = '20px';
 input1.style.marginLeft = '20px';
 input1.style.width = '200px';
 input1.style.height = '25px';
 input1.style.border = '1px solid white';
 input1.style.borderRadius = '5px';
 input1.style.background = '#4682B4';
 input1.style.color = 'white';   input1.style.opacity = 0.75;
 let d1Main = document.getElementById('main');
 append(input1, d1Main);
 input1.addEventListener('mouseover', () => input1.style.opacity = 1);
 input1.addEventListener('mouseout', () => input1.style.opacity = 0.75);

}

function createH2() {
 let input = document.getElementById('tab').value;
 let d1Main = document.getElementById('main');
 let h2 = createElem('h2');
 h2.textContent = input;
 d1Main.appendChild(h2);
 h2.style.position = "relative";
 h2.style.left = '10px';
 h2.style.color = 'white';
 h2.style.margin = '10px';
}
// document.body.addEventListener('click', (e) => console.log(e.clientX, e.clientY));

function add(e) {
 if (butX.x + 105 > e.offsetX && butX.x + 20 < e.offsetX &&
   butX.y + 125 > e.offsetY && butX.y + 95 < e.offsetY ) {
   createH2();
   can.parentNode.removeChild(can);
   removeInput();
   inputFree();
  }
}

function createContainer(){
 let d1Main = document.getElementById('main');
 let dContainer = createElem('div');
 dContainer.id = 'container';
 dContainer.className = 'createDiv';
 dContainer.style.display = 'none';
 let br = createElem('br');
 dContainer.style.marginTop =  '30px';

 let i = createElem('input');
 i.id = 'list';
 i.style.color = 'grey';
 i.value = 'Добавить список...';
 i.style.margin = '5px';
 i.style.width = '200px';
 i.style.height = '25px';
 


 let b = createElem('button');
 b.id = 'saveC';
 b.className = 'saveS';
 b.textContent = 'Сoxpaнить';

 let x = createElem('button');
 x.id = 'x';
 x.className = 'X';  x.textContent = ' X ';
 x.style.border = '1px solid grey';
 x.style.borderRadius = '5px';
 x.style.fontSize = '15px';
 x.style.margin = '5px';
 x.style.height = '25px';
 x.addEventListener('click', hideBlock);


 append(i, dContainer);
 append(br, dContainer);
 append(b, dContainer);
 append(x, dContainer);
 append(dContainer, d1Main);

 i.addEventListener('focus', () => i.value = '');
 dContainer.addEventListener('mouseleave', () => {dContainer.style.display = 'none';
                                                  let tab1 = document.getElementById('tab1');   
                                                  tab1.style.display = 'inline-block';
                                                  tab1.style.position = 'absolute';
                                                }
 );
 b.addEventListener('click', createHList);
}

createContainer();

function hideBlock(event) {
 let tab1 = document.getElementById('tab1');
 let dContainer = document.getElementById('container');
   dContainer.style.display = 'none';
   tab1.style.display = 'inline-block';
   tab1.style.position = "absolute";
   console.log(tab1);
}

function showBlock(event){
 let tab1 = document.getElementById('tab1');
 let dContainer = document.getElementById('container');
 let target = event.target;
 if(target.id === 'tab1'){
   event.target.style.display = 'none';
   dContainer.style.display = 'inline-block';
 }
}
 
let i = 0;

function createList(){
 let list = document.getElementById('list');
 let d1Main = document.getElementById('main');
 let dCard = createElem('div');
   dCard.className = 'createDiv';
   dCard.id = 'd' + (i + 1);
   dCard.style.float = 'left';
   dCard.draggable = 'true';
   dCard.style.position = 'relative';
   dCard.style.top = '70px';

   let delCard = createElem('a');
   delCard.id = "a" + (i + 1);
   delCard.textContent = ' X  ';
   delCard.style.float = 'right';
   delCard.style.marginRight = '10px';
   delCard.style.marginTop = '7px';
   delCard.style.color = 'black';
   append(delCard,  dCard);
   delCard.addEventListener('click', delCards);

   let h3 = createElem('h3');
   h3.textContent = list.value;
   h3.id = 'h' +(i + 1);
   h3.style.margin = '5px';

   list.value = 'Добавить список...';

   let cardBut = createElem('button');
   cardBut.className = 'cards';
   cardBut.id = "cards" + (i + 1) ;
   cardBut.style.border = '1px solid grey';
   cardBut.style.borderRadius = '5px';
   cardBut.style.margin = '5px';
   cardBut.style.fontSize = '15px';
   cardBut.textContent = 'Добавить карточку...';
   cardBut.style.color = 'grey';
   cardBut.style.height = '25px';
   cardBut.style.display = 'block';
   cardBut.style.opacity = 0.7;
   cardBut.addEventListener('mouseover', () => cardBut.style.opacity = 1);
   cardBut.addEventListener('mouseout', () => cardBut.style.opacity = 0.7);
   cardBut.addEventListener('click', cardButClick);
   
   append(h3,  dCard);
   append(cardBut,  dCard);

   let text = createElem('textarea');
   text.classList = 'textA';
   text.id = 'text' + (i + 1) ;
   text.style.display = 'none';
   dCard.insertBefore(text, cardBut);

   let x1 = createElem('button');
   x1.className = 'X';
   x1.id = 'x'+ (i + 1);
   x1.textContent = ' X ';
   x1.style.display = 'none';
   x1.addEventListener('click', hideCardButt);

   let save1 = createElem('button');
   save1.className = 'saveS';
   save1.id = 'save'+ (i + 1) ;
   save1.textContent = 'Добавить';
   save1.style.display = 'none';
   save1.addEventListener('click', saveCards);
   dCard.addEventListener('mouseleave', () => {save1.style.display = 'none';
                                                x1.style.display = 'none';
                                                text.style.display = 'none';
                                                cardBut.style.display = 'block';
                                              }
    );
   append(save1, dCard);
   append(x1, dCard);
   append( dCard, d1Main);
   i++; 
}

function createHList(event) {
   let target = event.target;
   if(target.id === 'saveC'){
    if (list.value === '' || list.value === 'Добавить список...'){return;}
    else{
     createList();
    };
   }
}

function cardButClick(event){
 let card_id = event.target.id.substring(5)
 let x1 = document.getElementById("x" + card_id);
 let text = document.getElementById("text" + card_id);
 let save1 = document.getElementById("save" + card_id);
      
 x1.style.display = 'inline-block';
 text.style.display = 'block';
 save1.style.display = 'inline-block';
 event.target.style.display = 'none';
}

function delCards(event){
  let card_id = event.target.id.substring(1);
  let d = document.getElementById("d" + card_id);
  d.remove();
}


function delList(event){
  let card_id = event.target.id.substring(2);
  
  let dd = document.getElementById("dd" + card_id);
  // console.log(li)
  dd.remove();
}

function hideCardButt(event){
 let card_id = event.target.id.substring(1);
 let text = document.getElementById("text" + card_id);
 let save1 = document.getElementById("save" + card_id);
 let cardBut = document.getElementById("cards" + card_id);
  cardBut.style.display = 'block';
  event.target.style.display = 'none';
  save1.style.display = 'none';
  text.style.display = 'none';
}

let j = 0;

function saveCards(event){
 let card_id = event.target.id.substring(4) 
 let x1 = document.getElementById("x" + card_id);
 let text = document.getElementById("text" + card_id);
 let dCard =  document.getElementById("d" + card_id);
 let delCard = document.getElementById("a" + card_id);
 let delCardClone = delCard.cloneNode(true);
 delCardClone.id = "aa" + card_id + (j + 1); 
 delCardClone.addEventListener('click', delList);
  if(text.value !== ''){
   let dd = createElem('div');
   dd.classList.add('dd');
   dd.draggable = 'true';
   dd.id = 'dd' + card_id + (j + 1 );
   dd.textContent = text.value;
   text.value = '';
   dd.background = '#DCDCDC';
   append(delCardClone, dd);
   dCard.insertBefore(dd, text);
  //  dd.addEventListener('mouseover', (event) => {event.target.style.background = '#DCDCDC';
  //                                              delCardClone.style.background ='#DCDCDC' } );
  // dd.addEventListener('mouseout', (event) => {event.target.style.background = 'white';
  //                                              delCardClone.style.background ='white' });

  
   j++;
  }
}


CanvasRenderingContext2D.prototype.fillRect = fillRect;

function fillRect(x, y, w, h, r){
   this.beginPath();
   this.moveTo(x + r, y);
   this.lineTo(x + w - r, y);
   this.quadraticCurveTo(x + w, y, x + w, y + r);
   this.lineTo(x + w, y + h - r);
   this.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
   this.lineTo(x + r, y + h);
   this.quadraticCurveTo(x, y + h, x, y + h - r);
   this.lineTo(x, y + r);
   this.quadraticCurveTo(x, y, x + r, y);
   this.fill();
}
       
document.addEventListener('click', create);
document.addEventListener('click', add);
document.addEventListener('click', cancel);
document.addEventListener('click', showBlock);




function dragstart(event) {
 let target = event.target;
 
  if (target.draggable !== true) {return;}
    if (target.className === 'createDiv' ) {
      target.classList.add('currentDiv'); 
      target.classList.add('preOver');
    }
    if (target.className === 'dd') {
      target.classList.add('currentDD'); 
      target.classList.add('preOverDD');
    }
    event.dataTransfer.setData('text/plain', target.id);
    // console.log('start',target);
    // return true
}

function dragend(event) {
 let target = event.target;
 if (target.draggable !== true) {return;}

  if (target.classList.contains('createDiv')) {
    target.classList.remove('currentDiv');
    target.classList.remove('preOver');
  }
  if (target.classList.contains('dd') ){
    target.classList.remove('currentDD');
    target.classList.remove('preOverDD');
  } 
  // console.log('end', target);
  // return true;
} 
 


function dragenter(event) {
 let target = event.target;
 if (target.draggable !== true ) { return}
    if (target.classList.contains('createDiv') && !target.classList.contains('currentDiv')){
      target.classList.remove('currentDiv');
      target.classList.remove('preOver');
      // target.classList.remove('overDD');
      target.classList.add('over');
      // console.log('enterDiv', target)

    }
    if (target.classList.contains('dd') && !target.classList.contains('currentDD')) {
    
      target.classList.remove('currentDD');
      target.classList.remove('preOverDD');
//       target.classList.remove('over');
      target.classList.add('overDD');
      // console.log('enterDD', target)
    }
     // console.log('enterDD', target)
     // return true;
}



function dragleave(event) {
let target = event.target;
 if (target.draggable !== true ) { return;}
      if (target.classList.contains('createDiv') && !target.classList.contains('currentDiv')){
         target.classList.remove('over');
         
      } 
      if (target.classList.contains('dd') && !target.classList.contains('currentDD')){
        
         target.classList.remove('over');
      } 
}



function drop(event) {
 let target = event.target;
  if (target.classList.contains('createDiv') && target.draggable === true ) {
    let d = event.dataTransfer.getData('text');
    d = document.getElementById(d);
    target.classList.remove('over');
     target.classList.remove('preOver');
    if (d.offsetLeft > target.offsetLeft){
      target.parentNode.insertBefore(d, target);
    } else {
      target.parentNode.insertBefore(d, target.nextSibling);
      }
  }    
  if ( target.classList.contains('dd') && target.draggable === true ) {
    let d = event.dataTransfer.getData('text');
    d = document.getElementById(d);
    target.classList.remove('overDD');
    target.classList.remove('preOverDD');
    target.parentNode.insertBefore(d, target);
    // return false;
  }    
}

function dragover(event) {
 let target = event.target;
    event.preventDefault();
    
    
}


document.addEventListener('dragenter', dragenter); 
document.addEventListener('drop', drop);
document.addEventListener('dragover', dragover);
document.addEventListener('dragleave', dragleave);
document.addEventListener('dragstart', dragstart);
document.addEventListener('dragend', dragend); 

