<template>
  <div class="slider">
      <carousel class="slider" :items="1" :autoplay="true" :nav="false">
        <v-img contain class="slider" src="https://source.unsplash.com/1600x500/?shopping,ecommerce" lazy-src="https://source.unsplash.com/1600x500/?shopping,ecommerce" alt="image1" />
        
        <v-img contain class="slider" src="https://source.unsplash.com/1600x500/?shop,online" lazy-src="https://source.unsplash.com/1600x500/?shop,online" alt="image1" />
        
        <v-img contain class="slider" src="https://source.unsplash.com/1600x500/?brand,shopping" lazy-src="https://source.unsplash.com/1600x500/?brand,shopping" alt="image1" />
      </carousel>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    name: 'Slider',
    components: { carousel }, 
}
</script>

<style scoped>
.slider{
  min-height: 500px;
}

/* mobile */
/* @media screen and (max-width: 425px) {
  .slider{
    min-height: auto;
  }
} */

/* tabs */
@media screen and (max-width: 900px) {
  .slider{
    min-height: auto;
  }
}

</style>