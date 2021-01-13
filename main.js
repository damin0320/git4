function changeImage() {
  var changes = document.getElementById('change');
  if(changes.src.match('firefox-icon.png')){
    changes.src = "images/firefox2.png";
  }else{
    changes.src = "images/firefox-icon.png"
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('please enter your name');
  if(!myName){
    setUserName();
  }else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozila is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
}else{
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozila is cool, ' +storedName;
}

myButton.onclick = function(){
  setUserName();
}