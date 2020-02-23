<template>
  <v-app>
    <v-content>
      <MyLayout />
    </v-content>
  </v-app>
</template>

<script>
import MyLayout from "./components/MyLayout";

export default {
  name: "App",

  components: {
    MyLayout
  },

  data: () => ({
    //
  })
};
</script>
