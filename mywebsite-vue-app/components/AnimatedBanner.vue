<template>
    <v-container class="outer">
        <!-- <div class="spacer">
        </div> -->

        
        <div :color="'light-blue darken-1'" dark class="inner main-banner justify-center align-center text-center" ripple>
            
            <!-- <div class="header-container"> -->
            <!-- <v-card-title primary-title><h1>Hi, I'm Kyle.<br>I design &amp; build web apps.</h1></v-card-title> -->
            <v-container id="outer" text-center justify-center align-center>
                <h1 class="motionblur" id="mb" >Hi, I'm Kyle.<br>I design &amp; build web apps.</h1>
            </v-container>
            <!-- </div> -->
        </div>
    </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.outer {
    // background-color: grey;
    position: relative;
    height: 350px;
    width: 100%;
    margin: auto;
    padding: 25px 0;
    
}
.inner {
    height: 650px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 30;
    margin: auto;
    padding: auto;
    
    -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);
}
.spacer {
    height: 320px;
    width: 800px;
    align-content: center;
    margin: auto;
}
.main-banner {
    background-color: #00aeff;
    color: white;
    height: 300px;
    margin: 30px auto;
    border-radius: 2px;
    display: flex;
    justify-content: left;
    align-items: center;
    overflow: hidden;
    //   background-image: url("../assets/webdevbanner.jpg");
    //   background-image: url("../assets/stocklaptop.jpg");
    // background-size: 1920px 1080px;
    // background-position-y: -250px;
}


#outer {
    position: relative;
    margin: 10px;
    overflow: hidden;
    height: 250px;
    width: 100%;

}


#mb {
    position: absolute;
    left: 50px;
    top: 75px;
    overflow: hidden;
    font-size: 2em;
    font-weight: bold;
    padding: 0.2em 1em;
    color: #fff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0);
    -webkit-animation: motionblur 1s ease-out;
    animation: motionblur 1s ease-out;
    white-space: normal;
    
}

@keyframes grow {
    0% {
    }
    100% {
    }
}

@-webkit-keyframes motionblur {
    0% {
        left: 4000px;
        text-shadow: 5px 0 5px rgba(255, 255, 255, 0);
        white-space: nowrap;
        // box-shadow: 0 0 0 rgba(200,0,0,0);
    }
    5% {
        left: 4000px;
        -webkit-transform-origin: 0 0;
        -webkit-transform: scaleX(0.85);
    }
    25% {
        left: 800px;
        text-shadow: -5px 0 5px rgba(255, 255, 255, 1);
        // box-shadow: -15px 0 10px -5px rgba(200,0,0,0.5);
        -webkit-transform: scaleX(1.1) skewX(-4deg);
    }
    50% {
        left: 250px;
        text-shadow: 0 0 0 rgba(255, 255, 255, 0);
        // box-shadow: 0 0 0 rgba(200,0,0,0);
        -webkit-transform: scaleX(1) skewX(0deg);
    }
    55% {
        left: 250px;
        -webkit-transform-origin: 100% 0;
        -webkit-transform: scaleX(0.85);
    }
    75% {
        text-shadow: 5px 0 5px rgba(255, 255, 255, 1);
        // box-shadow: 15px 0 10px -5px rgba(200,0,0,0.5);
        -webkit-transform: scaleX(1.1) skewX(4deg);
        white-space: nowrap;
    }
    100% {
        left: 0px;
        text-shadow: 0 0 0 rgba(255, 255, 255, 0);
        // box-shadow: 0 0 0 rgba(200,0,0,0);
        -webkit-transform: scaleX(1) skewX(0deg);
        white-space: normal;
        
    }
}

@keyframes motionblur {
    0% {
        left: 4000px;
        text-shadow: 5px 0 5px rgb(255, 255, 255);
        white-space: nowrap;
        // box-shadow: 0 0 0 rgba(200,0,0,0);
    }
    30% {
        left: 800px;
        text-shadow: 5px 0 5px rgba(255, 255, 255, 1);
    }
    60% {
        text-shadow: 5px 0 5px rgba(255, 255, 255, 0.8);
    }
    90% {
        left: 60px;
        text-shadow: 5px 0 5px rgba(255, 255, 255, 0.3);
        transform: scaleX(1) skewX(-4deg);
        white-space: nowrap;
    }
    100% {
        left: 50px;
        text-shadow: 0 0 0 rgba(255, 255, 255, 0);
        // box-shadow: 0 0 0 rgba(200,0,0,0);
        transform: scaleX(1) skewX(0deg);
        white-space: normal;
    }
}
</style>
