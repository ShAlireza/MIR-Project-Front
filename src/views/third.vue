<template>
  <v-container>
      <v-file-input
          outlined
          dense
          rounded
          label="Information File"
          accept=".json"
          show-size
          v-model="infoFile"
          append-icon="mdi-paperclip"
          prepend-icon=""
        />
    <v-text-field
      label="Number of Top Author"
      outlined
      dense
      rounded
      autocomplete="off"
      v-model="topAuthor"
      type="number"
    ></v-text-field>

    <v-btn color="primary" rounded>submit</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      infoFile:null,
      topAuthor: "",
    };
  },
  methods: {
  },
};
</script>
