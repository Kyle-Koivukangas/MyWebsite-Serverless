<template>
  <v-container justify-center>
    <v-layout row>
      <v-flex>
        <content-feed :feed="feed" @viewing="fetchPost($event)" item-height="300px">
          <content-view :content="content" slot="content"/>
        </content-feed>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContentFeed from '@/components/ContentView/ContentFeed.vue';
import ContentView from '@/components/ContentView/ContentView.vue';

export default {
  components: {
    ContentFeed,
    ContentView,
  },
  data() {
    return {
      transition: "fade",
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
          id: "1530159366592",
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
          id: "1530159366593",
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
          id: "1530159366594",
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
  methods: {
    fetchPost(postId) {
      // Fetch specific post from store, if not there, get or wait for store to retrieve the post.
      this.content = this.$store.getters.getProjectById(postId);
    }
  }

}
</script>

<style lang="scss">

</style>
