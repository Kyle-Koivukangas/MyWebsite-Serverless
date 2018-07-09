import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1,
    secondary: colors.grey.lighten1,
    accent: colors.lightBlue.lighten2,
    error: colors.deepOrange.darken2,
    warning: colors.amber.accent4,
    info: colors.teal.lighten2,
    success: colors.green.darken1,
  },
  iconfont: "fa",
  icons: {
    envelope: "envelope",
    github: "github",
    "stack-overflow": "stack-overflow",
    "linkedin-square": "linkedin-square",
  },
});
