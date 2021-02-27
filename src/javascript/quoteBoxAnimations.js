
import anime from 'animejs/lib/anime.es.js'

// variables //
const duration = 300
const easing = 'easeInOutSine'

// -- FUNCTIONS ANIMATIONS --//
function appearQuote (el, done) {
  console.log('appearingElement')
  const elementListArray = el.firstChild.data.split(' ')

  const convertEl = []

  elementListArray.forEach((element, index) => {
    const newEl = '<div class="q">'.concat(element).concat('</div>')
    convertEl.push(newEl)
  })

  el.innerHTML = convertEl.join(' ')

  // Create a timeline with default parameters
  const timeline = anime.timeline({
    easing: easing,
    duration: duration
  })
    .add({
      targets: '.q',
      opacity: [0, 1],
      translateX: [100, 0],
      delay: anime.stagger(20)
    })
    .add({
      targets: '.quote-box__name',

      opacity: [0, 1],
      translateX: [100, 0]

    }, '-=200')
  timeline.play()
}

export { appearQuote }
