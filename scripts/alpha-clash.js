/**
 * function play(){
    //step-1:  get home-screen and hidden it.
   const homeScreen=document.getElementById('home-screen');
   homeScreen.classList.add('hidden'); // and hidden it.

   //step-2:  get play-ground and display it.
   const playGround=document.getElementById('play-ground');
   playGround.classList.remove('hidden'); //and display it.
 
}*/



function hideElementById(elementId) {
    const elemnt = document.getElementById(elementId);
    elemnt.classList.add('hidden')
}
function showElementbyId(elementId) {
    const elemnt = document.getElementById(elementId);
    elemnt.classList.remove('hidden')
}



//--------------------------------------------------
function handleKeybordKeCyUpEvent(event) {
    const playerPressed=event.key;

    // expected the key of player
    const currentAlphabet=document.getElementById('display-alphabet').innerText
    const expectedAlphabet=currentAlphabet.toLowerCase();
if(playerPressed === expectedAlphabet){
    console.log('Your press is right');
    gamePlay();
    removeBackgroundById(expectedAlphabet)

}else{
    console.log('Your press is wrong')
}
//  console.log(currentAlphabet);
}
document.addEventListener('keyup', handleKeybordKeCyUpEvent)

//----------------------------------------------------

function removeBackgroundById(elemnt){
    const element=document.getElementById(elemnt);
    element.classList.remove('bg-yellow-400')
}

//  play Game / Continue Game
function gamePlay() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabets.split('');

    const indexOfAlphabets = Math.random() * 25;
    const index = Math.round(indexOfAlphabets);
    const alphabet = alphabetArray[index];
    // console.log('rendom alphabet', alphabet);
    const getAlphabet = document.getElementById('display-alphabet')
    getAlphabet.innerText = alphabet

    getBackgroundColorById(alphabet)
}

function getBackgroundColorById(elementId) {
    const elemnt = document.getElementById(elementId)
    elemnt.classList.add('bg-yellow-400');
    
}

function playNow() {
    hideElementById('home-screen');
    showElementbyId('play-ground');
    gamePlay();



}
