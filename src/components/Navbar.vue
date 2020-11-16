<template>
  <div class="navbar">
      <!-- toolbar for desktop -->
      <v-toolbar flat class="align-center">
          <v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>
          <v-toolbar-title class='title'>
              <a class="logo" href="/">
                Title
              </a>
          </v-toolbar-title>
        <v-spacer class="d-flex d-lg-none "></v-spacer>
          <v-toolbar-items>
                <div class="searchBar d-none d-sm-none d-lg-flex d-md-block">
                    <v-autocomplete append-icon="mdi-magnify" />
                </div>
                <v-spacer></v-spacer>
                <div class="buttons">
                    <v-btn text>Login</v-btn>
                    <v-menu offset-y>
                        <template v-slot:activator="{on, attrs}">
                            <v-btn class="d-none d-md-none d-lg-flex" v-on="on" v-bind="attrs" text>more</v-btn>
                        </template>
                        <v-card class="pa-4">More Options</v-card>
                    </v-menu>
                    <v-btn icon>
                        <v-icon>mdi-cart</v-icon>
                    </v-btn>
                </div>
          </v-toolbar-items>
      </v-toolbar>
      <!-- toolbar for tab -->
        <div class="tabSearchbar">
            <v-autocomplete style="margin-top: 0" append-icon="mdi-magnify" />
        </div>
      <!-- toolbar for mobile -->
  </div>
</template>

<script>
export default {
    name: 'Navbar'

}
</script>

<style scoped>


.logo{
    text-decoration: none;
    margin-right: 10px;
}

.searchBar{
    padding-top: 15px;
    margin: 0 30px;
    width: 70vw;
    margin-left: 25px;
}

.buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.tabSearchbar{
    display: none;
}

@media screen and (max-width: 960px) {
    .tabSearchbar{
        display: block;
        margin-top: -10px;
        padding: 0 55px;
    }
}

</style>