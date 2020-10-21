<template>
  <v-dialog max-width="600px">
    <template #activator="{ on, attrs }">
      <v-btn color="success" v-bind="attrs" v-on="on"> Add new project </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline grey lighten-2">
        <h2>Add a New Project</h2>
      </v-card-title>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Popup",
};
</script>

<style scoped>
</style>
