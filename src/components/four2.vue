<template>
    <v-container>
        <v-textarea
          solo
          label="Items"
          v-model="items"
          no-resize
          rounded
          outlined
          flat
          auto-grow
        ></v-textarea>

        <v-text-field
      label="The N Number"
      outlined
      dense
      rounded
      autocomplete="off"
      v-model="N"
      type="number"
    ></v-text-field>

    <v-btn color="primary ml-2" large rounded>submit</v-btn>

    </v-container>
</template>

<script>
export default {
  data(){
    return{
      items:'',
      N:''
    }
  },
  computed:{
    itemsArray(){
      return this.items.split([','])
    }
  }
}
</script>