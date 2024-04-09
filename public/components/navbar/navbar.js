import { createbutton } from '../button/button'
import { getphotosbysearch } from '../photos/photo'
import './navbar.css'
export const formserach = document.createElement('form')
export const searchinput = document.createElement('input')
export const buscarbutton = createbutton({
  texto: 'buscar',
  bgcolor: 'red',
  fontcolor: 'white'
})

const accesskey = 'Yun-jYwr4VG2r_LbRRMVX9qJgotV8WFe2k0eVA-lCrE'
export const createnavbar = () => {
  const navbar = document.createElement('nav')
  navbar.className = 'navbar'
  const navcontent = document.createElement('div')
  navcontent.className = 'navcontent'
  const inciobutton = createbutton({
    texto: 'inicio',
    bgcolor: 'black',
    fontcolor: 'white'
  })
  const explorar = createbutton({
    texto: 'explorar',
    bgcolor: 'white',
    fontcolor: 'black'
  })
  const crear = createbutton({
    texto: 'crear',
    bgcolor: 'white',
    fontcolor: 'black'
  })
  navcontent.appendChild(inciobutton)
  navcontent.appendChild(explorar)
  navcontent.appendChild(crear)
  const searchdiv = document.createElement('div')
  searchdiv.className = 'serchdiv'
  formserach.className = 'formserch'
  formserach.action = ''
  const searchimg = document.createElement('img')
  searchimg.className = 'searchimg'
  searchimg.src = './assets/searchimg.png'
  searchdiv.appendChild(searchimg)

  searchinput.placeholder = '  que queries buscar'

  searchinput.className = 'searchinput'

  buscarbutton.classList.add('buscarbutton')
  searchdiv.appendChild(formserach)

  formserach.appendChild(searchinput)
  formserach.appendChild(buscarbutton)

  const menubutton = document.createElement('button')

  menubutton.className = 'menubutton'
  const menuimg = document.createElement('img')
  menuimg.className = 'menuimg'
  menuimg.src = './assets/menu.png'

  menubutton.appendChild(menuimg)
  navbar.appendChild(menubutton)

  const divindex = document.createElement('div')
  divindex.className = 'divindex'

  const notificationlink = document.createElement('a')
  const notificationimg = document.createElement('img')
  notificationimg.src = './assets/campana.png'
  notificationimg.className = 'notificationimg'
  notificationlink.appendChild(notificationimg)
  const notificationmessage = document.createElement('a')
  const notificationmessageimg = document.createElement('img')
  notificationmessageimg.src = './assets/message.png'
  notificationmessageimg.className = 'notificationimg'
  notificationmessage.appendChild(notificationmessageimg)
  const notificationuser = document.createElement('a')
  const notificationuserimg = document.createElement('img')
  notificationuserimg.src = './assets/user1.jpg'
  notificationuserimg.className = 'notificationimg'
  notificationuser.appendChild(notificationuserimg)
  divindex.appendChild(notificationlink)
  divindex.appendChild(notificationmessage)
  divindex.appendChild(notificationuser)

  navbar.appendChild(navcontent)
  navbar.appendChild(searchdiv)
  navbar.appendChild(divindex)
  menubutton.addEventListener('click', () => {
    divindex.classList.toggle('menu-vertical')
  })

  return navbar
}
