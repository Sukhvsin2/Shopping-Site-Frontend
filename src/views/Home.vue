<template>
  <v-app>
      <Navbar/>
        <router-view/>
      <Footer/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"

export default {
    name: 'HomeView',
    components: {
        Navbar,
        Footer
    }

}
</script>

<style>

</style>