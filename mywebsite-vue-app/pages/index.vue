<template>
  <v-layout column justify-center align-center class="overflow">
    <v-flex xs12 sm10 md10 class="overflow">
      <animated-banner></animated-banner>
      <v-card class="pa-2" style="height: 2000px">
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
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ContactLinks from '~/components/ContactLinks'
import AnimatedBanner from '~/components/AnimatedBanner'

export default {
  components: {
    Logo,
    VuetifyLogo,
    ContactLinks,
    AnimatedBanner,
  }
}
</script>

<style lang="scss">
// @import "@/assets/variables.scss";

.main-banner {
  color: white;
  // background-color: $highlight2;
  background-color: #00aeff;
  height: 300px;
  // max-width: $contentSize;
  margin: 30px auto;
  border-radius: 2px;
  display: flex;
  justify-content: left;
  align-items: center;
  //   background-image: url("../assets/webdevbanner.jpg");
  //   background-image: url("../assets/stocklaptop.jpg");
  // background-size: 1920px 1080px;
  // background-position-y: -250px;
}
.test {
    background-color: rgb(145, 32, 32);
}
.overflow {
  overflow: hidden !important;
}

#outer
{
  position: relative;
  margin: 10px;
}

#mb
{
  position: absolute;
  left: 50px;
  top: 75px;
  font-size: 2em;
  font-weight: bold;
  padding: 0.2em 1em;
  color: #fff;
  text-shadow: 0 0 5px rgba(255,255,255,0);
  -webkit-animation: motionblur 1s ease-out;
  animation: motionblur 1s ease-out;
}

@-webkit-keyframes motionblur {
  0%
  {
    left: 2000px;
    text-shadow: 5px 0 5px rgba(255,255,255,0);
    // box-shadow: 0 0 0 rgba(200,0,0,0);
  }
  5%
  {
    left: 2000px;
    -webkit-transform-origin: 0 0;
    -webkit-transform: scaleX(0.85);
  }
  25%
  {
    left: 800px;
    text-shadow: -5px 0 5px rgba(255,255,255,1);
    // box-shadow: -15px 0 10px -5px rgba(200,0,0,0.5);
    -webkit-transform: scaleX(1.1) skewX(-4deg);
  }
  50%
  {
    left: 250px;
    text-shadow: 0 0 0 rgba(255,255,255,0);
    // box-shadow: 0 0 0 rgba(200,0,0,0);
    -webkit-transform: scaleX(1) skewX(0deg);
  }
  55%
  {
    left: 250px;
    -webkit-transform-origin: 100% 0;
    -webkit-transform: scaleX(0.85);
  }
  75%
  {
    text-shadow: 5px 0 5px rgba(255,255,255,1);
    // box-shadow: 15px 0 10px -5px rgba(200,0,0,0.5);
    -webkit-transform: scaleX(1.1) skewX(4deg);
  }
	100%
  {
    left: 0px;
    text-shadow: 0 0 0 rgba(255,255,255,0);
    // box-shadow: 0 0 0 rgba(200,0,0,0);
    -webkit-transform: scaleX(1) skewX(0deg);
  }
}

@keyframes motionblur {
  0%
  {
    left: 2000px;
    text-shadow: 5px 0 5px rgb(255, 255, 255);
    // box-shadow: 0 0 0 rgba(200,0,0,0);
  }
  30% 
  {
    left: 800px;
    text-shadow: 5px 0 5px rgba(255,255,255,1);
    
  }
  60% 
  {
    text-shadow: 5px 0 5px rgba(255,255,255,.8);    
  }
  90%
  {
    left: 60px;
    text-shadow: 5px 0 5px rgba(255,255,255,.3);
    transform: scaleX(1) skewX(-4deg);
  }
	100%
  {
    left: 50px;
    text-shadow: 0 0 0 rgba(255,255,255,0);
    // box-shadow: 0 0 0 rgba(200,0,0,0);
    transform: scaleX(1) skewX(0deg);
  }
}

</style>

