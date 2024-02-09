// project link - https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

function randomCol() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const num = Math.floor(Math.random() * 16);
      // console.log(num)
      color += hex[num];
    }
    return color;
  }
  randomCol();
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  };
  function changeBgColor() {
    document.body.style.backgroundColor = randomCol();
  }
  
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  