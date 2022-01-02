const jokeCard = document.getElementById('joke')
const setup = document.getElementById('setup')
const punchline = document.getElementById('punchline')

jokeCard.addEventListener('click', () => {
  if (setup.style.display !== 'none') {
    setup.style.display = 'none'
    punchline.style.display = 'block'
  }
})