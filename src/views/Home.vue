<template>
  <v-app>
      <Navbar/>
      <Slider/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider"

export default {
    name: 'Home',
    components: {
        Navbar,
        Slider
    }

}
</script>

<style>

</style>