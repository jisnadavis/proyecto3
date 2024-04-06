import './footer.css'

export const createfooter = () => {
  // Create footer element

  // Create div for footer content
  const footerdiv = document.createElement('div')
  footerdiv.className = 'footerdiv'

  // Create heading
  const h1 = document.createElement('h1')
  h1.textContent = 'Follow us'

  // Create div for social media icons
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
