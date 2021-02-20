<template>
  <Quote>
    <template v-slot:quote>
      “ During one of the very final scenes of The Rise of Skywalker, Rey travels to Tattooine to place the Skywalker lightsabers in Luke's childhood home. A local woman passing by stops and asks Rey who she is, to which the young heroine responds, "I'm Rey." The woman then asks, "Rey who?" and after seeing the Jedi ghosts of Leia and Luke, Rey responds with, "Rey Skywalker." ”
    </template>

    <template v-slot:name>Rey Skywalker</template>
    <template v-slot:profession>Jedi UI Engineer</template>
    <template v-slot:picture><img src="@/assets/images/image-rey.jpg" alt=""></template>
  </Quote>
</template>

<script>
import Quote from '@/components/QuoteBox'
export default {
  name: 'Rey',
  components: {
    Quote
  }
}
</script>

<style scoped>

</style>
