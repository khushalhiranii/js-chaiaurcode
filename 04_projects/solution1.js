// project link - https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (eve) {
    console.log(eve);
    console.log(eve.target);
    
    // if(eve.target.id === 'grey'){
    //   body.style.backgroundColor = 'grey'
    // }
    // if(eve.target.id === 'white'){
    //   body.style.backgroundColor = 'white'
    // }
    // if(eve.target.id === 'yellow'){
    //   body.style.backgroundColor = 'yellow'
    // }
    // if(eve.target.id === 'blue'){
    //   body.style.backgroundColor = 'blue'
    // }
    body.style.backgroundColor = eve.target.id
  });
});
