<template>
  <v-container class="pa-8">
      <v-card flat>
          <v-form class="pa-8">
              <v-text-field label="Email"></v-text-field>
              <v-text-field :type=" passwordVisible ? 'text' : 'password'" label="Password" :append-icon="!passwordVisible ? 'mdi-eye' : 'mdi-eye-off-outline'" @click:append="passwordVisible = !passwordVisible"></v-text-field>
              <v-btn>Login</v-btn>
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
export default {
    name:'LoginScreen',
    data(){
        return{
            passwordVisible: false
        }
    },
    methods:{
        check(){
            console.log('check');
        }
    }

}
</script>

<style>

</style>