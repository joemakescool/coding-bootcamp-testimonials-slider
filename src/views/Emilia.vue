<template>
  <Quote key="Emilia" @leave="leave">
    <template v-slot:quote>
      “ I’ve been interested in coding for a while but never taken the jump, until now.
      I couldn’t recommend this course enough. I’m now in the job of my dreams and so
      excited about the future. ”
    </template>

    <template v-slot:name>Emilia Sinclair</template>
    <template v-slot:profession>UX Engineer</template>
    <template v-slot:picture><img src="@/assets/images/image-tanya.jpg" alt=""></template>
  </Quote>
</template>

<script>
import Quote from '@/components/QuoteBox'
import { leaveGoingLeft } from '@/javascript/animations'

export default {
  name: 'Emilia',
  components: {
    Quote
  },
  methods: {
    leave (el) {
      leaveGoingLeft(el)
    }
  }
}
</script>

<style scoped>

</style>
