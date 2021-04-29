'use strict';
let arrOfSite=['jaresh','amman','aqaba','madaba','irbid','zarqa','salt','karak','maan','tafila','ajloun','mafraq'];
let arrayofCards=[];
 let siteBtn = document.getElementById('siteAddition');
 function Cardsadd(name,source,description){
   this.name=name;
   this.source=source;
   this.description=description;
   arrayofCards.push(this);
 }




 const form = document.getElementById('information');
 form.addEventListener('submit',mySite);
 function mySite(event){
   event.preventDefault();
   let siteName = event.target.nameField.value;
   let siteDesc = event.target.descriptionField.value;
   let siteImg = event.target.myImg.value;
   new Cardsadd(siteName,siteImg,siteDesc);
   saveToLs();
   render(siteName,siteDesc,siteImg);  
   document.getElementById('popup').style.display='none';   
   console.log(arrayofCards);

 }



 function render(siteName,siteDesc,siteImg){
  let x1=document.getElementById('wrapper');
  let division=document.createElement('div');
  division.setAttribute('class', `card mix ${siteName}`);
  x1.appendChild(division);
  let pic = document.createElement('img');
  division.appendChild(pic);
  pic.src=siteImg;
  let division3=document.createElement('div');
  division3.setAttribute('class','descriptions')
  division.appendChild(division3);
  let title=document.createElement('h1');
  let title1=document.createTextNode(siteName);
  title.appendChild(title1);
  division3.appendChild(title);
  let text=document.createElement('p');
  let text1=document.createTextNode(siteDesc);
  text.appendChild(text1);
  division3.appendChild(text); 
 }
 function saveToLs(){
let arrLs=JSON.stringify(arrayofCards);
localStorage.setItem('Cards',arrLs);
 }
function getLs(){
let data=localStorage.getItem('Cards');
let cardsLs=JSON.parse(data);
console.log(cardsLs);
if(cardsLs!==null){
  arrayofCards=cardsLs;
}
}


let add1=document.getElementById('adding');
add1.addEventListener('click',addingsite);

function addingsite(event){
        document.getElementById('popup').style.display ='block';
 return event;
}

let close1=document.getElementById('colseadding');
close1.addEventListener('click',closeing);

function closeing(event){
  event.preventDefault();
  document.getElementById('popup').style.display='none';   
}

getLs();
console.log(arrayofCards);
for(let i=0;i<arrayofCards.length;i++){
  let siteName=arrayofCards[i].name;
  let siteImg=arrayofCards[i].source;
  let siteDesc=arrayofCards[i].description;
  render(siteName,siteDesc,siteImg);
  
   }
   console.log(arrayofCards);

   