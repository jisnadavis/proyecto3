import { createlovebutton } from '../button/button'
import './photo.css'
import { accesskey } from '../../../main'

export const getrandomphotos = async (accesskey, sectioncards, count) => {
  const url = `https://api.unsplash.com/photos/random?count=${count}&client_id=${accesskey}`
  try {
    const respuesta = await fetch(url)
    const photos = await respuesta.json()
    for (const photo of photos) {
      const imgarticle = document.createElement('article')
      imgarticle.className = 'articleimg'
      const img = document.createElement('img')
      img.className = 'card'
      img.src = photo.urls.small
      img.setAttribute('loading', 'lazy')
      const nameimg = document.createElement('h3')
      nameimg.textContent = photo.alt_description
      const lovebutton = createlovebutton()
      lovebutton.className = 'lovebutton'
      const downloadbutton = document.createElement('button')
      downloadbutton.className = 'download'
      const downloadimg = document.createElement('img')
      downloadimg.src = './assets/download.webp'
      downloadbutton.append(downloadimg)
      downloadbutton.addEventListener('click', () => {
        const downloadLink = document.createElement('a')
        downloadLink.href = photo.links.download
        downloadLink.download = 'photo.jpg'
        downloadLink.target = '_blank'
        downloadLink.click()
      })
      imgarticle.append(img)
      imgarticle.append(lovebutton)
      imgarticle.append(downloadbutton)

      imgarticle.append(nameimg)
      sectioncards.append(imgarticle)
    }
  } catch (error) {
    console.error('Error fetching random photos:', error)
  }
}
export const getphotosbysearch = async (accesskey, sectioncards, keyword) => {
  const url = `https://api.unsplash.com/search/photos?&query=${keyword}&client_id=${accesskey}`
  try {
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    console.log(data)

    sectioncards.innerHTML = ''

    if (data.results.length === 0) {
      displayNoResultsMessage(sectioncards)
    } else {
      for (const photo of data.results) {
        const imgarticle = document.createElement('article')
        imgarticle.className = 'articleimg'

        const img = document.createElement('img')
        img.className = 'card'
        img.src = photo.urls.small

        const nameimg = document.createElement('h3')
        nameimg.textContent = photo.alt_description

        const lovebutton = createlovebutton()
        lovebutton.className = 'lovebutton'

        const downloadbutton = document.createElement('button')
        downloadbutton.className = 'download'
        const downloadimg = document.createElement('img')
        downloadimg.src = './assets/download.webp'
        downloadbutton.append(downloadimg)

        downloadbutton.addEventListener('click', () => {
          const downloadLink = document.createElement('a')
          downloadLink.href = photo.links.download
          downloadLink.download = 'photo.jpg'
          downloadLink.target = '_blank'
          downloadLink.click()
        })

        imgarticle.append(img)
        imgarticle.append(lovebutton)
        imgarticle.append(downloadbutton)
        imgarticle.append(nameimg)
        sectioncards.appendChild(imgarticle)
      }
    }
  } catch (error) {
    console.error('Error fetching photos by search:', error)
  }
}
const displayNoResultsMessage = (sectionCards) => {
  sectionCards.innerHTML = ''
  const noResultsMessage = document.createElement('p')
  noResultsMessage.textContent = 'No se han obtenido resultados !!!'
  noResultsMessage.className = 'noResults'
  sectionCards.appendChild(noResultsMessage)
  setTimeout(() => {
    sectionCards.removeChild(noResultsMessage)

    getrandomphotos(accesskey, sectionCards, 10)
  }, 5000) //
}
