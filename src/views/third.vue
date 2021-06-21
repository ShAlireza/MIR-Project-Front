<template>
  <v-container>
    <v-file-input
      class="my-6"
      dense
      label="Information File"
      accept=".json"
      show-size
      v-model="infoFile"
    />
    <v-text-field
      class="my-4"
      label="Number of Top Author"
      dense
      autocomplete="off"
      v-model="topAuthor"
      type="number"
    ></v-text-field>

    <v-btn class="my-6" color="green" block>submit</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      infoFile: null,
      topAuthor: "",
    };
  },
  methods: {},
};
</script>
