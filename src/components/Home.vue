<template>
  <v-app>
    <Slider/>
    <LatestViews title="Latest Items"/>
    <v-container>
    <v-row>
        <v-col cols="6">
            <Advertisement/>
        </v-col>
        <v-col cols="6">
            <Advertisement/>
        </v-col>
    </v-row>
    </v-container>
    <LatestViews title="Latest Brands"/>
  </v-app>
</template>

<script>
import Slider from "@/components/Slider"
import LatestViews from "@/components/showcase/LatestViews"
import Advertisement from "@/components/showcase/Advertisement"

export default {
    name:'Home',
    components:{
        Slider,
        LatestViews,
        Advertisement,
    }

}
</script>

<style>

</style>