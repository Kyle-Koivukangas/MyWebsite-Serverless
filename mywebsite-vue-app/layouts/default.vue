<template>
  <!-- TODO: 
        - DELETE OLD COMMENTED OUT COMPONENTS. 
   -->
    <v-app id="inspire" v-resize="onResize">
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-layout mt-5 mb-5 column wrap>
        <v-flex xs12 sm12 md12 text-xs-center layout align-center justify-center>
          <v-avatar mx-auto :tile="false" :size="'150px'" color="grey lighten-4">
            <img src="https://www.kylekoivukangas.com/static/img/Kyle.f2ea82b.jpg" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex mt-4 12 text-center layout align-center justify-center>
          <h2>Kyle Koivukangas</h2>
        </v-flex>
      </v-layout>
        
      <v-list class="align-center text-xs-center">
        <v-list-tile @click="routeTo('/')">
          <v-list-tile-content class="text-xs-center align-center" justify-center align-center text-xs-center>
            <v-list-tile-title class="text-xs-center" >Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile @click="routeTo('/projects')">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center align-center">Projects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="routeTo('/blog')">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center align-center">Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="routeTo('/about')">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center align-center">About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="routeTo('/hireme')">
          <v-list-tile-content>
            <v-list-tile-title class="text-xs-center align-center">Hire Me</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-spacer my-5 py-5/>
      
      <!-- <v-container style="position: fixed; bottom: 0;" xs12>
        <v-list  dense align-end text-xs-right>
          <v-list-tile v-for="item in secondaryNavItems" :key="item.title" @click="newTab(item.url)">
            <v-list-tile-avatar align-right>
              <v-icon :class="item.iconClass">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title align-right>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-container> -->

      <!-- This is the old subnav links design, copied from the original django-based version. -->
      <v-container class="secondary-info hidden" hidden-sm-and-down>
        <ul>
          <li><a class="secondary-link" href="mailto:kyle.koivukangas@gmail.com"><icon class="ico" name="envelope" scale="1" label="envelope"></icon><fa icon="envelope"> </fa> Email</a></li>
          <li><a class="secondary-link" target="_blank" href="https://github.com/Kyle-Koivukangas"><icon class="ico" icon="github" scale="1" name="github" label="github"></icon> Github</a></li>
          <li><a class="secondary-link" target="_blank" href="https://stackoverflow.com/users/6900746/kyle"><icon class="ico" name="stack-overflow" scale="1" label="stack overflow"></icon> Stack Overflow</a></li>
          <li><a class="secondary-link" target="_blank" href="https://www.linkedin.com/in/kyle-koivukangas/"><icon class="ico" name="linkedin-square" scale="1" label="linkedin"></icon> LinkedIn</a></li>
          <li class="list-spacer"><div class="hr-small"></div></li>
          <li><a @click="alertPGP()" class="secondary-link" href="">PGP</a></li>
          <li><a @click="alertBTC()" class="secondary-link" href="">BTC</a></li>
        </ul>
      </v-container>

      <!-- New vuetify-based subnav links, currently active only on small screens. -->
      <v-container class="secondary-info" hidden-md-and-up>
        <v-list>
          <v-list-tile v-for="item in secondaryNavItems" :key="item.title" @click="">
            <v-list-tile-content></v-list-tile-content>
            <v-list-tile-action class="mx-1">
              <v-icon class="icon">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-content>
          </v-list-tile>
        </v-list>
      </v-container>

    </v-navigation-drawer>    

    <!-- <v-toolbar app fixed clipped-left>
    </v-toolbar> -->
    <v-content >
        <nav-side-icon @click.native.stop="drawer = !drawer" :showDrawer="drawer" ripple></nav-side-icon>
        <!-- commented out old sidebar button, using custom sidebar. -->
        <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-container class="content-wrapper">
                <nuxt />
            </v-container>
          </v-flex>
        </v-layout>
    </v-content>
    <v-footer app inset class="footer">
      <span>Kyle Koivukangas &copy; 2018</span>
      <v-spacer style="height: 50px"></v-spacer>
      <span @click="rangefinder = !rangefinder">Rangefinder</span>
    </v-footer>
  <rangefinder v-if="rangefinder" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
  </v-app>
</template>

<script>
import Rangefinder from '~/components/VuetifyRangefinder'
import NavSideIcon from '~/components/NavSideIcon'


// import * as firebase from 'firebase'
// import "vue-awesome/icons/envelope";
// import "vue-awesome/icons/github";
// import "vue-awesome/icons/linkedin-square";
// import "vue-awesome/icons/stack-overflow";

export default {
  components: {
    Rangefinder,
    NavSideIcon,
  },
    data() {
        return {
            drawer: false,
            avatarSize: '75px',
            secondaryNavItems: [
              { title: "Email", iconClass: "subnavIco", icon: "fas fa-envelope", url: "mailto:kyle.koivukangas@gmail.com"},
              { title: "Github", iconClass: "subnavIco", icon: "fab fa-github", url: "https://www.github.com/kyle-koivukangas"},
              { title: "Stack Overflow", iconClass: "subnavIco", icon: "fab fa-stack-overflow", url: "https://stackoverflow.com/users/6900746/kyle"},
              { title: "LinkedIn", iconClass: "subnavIco", icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/kyle-koivukangas/"},
            ],
            rangefinder: false,
            windowSize: {
              x: 0,
              y: 0
            },
        }
    },
    methods: {
      routeTo(path) {
        this.$nuxt.$router.push(path);
      },
      onResize () {
        this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      },
      newTab(url) {
        window.open(url, '_blank')
      },
      alertPGP() {
          // Prompt user instead of using alert, this automatically highlights the text for easy copying.
        prompt(
          "Please press ctrl+c to copy the PGP key.",
          "-----BEGIN PGP PUBLIC KEY BLOCK-----     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GRez    -----END PGP PUBLIC KEY BLOCK-----"
        );
      },
      alertBTC() {
        prompt("Please press ctrl+c to copy the BTC receive address.", "1AXknQRS4CLYCLLuAd6UMsBkbbA9DM4XnW");
      },
    },
    mounted () {
      this.onResize()
    },
    created() {
    // NOTE: probably don't need to initialize firebase here, I can't see me needing to access firebase from
    //      from outside the store.
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyD7urYuc78SsGwyGsRkhrgT9r7SUADPX8M",
    //         authDomain: "my-website-f1d12.firebaseapp.com",
    //         databaseURL: "https://my-website-f1d12.firebaseio.com",
    //         // https://my-website-f1d12.firebaseio.com/flamelink/environments/production   <-- realtime production DB url.
    //         projectId: "my-website-f1d12",
    //         storageBucket: "my-website-f1d12.appspot.com",
    //         messagingSenderId: "1094025781119",})

        // Load blog posts in background on app boot.
        this.$store.dispatch('loadBlogPosts')
    }
}
</script>

<style lang="scss">
// @import url("~/assets/variables.scss");
// @import url('https://fonts.googleapis.com/css?family=Josefin+Slab|Ubuntu|Ubuntu+Condensed|Vollkorn');

// $josefin: "Josefin Slab", serif;
// $vollkorn: "Vollkorn", serif;
// $ubuntu: "Ubuntu", sans-serif;
// $ubuntucond: "Ubuntu Condensed", sans-serif;
// $lato: "Lato", sans-serif;


.icon {
    font-size: 20px;
    width: 20px;
}

.secondary-info {
    position: fixed;
    bottom: 0;
    left: 0;
    // width: $sidebarWidth;
    text-align: right;
    // font-family: $ubuntucond;
    font-weight: 600;
    color: #aaa !important;
    & ul {
        list-style: none;
        & li a {
            clear: both;
        }
    }
}
.hide {
    display: none;
}
.secondary-link {
    color: #aaa !important;
    text-decoration: none !important;
    &:hover {
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
        transition: 0.3s;
        color: #777 !important;
        text-decoration: none;
    }
}
.list-spacer {
    height: 19px;
}
.hr-small {
    height: 1px;
    width: 50px;
    float: right;
    clear: both;
    background-color: lighten(#aaa, 5%);
    margin: 10px 0 0px 0;
}
.ico {
    margin: auto;
    display: inline-block;
    vertical-align: text-bottom;
    & :hover {
        // -webkit-animation: fade 1s;
        // animation: fade 1s;
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
    }
}

.content-wrapper {
    max-width: 1185px;
}


.toolbar__side-icon {
}
.btn__content {
}
</style>
