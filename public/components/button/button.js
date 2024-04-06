import './button.css'
export const createbutton = ({ texto, bgcolor, fontcolor }) => {
  const button = document.createElement('button')
  button.className = 'main-button'
  button.style.backgroundColor = bgcolor
  button.style.color = fontcolor
  button.textContent = texto
  return button
}
export const createlovebutton = () => {
  const lovebutton = document.createElement('button')
  const loveimg = document.createElement('img')
  loveimg.src = './assets/Love.png'
  lovebutton.appendChild(loveimg)
  lovebutton.className = 'lovebutton'
  lovebutton.addEventListener('click', function () {
    this.classList.toggle('changecolor')
  })
  return lovebutton
}
