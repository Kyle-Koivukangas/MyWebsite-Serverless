<template>
    <button class="toolbar_side-button" @click="animateButton">
        <div class="button_content">
            <svg class="menu-btn" width="50" height="50" viewBox="0 0 500 450" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> 
                <g>
                    <title>Hamburger Menu Button</title>
                    <rect id="svg_2" class="rect" height="50" ry="10" rx="10" width="400" y="75" x="50" stroke-width="5" stroke="#333333" fill="#333333"/>
                    <rect id="svg_3" class="rect" height="50" ry="10" rx="10" width="400" y="200" x="50" stroke-width="5" stroke="#333333" fill="#333333"/>
                    <rect id="svg_4" class="rect" height="50" ry="10" rx="10" width="400" y="325" x="50" stroke-width="5" stroke="#333333" fill="#333333"/>
                </g>
            
            </svg>
        </div>
    </button>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
    props: [],
    data() {
        return {
            minimized: false,
        }
    },
    methods: {
        animateButton() {
            const topRect = document.getElementById("svg_2")
            const botRect = document.getElementById("svg_4")

            if(!this.minimized) {
                console.log('state: active');
                TweenMax.to(topRect, .3,{y:121});
                TweenMax.to(botRect, .3,{y:-121});
                this.minimized = true;                
            } else {
            console.log("state: inactive")
                TweenMax.to(topRect, .3,{y:0});
                TweenMax.to(botRect, .3,{y:0});
                this.minimized = false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.toolbar_side-button {
    position: relative;
    top: 0;
    left: 0;
    padding: 5px;
    margin: 5px;
    outline: none;
    
    border-radius: 50%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    // background: transparent;

    &:hover {
        // May use background in future if I put ripple animation directive onto the sideNav button
        // background-color: rgba(50, 50, 50, .1)
    }
}
.button_content {
    padding: 0;
    margin: 0;
    height: 50px;
}

</style>
