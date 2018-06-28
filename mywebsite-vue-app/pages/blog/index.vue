<template>
    <div>
        <h1>Blog Page</h1>
        <div>{{ latestBlogPosts }}</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            latestBlogPosts: null,
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
