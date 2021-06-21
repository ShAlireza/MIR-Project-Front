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
      class="my-6"
      label="Number of Articles"
      dense
      autocomplete="off"
      v-model="alfa"
      type="number"
    ></v-text-field>

    <v-btn color="green" block>submit</v-btn>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      infoFile: null,
      alfa: "",
    };
  },
  methods: {},
};
</script>
