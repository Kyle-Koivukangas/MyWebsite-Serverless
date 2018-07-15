<template>
<v-container>
  <v-layout row wrap justify-center>
    <transition-group name="fade" class="preview__group" >
      <v-flex v-for="item in feed" class="preview" :key="item.id" justify-center wrap sm12 md5 ma-3>
        <!-- <nuxt-link :to="`/projects/read/${item.slug}`" @click.native="viewItem(item.id)"> -->
          <v-card flat hover :img="item.image" @click.native="viewItem(item.id, item.slug)">
            <v-card-media :height="itemHeight" >

            </v-card-media>

            <!-- Need to find a way to make nuxt transitions work with routing WITHOUT reseting state and reloading component... -->
            <transition mode="out-in" name="fade">
            <v-card-title v-if="!viewing" class="preview__title">
              <!-- By default, card title is shown at bottom of card, transparent background.
                On hover: v-card title expands upward from bottom, white background, revealing the summary. -->
              <h1>{{ item.title }}</h1>
              <v-container fluid class="preview__title-summary">
                <p>{{ item.summary }}</p>

              </v-container>
              <!-- <div class="preview__title-summary">
                <p>{{ item.summary }}</p>
              </div> -->
            </v-card-title>
            </transition>
            <v-container v-if="viewing">
              <slot name='content'>No content..</slot>
            </v-container>
          </v-card>
        <!-- </nuxt-link> -->
      </v-flex>
    </transition-group>
  </v-layout>
</v-container>
</template>

<script>
// import { VueDisqus } from "vue-disqus/VueDisqus";

export default {
  components: { 
    ContentView: () => import('@/components/ContentView/ContentView.vue'),
    },
  props: {
    "feed": Array,
    "itemHeight": String,
  },
  data() {
    return {
      transition: "fade",
      viewing: false,

    }
  },
  methods: {
    viewItem(itemId, itemSlug) {
      console.log(`CONTENT_FEED: Viewing item, emitting 'viewing' signal.`);
      this.$emit('viewing', itemId);
      this.viewing = true;
      console.log('ROUTER REPLACING');
      
      // this.$router.replace(`/projects/read/${itemSlug}`);

      // trying out manual pushstate to see if component will reload.. router.replace isn't working with nuxt for some reason.
      console.log(`This.route.Name: ${this.$route.name}`)
      console.log(this.$router.resolve({name: this.$route.name, query: {}}))

      const route = this.$router.resolve({name: this.$route.name, query: {}})
      console.log(`CONTENT_FEED-ROUTING: ${route.href}/read/${itemSlug}`);
      window.history.pushState({key: Date.now().toFixed(3)}, 'project', `/${route.href}/read/${itemSlug}`)
    }
  },
  created() {
    console.log(`CONTENT_FEED - Created`);
  },
  beforeDestroy() {
    console.log('CONTENT_FEED: Destroying');
  },
}
</script>

<style lang="scss" scoped>
.preview__group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // justify-item: space-around;
}
.preview__title {
  padding: 0;
  background-color: rgba(230, 230, 230, 0.5);
  overflow: hidden;
  & h1 {
    padding: 1rem;
  }
}
.preview__title-summary {
  background-color: white;
  padding: 0;
  height: 0;
  // width: 100%;
}
</style>
