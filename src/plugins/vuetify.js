import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      dark: {
        primary: colors.yellow,
        background: colors.yellow,
      },
    },
  },
});

export default vuetify;
