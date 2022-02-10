const container = document.getElementById('container')

// code snippet from bobbyhadz.com(https://bobbyhadz.com/blog/javascript-set-multiple-attributes-to-element)
let setAttributes = (element, attributes) => {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}
// end code snippet

const createSpan = () => {
  let randomW = Math.trunc(Math.random() * window.innerWidth);
  let randomH = Math.trunc(Math.random() * window.innerHeight);

  console.log(randomW, randomH)

  let textContainer = document.createElement('span')
  textContainer.classList.add('letters')
  console.log(textContainer)
  textContainer.textContent = 'Random Text'

  let attributes = {
    style: `top: ${randomH}px; left: ${randomW}px;`
  }
  setAttributes(textContainer, attributes)
  
  container.appendChild(textContainer)

  setTimeout(()=> {
    textContainer.remove()
  }, 5000)

}

setInterval(createSpan, 2000)