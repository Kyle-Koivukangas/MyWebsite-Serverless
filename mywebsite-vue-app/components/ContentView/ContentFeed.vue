<template>
<v-container>
  <v-layout row wrap justify-center>
    <transition-group name="fade" class="preview__group" >
      <v-flex v-for="content in feed" class="preview" :key="content.id" justify-center wrap sm12 md5 ma-3>
        <nuxt-link :to="`/projects/read/${content.slug}`" @click="viewItem(content.id)">
          <v-card flat hover :img="content.image" >
            <v-card-media :height="itemHeight" >

            </v-card-media>

            <!-- Need to find a way to make nuxt transitions work with routing WITHOUT reseting state and reloading component... -->
            <transition mode="out-in" name="fade">
            <v-card-title v-if="!viewing" class="preview__title">
              <!-- By default, card title is shown at bottom of card, transparent background.
                On hover: v-card title expands upward from bottom, white background, revealing the summary. -->
              <h1>{{ content.title }}</h1>
              <v-container fluid class="preview__title-summary">
                <p>{{ content.summary }}</p>

              </v-container>
              <!-- <div class="preview__title-summary">
                <p>{{ content.summary }}</p>
              </div> -->
            </v-card-title>
            </transition>
            <v-container v-if="viewing">
              <slot name='content'>No content...</slot>
            </v-container>
          </v-card>
        </nuxt-link>
      </v-flex>
    </transition-group>
  </v-layout>
</v-container>
</template>

<script>
import ContentView from '@/components/ContentView/ContentView.vue';

export default {
  components: { ContentView },
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
    viewItem(itemId) {
      this.$emit('viewing', itemId);
      this.viewing = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.preview__group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-around;
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
