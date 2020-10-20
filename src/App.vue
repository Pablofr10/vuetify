<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
  created() {
    document.title = "Dashboard";
  },
};
</script>
<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-enter-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
