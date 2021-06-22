<template>
    <v-container>
        <v-textarea
          solo
          label="Items"
          v-model="items"
          no-resize
          outlined
          flat
          rounded
          auto-grow
        ></v-textarea>

        <v-btn color="primary ml-2" rounded large>submit</v-btn>

    </v-container>
</template>

<script>
export default {
  data(){
    return{
      items:'',
    }
  },
  computed:{
    itemsArray(){
      return this.items.split([','])
    }
  }
}
</script>