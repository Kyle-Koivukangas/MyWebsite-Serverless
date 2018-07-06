<template>
  <v-layout column justify-center align-center class="overflow">
    <v-flex xs12 sm10 md10 class="overflow">
      <animated-banner></animated-banner>
      <v-card class="pa-2" >
        <!-- <v-card-title class="headline">Hi, I'm Kyle. I design and build web apps.</v-card-title> -->
        <v-card-text class="text-xs-center pb-2 mt-2">
          <p>I'm a web developer on Salt Spring Island, BC. I work primarily with Vue JS and Django.</p>
          <p>I specialize in front-end JavaScript and scalable, serverless Firebase solutions. I can make anything from a simple single-page website to a full web app, complete with database, user authentication, social network integration and more.</p>
          <p>Take a look at my <nuxt-link to="projects">projects</nuxt-link> to see what I've built. Have a website or application you want to make? Contact me <router-link to="hireme">here</router-link>.</p>
          <hr class="my-4">
          <contact-links></contact-links>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ContactLinks from '~/components/ContactLinks'
import AnimatedBanner from '~/components/AnimatedBanner'

export default {
  components: {
    ContactLinks,
    AnimatedBanner,
  }
}
</script>

<style lang="scss" scoped>
// @import "@/assets/variables.scss";
a {
  color: #00AEFF !important;
}


</style>

