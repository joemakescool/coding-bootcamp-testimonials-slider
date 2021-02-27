<template>
  <div class="app">

    <transition
      @enter="enter"
      @leave="leave"
      :css="false"
      mode="out-in"
      >
      <router-view key="trans"/>
    </transition>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Joe Barker</a>.
    </div>
  </div>
</template>

<script>
import { moveInLeft, moveInRight, leaveGoingLeft, leaveGoingRight } from '@/javascript/animations'

export default {
  methods: {
    enter (el, done) {
      const direction = this.$store.getters.getDirection
      if (direction === -1) {
        moveInLeft(el, done)
      } else {
        moveInRight(el, done)
      }
    },
    leave (el, done) {
      const direction = this.$store.getters.getDirection
      if (direction === -1) {
        leaveGoingLeft(el, done)
      } else {
        leaveGoingRight(el, done)
      }
    }
  }

}
</script>

<style lang="scss">
//@import "sass/main";

</style>
