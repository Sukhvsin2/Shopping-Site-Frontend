<template>
    <v-container>
        <h3 class="text-center">{{title}}</h3>
        <v-sheet class="group">
            <v-slide-group>
                <v-slide-item v-for="n in 20" :key="n">
                    <v-card class="ma-2 pa-4">
                        <v-card-title>
                            <v-img aspect-ratio="1" height="150" width="150" contain src="https://source.unsplash.com/500x500/?puppy,cats" lazy-src="https://source.unsplash.com/500x500/?puppy,cats"></v-img>
                        </v-card-title>
                        <v-card-text>content</v-card-text>
                        <v-card-actions>
                            <v-btn depressed :to="`/search`">View</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name:"latest",
    props:['title']

}
</script>

<style>

</style>