<template>
  <div class="home">
    <h1>Home Page</h1>

    <v-btn class="pink white--text">click me</v-btn>
    <v-btn depressed dark color="pink">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>
    <v-btn color="green white--text">
      <v-icon left>mdi-whatsapp</v-icon>
      <span>Enviar Mensagem</span>
    </v-btn>

    <v-btn depressed color="green white--text">
      <v-icon left small>mdi-whatsapp</v-icon>
      <span>Enviar Mensagem</span>
    </v-btn>

    <v-btn depressed large color="green white--text">
      <v-icon left large>mdi-whatsapp</v-icon>
      <span>Enviar Mensagem</span>
    </v-btn>

    <v-btn fab depressed small dark :color="colorB" @click="changeColor()">
      <v-icon>mdi-star</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      colorB: "grey white--text",
      corText: "",
    };
  },
  methods: {
    changeColor() {
      this.colorB = "purple yellow--text";
    },
  },
  components: {},
};
</script>
