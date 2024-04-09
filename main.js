import { createheader } from './public/components/header/header'
import { createnavbar } from './public/components/navbar/navbar'
import {
  getphotosbysearch,
  getrandomphotos
} from './public/components/photos/photo'
import {
  formserach,
  buscarbutton,
  searchinput
} from './public/components/navbar/navbar'
import './style.css'
import { createfooter } from './public/components/header/footer/footer'
const divapp = document.querySelector('#app')
const header = createheader()
divapp.appendChild(header)
export const accesskey = 'Yun-jYwr4VG2r_LbRRMVX9qJgotV8WFe2k0eVA-lCrE'
const sectioncards = document.createElement('section')
sectioncards.classList.add('sectioncards')
divapp.appendChild(sectioncards)
getrandomphotos(accesskey, sectioncards, 50)
buscarbutton.addEventListener('click', (event) => {
  event.preventDefault()
  const keyword = searchinput.value.trim()
  searchinput.value = ''
  if (keyword !== '') {
    getphotosbysearch(accesskey, sectioncards, keyword)
  }
})
const footer = document.createElement('footer')
const footerelement = createfooter()
footer.appendChild(footerelement)
divapp.append(footer)
