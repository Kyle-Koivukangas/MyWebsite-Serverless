<template>
<v-container>
  <v-layout row wrap justify-center>
    <transition-group 
      :name="transition" 
      class="content__group" 
      :css="true"
      >
      <v-flex v-for="item in feed" class="preview" :key="item.id" justify-center wrap sm12 md5 ma-3>
        <!-- <nuxt-link :to="`/projects/read/${item.slug}`" @click.native="viewItem(item.id)"> -->
          <v-card flat hover :img="item.image" @click.native="viewItem(item)">
            <v-card-media :height="itemHeight" class="preview__figure">

            </v-card-media>

            <!-- Need to find a way to make nuxt transitions work with routing WITHOUT reseting state and reloading component... -->
            <transition mode="out-in" name="v--fade">
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
import { TweenMax } from 'gsap';

export default {
  components: { 
    // ContentView: () => import('@/components/ContentView/ContentView.vue'),
    },
  props: {
    "itemHeight": String,
    "filters": {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      items: [],
      transition: "preview-appear",
      // viewing: false,

    }
  },
  computed: {
    viewing() { return this.filters.post },
    feed() {
      // const filterBy = {
      //   slug: (filter, { id }) => filter === id,
      //   author: (filter, { author }) => filter === this.kebabify(author)
      // }
      // Feed function filters item list through multiple queries.
      const search = function(item) {
        return Object.keys(this).every((key) => item[key] === this[key]);
      }

      if (!Object.keys(this.filters).length) return this.items

      return this.items.filter(search, this.filters)

      // return this.items.filter(item => {
      //   return Object.keys(this.filters).every(filter => {
      //     return filterBy[filter](this.filters[filter], item)
      //   })
      // })
    }
  },
  methods: {
    viewItem(item) {
      console.log(`CONTENT_FEED: Viewing item, emitting 'viewing' signal.`);
      this.$emit('viewing', item);
      // this.viewing = true;
      console.log('ROUTER PUSHING');
      
      const route = this.$nuxt.$router.resolve({name: this.$route.name, query: {}})
      this.$nuxt.$router.push(`${route.href}/read/${item.slug}`);

      // // trying out manual pushstate to see if component will reload.. router.replace isn't working with nuxt for some reason.
      // console.log(`This.route.Name: ${this.$route.name}`)
      // console.log(this.$router.resolve({name: this.$route.name, query: {}}))

      // const route = this.$router.resolve({name: this.$route.name, query: {}})
      // console.log(`CONTENT_FEED-ROUTING: ${route.href}/read/${itemSlug}`);
      // // window.history.pushState({key: Date.now().toFixed(3)}, 'project', `/${route.href}/read/${itemSlug}`)
    },
    cascadeInItems(items) {
      // populate the item list in a cascade/staggered animation.
      let interval
      const stack = () => {
        this.items.push(items.shift())

        if (!items.length) {
          this.transition = 'preview'
          clearInterval(interval)
        }
      }

      interval = setInterval(stack, 125)
    },
    enter: function(el, done) {
      //Enter animation function
      TweenMax.to(el, .3, {
        y: 0,
        onComplete: done()
      })
    },
    leave: function(el, done) {
      //Leave animation function
      TweenMax.to(el, .3, {
        y: -500,
        onComplete: done()
      })
    },

  },
  beforeMount() {
    // Fetch data from API, mock test !!!ATTENTION!!! REDO THIS PART TO PROPERLY PULL FROM STORE !!!ATTENTION!!!
    const vm = this;
    setTimeout(() => {
      const items = [
        {
          id: "1530159366591",
          title: "Project Title 1",
          slug: "test-slug-1",
          author: "Kyle Koivukangas",
          date: "2018-06-27T21:15:39-07:00",
          status: "published",
          summary: "This is a summary of the project: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.",
          image: "https://placeimg.com/640/480/nature"
        },
        {
          id: "1530159567668",
          title: "Project Title 2",
          slug: "test-slug-2",
          author: "Kyle Koivukangas",
          date: "2018-06-27T21:15:39-08:00",
          status: "published",
          summary: "This is a summary of the project: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.",
          image: "https://placeimg.com/640/480/nature?t=1531124396132"
        },
        {
          id: "1530146288635",
          title: "Project Title 3",
          slug: "test-slug-3",
          author: "Kyle Koivukangas",
          date: "2018-06-27T21:15:39-09:00",
          status: "draft",
          summary: "This is a summary of the project: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.",
          image: "https://placeimg.com/640/480/nature?t=1531124405382"
        },
        {
          id: "1530240892031",
          title: "Project Title 4",
          slug: "test-slug-4",
          author: "Kyle Koivukangas",
          date: "2018-06-27T21:15:39-10:00",
          status: "published",
          summary: "This is a summary of the project: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.\nLorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio obcaecati officia, debitis sapiente odit inventore esse tenetur voluptates ab corporis soluta aut nobis atque exercitationem perspiciatis tempore aspernatur labore.",
          image: "https://placeimg.com/640/480/nature?t=1531124413719"
        },
      ]
      vm.cascadeInItems(items);
    }, 400)
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
$easings: (
  default: cubic-bezier(0.4, 0.25, 0.3, 1),
  in: cubic-bezier(0.6, 0.1, 0.8, 0.7),
  out: cubic-bezier(0.2, 0.3, 0.4, 0.9),
  in-out: cubic-bezier(0.5, 0.15, 0.4, 1),
  bounce: cubic-bezier(0.4, 0.25, 0.3, 1.4)
);
@function cb($fn: default) {
  @return map-get($easings, $fn);
}

.content {
  position: relative;

  &__group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // justify-item: space-around;
    position: relative;
  }
}

.fade-move {
  transition: transform 1s;
}
.feed-enter-active,
.feed-leave-active {
  position: absolute !important;
  z-index: -1;
  transition: all 0.5s;
}
.feed-enter, .feed-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate3d(0rem, 0rem, 0rem);
  &:nth-child(2) {
    transform: translate3d(-35rem, 0rem, -25rem);
  }
  &:nth-child(3) {
    transform: translate3d(0rem, -30rem, -20rem);
  }
  &:nth-child(4) {
    transform: translate3d(-30rem, -25rem, -20rem);
  }
}

// PREVIEW STUFF

.preview {
  position: relative;
  margin: 1.25rem 1.25rem 5rem;
  z-index: 0;

  @media (--tablet) {
    width: calc(50% - 2.5rem);
    margin: 1.25rem 1.25rem 2.5rem;
  }

  @media (--laptop) {
    width: calc(100% / 3 - 2.5rem);
  }

  @media (--desktop) {
    width: calc(100% / 3 - 5rem);
    margin: 2.5rem;
  }

  &__group {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    // justify-item: space-around;
    position: relative;
  }

  &__title {
    padding: 0;
    background-color: rgba(230, 230, 230, 0.5);
    overflow: hidden;
    & h1 {
      padding: 1rem;
    }
  }

  &__title-summary {
    background-color: white;
    padding: 0;
    height: 0;
    // width: 100%;
  }

  &-move {
    transition: all 550ms cb();
  }
  &-enter-active {
    transition: all 325ms cb(out) 175ms;
  }
  &-appear-enter-active {
    transition: all 275ms cb(out) 200ms;
  }

  &-leave-active {
    transition: all 225ms cb(in);
    position: absolute;
    z-index: -1;
  }

  &-enter,
  &-leave-to,
  &-appear-enter {
    opacity: 0;
    transform: translate3d(0, -2.5rem, 0);
  }

  .v {
    &--fade {
    &-enter-active,
    &-leave-active { transition: all 275ms cb() }

    &-enter,
    &-leave-to { opacity: 0 }

    &-leave,
    &-enter-to { opacity: 1 }
  }

  &--mask {
    &-enter-active,
    &-leave-active { transition: all 150ms cb() 500ms }

    &-enter,
    &-leave-to { opacity: 0 }

    &-leave,
    &-enter-to { opacity: 1 }
  }
}
}
</style>
