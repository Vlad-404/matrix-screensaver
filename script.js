const container = document.getElementById('container')

// code snippet from bobbyhadz.com(https://bobbyhadz.com/blog/javascript-set-multiple-attributes-to-element)
let setAttributes = (element, attributes) => {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}
// end code snippet

// randomise text
const getRandomChar = () => {
  return String.fromCharCode(Math.floor(Math.random() * 93) + 33)
}

// console.log(getRandomChar())

const generateText = () => {
  let randomSymbols = []

  for(let i=0; i<10; i++) {
    randomSymbols.push(getRandomChar());
  }

  return randomSymbols.join('')
}

generateText()

const createSpan = () => {
  let randomW = Math.trunc(Math.random() * window.innerWidth);
  let randomH = Math.trunc(Math.random() * window.innerHeight);
  let randomText = 'Random Text'

  let textContainer = document.createElement('span')
  textContainer.classList.add('letters')
  // console.log(textContainer)
  textContainer.textContent = generateText()

  let attributes = {
    style: `top: ${randomH}px; left: ${randomW}px;`
  }
  setAttributes(textContainer, attributes)
  
  container.appendChild(textContainer)

  setTimeout(()=> {
    textContainer.remove()
  }, 5000)

}

let startLetters = setInterval(createSpan, 1000)
startLetters

window.addEventListener('click', () => {
  // document.querySelectorAll('span').length != 0 ? clearInterval(startLetters) : startLetters
  if(document.querySelectorAll('span').length != 0) {
    clearInterval(startLetters)
  } else {
    startLetters
    console.log('It should start now')
  }
  console.log(document.querySelectorAll('span').length)
})
