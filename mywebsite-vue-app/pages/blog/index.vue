<template>
    <div>
        <h1>Blog Page</h1>
        <!-- <div>{{ latestBlogPosts }}</div> -->
        <ol>
            <li v-for="post in latestBlogPosts" :key="post.id">
                {{ post.title }}
            </li>
        </ol>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            // latestBlogPosts: null,
        }
    },
    computed: {
        blogPosts() {
            return this.$store.getters.loadedBlogPosts
        },
        latestBlogPosts() {
            return this.$store.getters.latestBlogPosts
        }
    },
    created: function () {
        console.log("[CREATED HOOK] - loading latestBlogPosts...");
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start()

        //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
        // })
        this.loadLatestBlogPosts().then((latestBlogPosts) => {
            console.log("[CREATED HOOK] - LatestBlogPosts Loaded.");
            console.log(latestBlogPosts);
            this.latestBlogPosts = latestBlogPosts;
            
        })
    },
    methods: {
        
        ...mapActions([
        'loadLatestBlogPosts'
        ]),
    },
}
</script>

<style lang="scss" scoped>
</style>
