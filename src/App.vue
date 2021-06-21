<template>
  <v-app>
    <v-app-bar
      app
      color="blue-gray"
      dark
    >
    <v-toolbar-title class="">MIR</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="mx-6" color=green rounded to='/1' activeClass="orange">
      first
    </v-btn>
    <v-btn class="mx-6" color=green rounded to='/2' activeClass="orange">
      second
    </v-btn>
    <v-btn class="mx-6" color=green rounded to='/3' activeClass="orange">
      third
    </v-btn>
    <v-btn class="mx-6" color=green rounded to='/4' activeClass="orange">
      fourth
    </v-btn>
    </v-app-bar>

    <v-main class="mt-10 d-flex justify-center">
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.tool-bar{
  display: flex;
  justify-content: space-evenly;
}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
