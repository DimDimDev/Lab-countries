<template>
  <div class="text-center ma-2">
    <v-snackbar @chosen-regions="onChooseRegion" :chosen-region="region" v-model="snackbar">
      You have chosen
      {{ chosenRegion }}!
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  name: "Snackbar",
  data: () => ({
    snackbar: false,
    chosenRegion: null
  }),
  props: {
    chosenRegion: {
      type: String,
      default: "Region"
    }
  },
  methods: {
    onChooseRegion(payload) {
      this.chosenRegion = payload.region;
      this.snackbar = payload.status;
    }
  }
};
</script>
