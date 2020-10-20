<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row wrap>
        <v-col cols="12" md="6" xs="12">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
        <v-col cols="12" xs="12" md="2">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
        <v-col cols="12" xs="12" md="2">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
        <v-col cols="12" xs="12" md="2">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
      </v-row>
      <v-row class="justify-space-between">
        <v-col cols="12" sm="3" xs="12" md="2">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
        <v-col cols="12" sm="3" xs="12" md="2">
          <v-btn outlined block color="primary">1</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
