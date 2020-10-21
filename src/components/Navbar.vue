<template>
  <nav>
    <v-app-bar>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey-text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- DropDown Menu -->

      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn text color="primary" v-bind="attrs" v-on="on">
            <span>Menu</span>
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app temporary class="primary" v-model="drawer">
      <v-row justify="center">
        <v-col cols="6" class="mt-5">
          <v-avatar size="100">
            <img src="/img/avatar-1.png" />
          </v-avatar>
          <p class="white--text subheading mt-1">Pablo Araújo</p>
        </v-col>
        <v-col class="text-center mt-4">
          <Popup />
        </v-col>
      </v-row>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.icon"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title></v-list-item-content
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "@/components/Popup.vue";
export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-account", text: "My Projects", route: "/projects" },
        { icon: "mdi-folder", text: "Team", route: "/team" },
      ],
    };
  },
};
</script>

<style scoped>
</style>
