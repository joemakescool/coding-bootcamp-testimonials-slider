
import anime from 'animejs/lib/anime.es.js'

// variables //
const duration = 300
const easing = 'easeInOutSine'

function moveInLeft (el, done) {
  anime({
    targets: el,
    translateX: [200, 0],
    opacity: [0, 1],
    duration: duration,
    easing: easing,
    complete: done
  })
}

function moveInRight (el, done) {
  // move in the whole element
  anime({
    targets: el,
    translateX: [-300, 0],
    opacity: [0, 1],
    duration: duration,
    easing: easing,
    complete: done
  })
}

function leaveGoingLeft (el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    translateX: [0, -300],
    duration: duration,
    easing: easing,
    complete: done
  })
}

function leaveGoingRight (el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    translateX: [0, 300],
    duration: duration,
    easing: easing,
    complete: done
  })
}

export { moveInLeft, moveInRight, leaveGoingLeft, leaveGoingRight }
