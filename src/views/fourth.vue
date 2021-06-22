<template>
  <v-container>
    <four-one v-show="$route.path=='/4-1'"></four-one>
    <four-two v-show="$route.path=='/4-2'"></four-two>
  </v-container>
</template>

<script>
import fourOne from '../components/four1.vue';
import fourTwo from '../components/four2.vue';

export default {
  components:{
    fourOne,
    fourTwo
  }
}
</script>