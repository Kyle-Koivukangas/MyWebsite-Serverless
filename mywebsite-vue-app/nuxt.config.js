const pkg = require("./package");

const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {hid: "description", name: "description", content: pkg.description},
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: "#00BCD4", height: "10px"},

  /*
  ** Global CSS
  */
  css: ["vuetify/src/stylus/main.styl", "@/assets/scss/mixins.scss", "./assets/scss/mixins.scss"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ["@/plugins/vuetify", "~/plugins/vue-awesome"],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // "@nuxtjs/axios",
    ['nuxt-sass-resources-loader', [
      '@/assets/scss/mixins.scss',
      '@/assets/scss/variables.scss',
    ]],
    // [
    //   "nuxt-fontawesome",
    //   {+
    //     component: "fa",
    //     imports: [
    //       {
    //         set: "@fortawesome/fontawesome-common-types",
    //         icons: ["envelope", "github", "linkedin"],
    //       },
    //     ],
    //   },
    // ],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // babel: {
    //   presets: ["env", "stage-0"],
    // },
    vendor: ["vue-awesome"],

    extend(config, ctx) {
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/],
          }),
        ];
      }
    },
  },
};
