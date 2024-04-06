import { createnavbar } from '../navbar/navbar'
import './header.css'
export const createheader = () => {
  const header = document.createElement('header')
  header.className = 'flex-container'
  const logocontainer = document.createElement('figure')
  logocontainer.className = 'logocontainer'
  const logoimage = document.createElement('img')
  logoimage.className = 'logoimage'
  logoimage.src = './assets/pintrestlogo.webp'
  logocontainer.appendChild(logoimage)
  header.appendChild(logocontainer)
  const nav = createnavbar()
  header.appendChild(nav)
  return header
}
