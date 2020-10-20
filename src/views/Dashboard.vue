<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-card elevation="2" outlined class="pa-3">
        <v-row>
          <v-col md="6" xs="12" cols="12">
            <div class="caption grey--text">Project Title</div>
            <div>Create a new website</div>
          </v-col>
          <v-col xs="12" sm="4" md="2" cols="12">
            <div class="caption grey--text">Person</div>
            <div>The Net Ninja</div>
          </v-col>
          <v-col xs="6" sm="4" md="2" cols="12">
            <div class="caption grey--text">Due by</div>
            <div>1st Jan 2019</div>
          </v-col>
          <v-col xs="6" sm="4" md="2" cols="12">
            <div class="caption grey--text">Status</div>
            <div>ongoing</div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
