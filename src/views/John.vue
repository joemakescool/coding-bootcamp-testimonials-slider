<template>
  <Quote>
    <template v-slot:quote>
      “ If you want to lay the best foundation possible I’d recommend taking this course.
      The depth the instructors go into is incredible. I now feel so confident about
      starting up as a professional developer. ”
    </template>

    <template v-slot:name>John Tarkpor</template>
    <template v-slot:profession>Junior Front-end Developer</template>
    <template v-slot:picture><img src="@/assets/images/image-john.jpg" alt=""></template>
  </Quote>
</template>

<script>
import Quote from '@/components/QuoteBox'
export default {
  name: 'John',
  components: {
    Quote
  }
}
</script>

<style scoped>

</style>
