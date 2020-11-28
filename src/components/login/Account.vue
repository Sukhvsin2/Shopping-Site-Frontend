<template>
  <v-app>
      <v-container class="container-class" fluid>
        <v-row>
            <div class="mx-auto primary pa-4"><h3 class="text--white">LOGO</h3></div>
        </v-row>
        <v-row>
            <v-col>

            </v-col>
            <v-col cols="12" md="7" sm="12">
                <v-card flat>
                    <v-card-title>New Way to Order! (TAGLINE)</v-card-title>
                    <v-tabs centered v-model="tab">
                        <v-tab>Login</v-tab>
                        <v-tab>Register</v-tab>
                        <v-tab-item>
                            <Login/>
                        </v-tab-item>
                        <v-tab-item>
                            <Registeration/>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
import Login from './Login'
import Registeration from './Registeration'
export default {
    name:'AccountView',
    components: {
        Login,
        Registeration
    },
    data(){
        return{
            tab: null
        }
    }

}
</script>

<style scoped>
.container-class{
    background-image: url('https://source.unsplash.com/1600x900/?cat,cats');
    min-height: 100vh;
    background-size: cover;
}
</style>