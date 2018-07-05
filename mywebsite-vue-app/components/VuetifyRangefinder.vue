<template>
    <!-- Just a little box that shows what the current screen size is. -->
    <v-container style="position: fixed; top: 50%; left: 50%; background-color: #eee; border: 1.5px solid #999; width: 155px; border-radius: 5px;">
        <div style="display: inline;">Rangefinder:</div>
        <v-container style="padding: 10px; display: inline; background-color: #cf0f0f;" xs hidden-sm-and-up>XS</v-container>
        <v-container style="padding: 10px; display: inline; background-color: #cf4c0f;" sm hidden-xs-only hidden-md-and-up>SM</v-container>
        <v-container style="padding: 10px; display: inline; background-color: #cf8c0f;" md hidden-sm-and-down hidden-lg-and-up>MD</v-container>
        <v-container style="padding: 10px; display: inline; background-color: #accf0f;" lg hidden-md-and-down hidden-xl-only>LG</v-container>
        <v-container style="padding: 10px; display: inline; background-color: #55cf0f;" lg hidden-lg-and-down>XL</v-container>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
