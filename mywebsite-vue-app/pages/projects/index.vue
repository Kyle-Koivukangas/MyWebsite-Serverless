<template>
  <div>
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
        <!-- <div v-if="apiFailed" v-for="project in projects" :key="project.title" class="project">
              <div :style="{backgroundImage: 'url(' + project.image + ')' }" class="project-banner">
                  <h2>{{ project.title }}</h2>
              </div>
              <div class="project-description">
                  <p><span v-html="project.description"></span></p>
              </div>
          </div> -->
      </div>
      <vue-footer/>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        projects(state) {
            return this.$store.getters.loadedProjects
        }
    },
    async fetch({store, params}) {
        await store.dispatch('fetchProjects')
    },

}
</script>

<style lang="scss" scoped>

</style>
