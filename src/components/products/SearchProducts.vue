<template>
  <v-app>
    <!-- <v-container>row</v-container> -->
      <v-row>
        <!-- <v-col class="filterSection" cols="12" md="2" sm="2">
          <v-container>Filter Section</v-container>
        </v-col> -->
        <v-col cols="12" md="12" sm="12" class="pa-4 ma-2">
            <v-row v-for="n in 3" :key="n">
              <ProductCard v-for="n in 4" :key="n" />
            </v-row>
        </v-col>
      </v-row>
  </v-app>
</template>

<script>
import ProductCard from "./ProductCard"
export default {
    name:'SearchProducts',
    components: {ProductCard}

}
</script>

<style scoped>

/* @media screen and (max-width: 770px) {
  .filterSection{
    display: none !important;
  }
} */

</style>