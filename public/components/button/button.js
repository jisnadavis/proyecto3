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
  lovebutton.className = 'lovebutton'
  lovebutton.addEventListener('click', () => {
    console.log('clickes')
    if (lovebutton.style.backgroundColor === 'red') {
      lovebutton.style.backgroundColor = 'white'
    } else {
      lovebutton.style.backgroundColor = 'red'
    }
  })
  return lovebutton
}
