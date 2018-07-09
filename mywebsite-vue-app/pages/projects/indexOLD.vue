<template>
  <!-- <div>
        <div class="banner">
            <div class="header-container">
                <h1>Projects</h1>
            </div>
        </div>

        <div class="content">
            <div class="hr"></div>
            <div v-for="project in projects" :key="project.title" class="project">
                <div :style="{backgroundImage: 'url(' + project.image + ')' }" class="project-banner">
                    <h2>{{ project.title }}</h2>
                </div>
                <div class="project-description">
                    <p><span v-html="project.summary"></span></p>
                </div>
            </div>
            <div v-if="apiFailed" v-for="project in projects" :key="project.title" class="project">
                <div :style="{backgroundImage: 'url(' + project.image + ')' }" class="project-banner">
                    <h2>{{ project.title }}</h2>
                </div> 
                <div class="project-description">
                    <p><span v-html="project.description"></span></p>
                </div>
            </div>
        </div> 
        <hr class="my-4"/>
        <contact-links></contact-links>
  </div> -->





  <v-container>
    <v-layout row wrap justify-center >
      <v-flex xs12 sm6 text-xs-center text-sm-right>
        <v-btn large router to="/projects">Explore Projects</v-btn>
      </v-flex>
      <v-flex xs12 sm6 text-xs-center text-sm-left>
        <v-btn large @click="addTestProject()">Add Project</v-btn>
      </v-flex>
      <v-flex sm12 md6 ma-3 text-xs-center v-for="project in projects" :key="project.title">
        <v-card align-center justify-center>
          <v-card-media height="200px" :src="project.image">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{project.title}}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>

          <!-- NOTE: Plan is to have the image take up entire card and on hover the summary and project title will
                      transition up from the bottom (like a div rising from bottom), image will slowly zoom in on hover, too.
          
           -->
          <v-card-title>
            <div>
              <span class="grey--text">Summary:</span><br>
              <span>{{project.summary}}</span>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="light-blue darken-1">Share</v-btn>
            <v-btn flat color="light-blue darken-1">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  async fetch({store, params}) {
    await store.dispatch('fetchProjects')
  
  },
  data() {
    return {
      projects: [],
      projectCount: 0
    }
  },
  computed: {
    projects(state) {
      return this.$store.getters.loadedProjects
    }
  },
  methods: {
    addTestProject() {
      this.projectCount++;
      this.projects.push(
        {
        title: `Test Project ${this.projectCount}`,
        summary: `Test Project ${this.projectCount} summary, this is a summary of the test project! BLAH BLAH BLAH BLAH BLAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHH!`,
        date: `${this.projectCount}-02-18—00:11:22`,
        content: "THIS IS THE CONTENT! SHOULD BE MUCH LONGER!",
        image: "https://dummyimage.com/600x400/000/fff"
        })
    },
  }

}
</script>

<style lang="scss" scoped>
</style>
