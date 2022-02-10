const container = document.getElementById('container')

let randomW = Math.trunc(Math.random() * window.innerWidth);
let randomH = Math.trunc(Math.random() * window.innerHeight);

console.log(randomW, randomH)

container.innerHTML = `
  <span class="letters" style="top: ${randomH}px; left: ${randomW}px;">Other random chars</span>
`

console.log(container)