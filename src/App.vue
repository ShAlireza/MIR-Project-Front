<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      class="d-flex justify-center"
      dark
    >
    <v-btn class="mx-6" color=purple to='/1' activeClass="blue">
      first
    </v-btn>
    <v-btn class="mx-6" color=purple to='/2' activeClass="blue">
      second
    </v-btn>
    <v-btn class="mx-6" color=purple to='/3' activeClass="blue">
      third
    </v-btn>
    <v-btn class="mx-6" color=purple to='/4' activeClass="blue">
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
