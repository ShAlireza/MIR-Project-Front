<template>
  <v-container>
    <v-text-field
      class="my-6"
      label="Number of Articles"
      dense
      autocomplete="off"
      v-model="numberOfArticles"
      type="number"
    ></v-text-field>

    <v-text-field
      class="my-6"
      label="Initial Urls"
      dense
      autocomplete="off"
      v-model="initialUrl"
      @keydown.enter="addNewUrl()"
      type="text"
    ></v-text-field>

    <v-card class="mb-5" v-show="initialUrls.length != 0" tile>
      <v-list-item v-for="(url, index) in initialUrls" :key="index" class="">
        <v-list-item-content class="d-flex flex-row justify-space-between">
          {{ url }}
        </v-list-item-content>
        <v-btn @click="removeUrl(url)" color="red" icon>
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
      </v-list-item>
    </v-card>

    <v-text-field
      class="my-6"
      label="Delay Time"
      dense
      autocomplete="off"
      v-model="DelayTime"
      type="number"
    ></v-text-field>

    <v-btn color="green" block>submit</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      numberOfArticles: "",
      initialUrl: "",
      initialUrls: [],
      DelayTime: "",
    };
  },
  methods: {
    addNewUrl() {
      this.initialUrls.push(this.initialUrl);
      this.initialUrl = "";
    },
    removeUrl(url) {
      this.initialUrls = this.initialUrls.filter((el) => {
        return el != url;
      });
    },
  },
};
</script>
