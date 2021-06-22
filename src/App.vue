<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title class="mr-auto ml-4 font-weight-black"
        >MIR</v-toolbar-title
      >
      <v-container class="d-flex justify-center">
        <v-btn class="mx-6" color="purple" to="/1" activeClass="blue">
          first
        </v-btn>
        <v-btn class="mx-6" color="purple" to="/2" activeClass="blue">
          second
        </v-btn>
        <v-btn class="mx-6" color="purple" to="/3" activeClass="blue">
          third
        </v-btn>
        <!-- <v-btn class="mx-6" color=purple to='/4' activeClass="blue">
      fourth
    </v-btn> -->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-6"
              color="purple"
              :class="{ blue: $route.name == 'fourth' }"
              v-bind="attrs"
              v-on="on"
            >
              fourth
            </v-btn>
          </template>
          <v-list class="py-0">
            <v-list-item
              v-for="(item, index) in ['4.1', '4.2']"
              :key="index"
              :to="`/4-${index + 1}`"
              style="cursor:pointer;border-bottom:1px solid #e8e8e8"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
                v-show="$route.path == `/4-${index+1}`"
              >
                <path d="M0 0h24v24H0z" fill="none"/>
                <path 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>

    <v-main class="mt-10 d-flex justify-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.tool-bar {
  display: flex;
  justify-content: space-evenly;
}
</style>
<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
