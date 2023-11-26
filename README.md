# Auto Background Changer Game

## Overview

This repository contains the code for a simple **Auto Background Changer** web application. <br>
The game includes a **feature that changes the background color of the page every second**.

<img width="600" alt="Auto Background Changer" src="https://github.com/adisuyash/auto-bg-changer/assets/116362593/e4e554ea-3810-4849-9eec-3031084e2b8e"><br>
For live demo, click [here](http://adisuyash.github.io/auto-bg-changer/)

## What I Learnt ?

In the process of building this Auto Background Changer, I learnt :

### 1. Dynamic Color Changes

The project leverages JavaScript to dynamically change the background color of the page at regular intervals.<br>
This was achieved using the `setInterval` function and creating a random color generator function.

#### randomColor( )

The `randomColor` function generates a random color code in **Hexadecimal format** and sets the background color of the body element.<br>
This involves utilizing JavaScript's Math functions and manipulating the DOM.

```js
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
  }
  document.querySelector('body').style.backgroundColor = color;
};
```

### 2. Event Listeners
The project utilizes event listeners to respond to user interactions with the UI. Two main event listeners `setInterval` and `clearInterval` are employed:

#### Start Button Event Listener
The `Start` button initiates the background color change at an interval of one second when clicked.

```js
document.querySelector('#start').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Changing Now...');
  timeout = setInterval(randomColor, 1000);
});
```

#### Stop Button Event Listener
The `Stop` button stops the background color change when clicked.

```js
document.querySelector('#stop').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Stopping Now...');
  clearInterval(timeout);
});
```
These event listeners enhance the interactivity of the Auto Background Changer, providing a dynamic and visually appealing experience.
