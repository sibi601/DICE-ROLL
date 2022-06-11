//For User1

//For random numbers from 1 to 6.
const firstRandomNum=Math.floor(Math.random()*6)+1;

//For dice images from 1 to 6.
const firstDiceimage='assets/dice' + firstRandomNum + '.png';

//Selecting the image wrt random number.
document.querySelectorAll('img')[0].setAttribute('src', firstDiceimage);

//For User-2

//For random numbers from 1 to 6
const secondRandomNum=Math.floor(Math.random()*6)+1;

//For dice images from 1 to 6.
const secondDiceimage='assets/dice' + secondRandomNum + '.png';

//Selecting the image wrt random number.
document.querySelectorAll('img')[1].setAttribute('src', secondDiceimage);


//Conditions to win and for tie.

if(firstRandomNum>secondRandomNum){
   document.querySelector('h2').innerHTML="⚄ User-1 Wins ⚁";
}
else if(firstRandomNum<secondRandomNum){
    document.querySelector('h2').innerHTML="⚃ User-2 Wins ⚄";
}
else{
    document.querySelector('h2').innerHTML="⚂ Match Tied ⚂";
}

//Reloading the page on clicking a button.

function reloadPage(){
    location.reload();
}


