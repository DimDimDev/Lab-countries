<template>
  <div class="home">
    <v-carousel v-model="model">
      <v-carousel-item v-for="header in headers" :key="header">
        <v-sheet color="purple" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <h1 class="text-left">Get</h1>
            <div class="display-3">{{header}}</div>
            <p>from every country in the world!</p>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="text-center">
      <router-link to="/main" tag="v-btn">
        <v-btn x-large color="purple" dark class="ma-10">Get STARTED</v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      headers: ["Information", "Economics", "Wheather"],
      model: 0
    };
  },
  components: {}
};
</script>