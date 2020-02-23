<template>
  <div class="main">
    <h1 class="main text-center ma-10">Choose a region to begin</h1>
    <div class="text-center">
      <v-btn
        color="secondary"
        class="ma-1"
        v-for="region in regions"
        :key="region"
        @click="countriesInRegion(region)"
      >{{ region }}</v-btn>
    </div>
    <v-container forced>
      <v-row>
        <v-col cols="100">
          <v-row :align="alignment" :justify="justify" class="white" style="height: 200px;">
            <v-card
              class="ma-3 pa-6"
              outlined
              tile
              @click="selectCountry(country), $router.push({name:'Country', params: {countryName: country.name}})"
              v-for="country in countries"
              :key="country"
              max-width="200px"
              max-height="200px"
            >
              <v-img class="white--text align-end" height="100px" :src="country.flag"></v-img>

              <v-card-subtitle class="pb-0">{{country.name}}</v-card-subtitle>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <snackbar></snackbar>
  </div>
</template>

<script>
import Snackbar from "../components/Snackbar";

export default {
  name: "Main",
  methods: {
    countriesInRegion(region) {
      this.selectedRegion = region;
      fetch(
        `https://restcountries.eu/rest/v2/region/${this.selectedRegion}?fields=name;flag;alpha3Code`
      )
        .then(response => response.json())
        .then(result => {
          this.countries = result;
          this.$emit("chosen-regions", {
            region: region,
            status: true
          });
        });
    },
    selectCountry(country) {
      this.selectedCountry = country.name;
      fetch(
        `https://restcountries.eu/rest/v2/name/${this.selectedCountry}?fields=name;capital;currencies;population;flag;latlng`
      )
        .then(response => response.json())
        .then(result => {
          this.$store.state.countryDetails = result;
          this.$store.state.lat = this.$store.state.countryDetails[0].latlng[0];
          this.$store.state.lng = this.$store.state.countryDetails[0].latlng[1];
        });
    }
  },
  props: ["region"],
  components: {
    Snackbar
  },
  data() {
    return {
      alignment: "center",
      dense: false,
      justify: "center",
      selectedRegion: [],
      selectedCountry: [],
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      countries: [],
      flags: [],
      show: false,
      snackbar: false
    };
  }
};
</script>
