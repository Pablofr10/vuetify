<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>
    <v-container class="my-5">
      <v-row wrap>
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card elevation="1" class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" :alt="person.name" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="blue">
                <v-icon small left> mdi-message </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {
      team: [
        {
          name: "The Net Ninja",
          role: "Web developer",
          avatar: "/img/avatar-1.png",
        },
        { name: "Ryu", role: "Graphic designer", avatar: "/img/avatar-2.png" },
        { name: "Chun Li", role: "Web developer", avatar: "/img/avatar-3.png" },
        {
          name: "Gouken",
          role: "Social media maverick",
          avatar: "/img/avatar-4.png",
        },
        { name: "Yoshi", role: "Sales guru", avatar: "/img/avatar-5.png" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
