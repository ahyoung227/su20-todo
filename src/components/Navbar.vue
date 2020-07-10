<template>
  <nav>
<!-- navbar -->    
    <v-app-bar text app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title text class="text-uppercase grey--text">
        <span class="font-weight-light">AY</span>
        <span>TODOS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>sign out</span> 
      </v-btn>
    </v-app-bar>
  
<!-- navigation drawer -->
    <v-navigation-drawer app v-model="drawer" class="primary">
      <div class="text-center ma-10 mb-0">
        <v-avatar size="62">
          <img
            src="https://avatars2.githubusercontent.com/u/53630359?s=460&u=57cc87659070a26d92399edc51f723d17c81300c&v=4"
            alt="ahyoung"
          >
        </v-avatar>
        <v-subheader class="white--text ml-8">AhyoungKim</v-subheader> 

      </div>
      <v-list>  
        <v-list-item-group color="primary">  
          <v-list-item
            v-for="link in links" 
            :key="link.text" 
            router :to="link.route"
          >
              <v-list-item-icon>
                <v-icon v-text="link.icon" class="primary white--text"></v-icon>
              </v-list-item-icon>
              
              <v-list-item-content>
              <v-list-item-title v-text="link.text" class="primary white--text"></v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>  
    </v-navigation-drawer>
  </nav>

</template>

<script>
  export default {
    data: () => {
      return {
        drawer: false,
        links: [
          { icon: 'widgets', text: 'Dashboard', route: '/'},
          { icon: 'folder', text: 'Projects', route: '/projects'},
          { icon: 'view_agenda', text: 'Menu', route: '/menu'}
        ]
      }
    }
  }
</script>
