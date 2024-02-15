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
    const playerPressed = event.key;

    if(playerPressed ==='Escape' ){
        gameOver()
    }
    // expected the key of player.
    const currentAlphabet = document.getElementById('display-alphabet').innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // update score:

    //start a new round.
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        
        const scoreNo=document.getElementById('score-no');
         scoreNo.innerText=updatedScore



        //------------------------

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // // console.log(newScore);
        // currentScoreElement.innerText = newScore    

        gamePlay();
        removeBackgroundById(expectedAlphabet)

    } else {

        const currentLife = getTextElementValueById('current-life')
        console.log(currentLife)
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
           
        }





        //-----------------------------

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        // const newLife=currentLife-1;

        // currentLifeElement.innerText=newLife;

    }

}
document.addEventListener('keyup', handleKeybordKeCyUpEvent)

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    return value
}

function getElementTestById(elementId){
    const element=document.getElementById(elementId);
    const text=element.innerText;
    return text ;
}



//----------------------------------------------------

function removeBackgroundById(elemnt) {
    const element = document.getElementById(elemnt);
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
function gameOver() {
    hideElementById('play-ground');
    showElementbyId('final-score')

}
function playAgain(){
    const play=document.getElementById('play-again');
    hideElementById('final-score');
    showElementbyId('play-ground') 
}

///
 const currentAlphabet=getElementTestById('display-alphabet');
 removeBackgroundById(currentAlphabet);