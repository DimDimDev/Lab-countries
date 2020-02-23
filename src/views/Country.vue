<template>
  <div class="Country">
    <div v-if="is_data_fetched">
      <section>
        <v-card class="mx-auto" max-width="500" tile>
          <v-img height="100%" :src="this.$store.state.countryDetails[0].flag">
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0" cols="12"></v-col>
              <v-col class="py-0">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content></v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </section>
      <h1 class="text-center mt-5">{{ $route.params.countryName }}</h1>
      <section>
        <v-container fixed>
          <v-row>
            <v-col cols="12">
              <v-row :align="alignment" :justify="justify" class="white" style="height: 300px;">
                <v-card class="mx-auto ma-10" width="350" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title class="headline mb-1">Information</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="80" color="white"></v-list-item-avatar>
                  </v-list-item>
                  <section>
                    <p class="ml-5">Population: {{this.$store.state.countryDetails[0].population}}</p>
                    <p class="ml-5">Capital: {{this.$store.state.countryDetails[0].capital}}</p>
                    <p
                      class="ml-5"
                    >Currency: {{this.$store.state.countryDetails[0].currencies[0].name}}</p>
                    <p
                      class="ml-5"
                    >Symbol: {{this.$store.state.countryDetails[0].currencies[0].symbol}}</p>
                  </section>
                </v-card>
                <v-card class="mx-auto ma-10" width="350" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title
                        class="headline mb-1"
                      >Pollution in {{this.$store.state.currentCountry.city}}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="80" color="white"></v-list-item-avatar>
                  </v-list-item>
                  <section>
                    <p class="ml-5">Pollution US EPA Standard: {{pollution.aqius}} AQI</p>
                    <p class="ml-5">Main pollutant US EPA Standard: {{pollution.mainus}}</p>
                    <p class="ml-5">Pollution China MEP standard: {{pollution.aqicn}} AQI</p>
                    <p class="ml-5">Main pollutant China MEP standard: {{pollution.maincn}}</p>
                  </section>
                </v-card>
                <v-card class="mx-auto ma-10" width="350" outlined>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-list-item-title
                        class="headline mb-1"
                      >Wheater in {{this.$store.state.currentCountry.city}}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="80" color="white">
                      <v-img
                        max-height="50px"
                        :src="`https://www.airvisual.com/images/${this.weather.ic}.png`"
                      ></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                  <section>
                    <p class="ml-5">Temperature: {{weather.tp}} Celcius</p>
                    <p class="ml-5">Humidity: {{weather.hu}} %</p>
                    <p class="ml-5">Atmospheric pressure: {{weather.pr}} hPa</p>
                    <p class="ml-5">Wind speed: {{weather.ws}} m/s</p>
                  </section>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <p
        class="mt-8 ml-8"
      >Data gathered from https://www.airvisual.com/ and https://restcountries.eu/</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Country",
  beforeMount() {
    this.setTitle();
  },
  methods: {
    setTitle() {
      document.title = this.$route.params.countryName;
    }
  },
  updated() {
    this.setTitle();
  },
  created() {
    setTimeout(() => {
      fetch(
        `http://api.airvisual.com/v2/nearest_city?lat=${this.$store.state.lat}&lon=${this.$store.state.lng}&key=5c9c56f7-6c5a-4a2b-a969-a25285afc446`
      )
        .then(response => response.json())
        .then(result => {
          this.$store.state.currentCountry = result.data;
          this.is_data_fetched = true;
          this.pollution = this.$store.state.currentCountry.current.pollution;
          this.weather = this.$store.state.currentCountry.current.weather;
        });
    }, 1000);
  },
  data() {
    return {
      latlng: [],
      currentCountry: [],
      weather: [],
      pollution: [],
      is_data_fetched: false
    };
  }
};
</script>