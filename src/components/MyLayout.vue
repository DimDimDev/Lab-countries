<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="this.$store.state.drawer" app right>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link to="/" tag="v-list">
              <v-list-item-title>Home</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-map</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <router-link to="/main" tag="v-list">
              <v-list-item-title>Countries</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="purple" dark>
      <v-spacer />

      <v-toolbar-title></v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = drawer" />
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="purple" app>
      <v-spacer />

      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "MyLayout",

  props: {
    source: String
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(drawer) {
        this.$store.commit("setdrawer", drawer);
      }
    }
  },
  data: () => ({})
};
</script>