<template>
  <v-container>
    <v-text-field
      label="Number of Articles"
      outlined
      dense
      rounded
      autocomplete="off"
      v-model="numberOfArticles"
      type="number"
    ></v-text-field>

    <v-text-field
      label="Initial Urls"
      outlined
      dense
      rounded
      autocomplete="off"
      v-model="initialUrl"
      @keydown.enter="addNewUrl()"
      type="text"
    ></v-text-field>

    <v-card class="mx-auto mb-5" v-show="initialUrls.length!=0" max-width="400" tile>
      <v-list-item v-for="(url,index) in initialUrls" :key="index">
        <v-list-item-content class="d-flex flex-row justify-space between">
          <v-btn @click="removeUrl(url)">{{url}}</v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-text-field
      label="Delay Between Each Crawl"
      outlined
      dense
      rounded
      autocomplete="off"
      v-model="DelayBetweenEachCrawl"
      type="number"
    ></v-text-field>

    <v-btn color="primary" rounded>submit</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      numberOfArticles:"",
      initialUrl: "",
      initialUrls: [],
      DelayBetweenEachCrawl:"",
    };
  },
  methods: {
    addNewUrl() {
      this.initialUrls.push(this.initialUrl);
      this.initialUrl = "";
    },
    removeUrl(url){
        this.initialUrls=this.initialUrls.filter((el)=>{
            return el!=url;
        })
    }
  },
};
</script>
