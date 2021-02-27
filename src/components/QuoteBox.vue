<template>
  <div class="quote-container">

<!--    QUOTE-->
    <div class="quote-box">

      <div class="quote-box__icon"></div>

      <transition
        @appear="appearQuote"
        :css="false"
        mode="out-in"
      >
        <div class="quote-box__quote">
          <slot name="quote"></slot>
        </div>
      </transition>

      <div class="quote-box__name">
        <p>
          <slot name="name"></slot>
        </p>

        <div class="quote-box__profession">
          <p>
            <slot name="profession"></slot>
          </p>
        </div>
      </div>
    </div>

    <!--    PICTURE-->
    <div class="picture-box">
      <div class="picture-box__background">

        <div class="picture-box__picture">
          <slot name="picture"></slot>
        </div>

        <div class="picture-box__nav">
          <!--    <-- LEFT-->
          <div
            class="picture-box__nav--left"
            @click="changeSlide(-1)"
          >
            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="18">
              <path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8"/>
            </svg>
          </div>

          <!--          DIVIDER           -->
          <div>
            <svg class="picture-box__nav--line" width="2" height="50">
              <line y1="25%" y2="75%" fill="none" stroke="#8585AC" stroke-width="3"></line>
            </svg>
          </div>

          <!--    <-- RIGHT-->
          <div
            class="picture-box__nav--right"
            @click="changeSlide(1)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
              <path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import anime from 'animejs'

const { appearQuote } = require('@/javascript/quoteBoxAnimations')

export default {
  name: 'Quote',

  methods: {
    appearQuote,

    playMe () {
      console.log('playing')

      const t2 = anime({
        targets: '.q',
        translateX: 25, // -> '250px'
        duration: 2000,
        delay: anime.stagger(100)

      })

      t2.play()
    },

    changeSlide (direction) {
      // 1. find the place
      // 2. hit the direction - or +
      // 3. calc where to
      // 4. push to where toi
      // to big go to start, to small go to end
      const place = this.$store.getters.getPlace
      const routes = this.$store.getters.getRoutes

      let goingTo = place + (direction)

      if (goingTo > routes.length - 1) {
        goingTo = 0
      } else if (goingTo < 0) {
        goingTo = routes.length - 1
      }

      this.$store.dispatch('movePlace', { newPlace: goingTo, direction })
      this.$router.push(routes[goingTo])
    }
  }
}
</script>

<style scoped>

</style>
