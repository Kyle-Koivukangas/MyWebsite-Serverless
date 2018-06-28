<template>
<div>
    <h1>Testing Firebase API</h1>

    <div>
        {{userList}}
    </div>
</div>
</template>

<script>
// import Firebase from 'firebase';
// import axios from 'axios';
import { mapActions } from 'vuex'
import firebaseApp from '@/plugins/firebase'

export default {
    data () {
        return {
            userList: {
                1: {
                email: 'email',
                name: 'name',
                passwordhash: 'passwordhash'
                },
                2: {
                email: 'email',
                name: 'name',
                passwordhash: 'passwordhash'
                },
            }
        }
    },
    created: function () {
        console.log("[CREATED HOOK] - loading userList...");
        // this.$nextTick(() => {
        //     this.$nuxt.$loading.start()

        //     setTimeout(() => this.$nuxt.$loading.finish(), 500)
        // })
        this.loadUserList().then((userList) => {
            console.log("[CREATED HOOK] - UserList Loaded.");
            console.log(userList);
            this.userList = userList;
        })
    },
    mounted () {
        this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
        })
    },
    methods: {
        
        ...mapActions([
        'loadUserList', 'updateUser'
        ]),
    },
}


</script>

<style>
</style>
