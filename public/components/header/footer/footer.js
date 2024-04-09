import './footer.css'

export const createfooter = () => {
  const footerdiv = document.createElement('div')
  footerdiv.className = 'footerdiv'

  const h1 = document.createElement('h1')
  h1.textContent = 'Follow us'

  const socialIconsDiv = document.createElement('div')
  socialIconsDiv.className = 'social-icons'

  // Create Instagram icon
  const instaImg = document.createElement('img')
  instaImg.className = 'social-icon'
  instaImg.src = './assets/Instagram_icon.png'

  // Create Facebook icon
  const facebookImg = document.createElement('img')
  facebookImg.className = 'social-icon'
  facebookImg.src = './assets/facebook.png'

  // Create Twitter icon
  const twitterImg = document.createElement('img')
  twitterImg.className = 'social-icon'
  twitterImg.src = './assets/twitter.png'

  // Append elements
  socialIconsDiv.appendChild(instaImg)
  socialIconsDiv.appendChild(facebookImg)
  socialIconsDiv.appendChild(twitterImg)

  footerdiv.appendChild(h1)
  footerdiv.appendChild(socialIconsDiv)

  return footerdiv
}
