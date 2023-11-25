// Generating a Random Color Code

// const randomColor = function () {
//   let a = Math.round(Math.random() * 10);
//   let b = Math.round(Math.random() * 10);
//   let c = Math.round(Math.random() * 10);
//   let d = Math.round(Math.random() * 10);
//   let e = Math.round(Math.random() * 10);
//   let f = Math.round(Math.random() * 10);

//   const bgColor = `#${a}${b}${c}${d}${e}${f}`;
//   document.querySelector('body').style.backgroundColor = bgColor;
// };

// Hitesh's Approach :

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
  }
  document.querySelector('body').style.backgroundColor = color;
};

let timeout;

document.querySelector('#start').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Changing Now...');
  timeout = setInterval(randomColor, 1000);
});

document.querySelector('#stop').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Stopping Now...');
  clearInterval(timeout);
});

