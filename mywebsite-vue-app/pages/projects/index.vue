<template>
  <v-container justify-center>
    <v-layout row>
      <v-flex>
        <content-nav :content="content" :filters="filters" :navs="navs"/>
        <content-feed :feed="feed" @viewing="fetchPost($event)" item-height="20rem">
          <content-view :content="content" slot="content"/>
        </content-feed>
        <!-- <nuxt-child></nuxt-child> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    ContentFeed: () => import("@/components/ContentView/ContentFeed.vue"),
    ContentView: () => import("@/components/ContentView/ContentView.vue"),
    ContentNav: ()=> import("@/components/ContentView/ContentNav.vue"),
  },
  data() {
    return {
      transition: "fade",
      navs: 0,
      title: '',
        // Feed is from the initial API call, a light postList with: ID, title, author, thumbnail image and quick summary
      feed: [
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
      ],
      // When the user clicks the post, we make a second call to the API with the post's ID, and save the object as this.content.
      // The object will contain the full content of the requested post. (I may load this in the background for the first 5 posts or so...)
      content: {},
    }
  },
  computed: {
    // content() {
    //   return { title: this.title, labels: this.labels }
    // },
    filters() {
      let filters = {}
      if (this.project) filters.project = this.project
      if (this.author) filters.author = this.author
      return filters
    },
    projects() {
      return this.$store.state.loadedProjects;
    }
  },
  watch: {
    '$route.name' (to, from) {
      if (to !== from) this.navs++
    }
  },
  methods: {
    fetchPost(postId) {
      // Fetch specific post from store, if not there, get or wait for store to retrieve the post.
      setTimeout(() => {
        this.content = this.$store.getters.getProjectById(postId)[0];
        console.log(`PROJECTS-INDEX: @viewing received, fetching post ID`)
        console.log(this.$store.getters.getProjectById(postId)[0]);
      }, 500)
      
    }
  },
  async fetch({store, params}) {
    const vm = this;
    await store.dispatch("fetchProjects")
    .then((payload) => {
      setTimeout(() => {
        console.log(`PROJECTS-INDEX: Fetched Projects...`);
        console.log(store.state.loadedProjects);
      }, 500)
    })
  },

}
</script>

<style lang="scss">

</style>
