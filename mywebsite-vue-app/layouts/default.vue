<template>
    <v-app dark>
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import * as firebase from 'firebase'

export default {
    // NOTE: probably don't need to initialize firebase here, I can't see me needing to access firebase from
    //      from outside the store.
    created() {
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

<style>
</style>
