<template>
  <!-- <div class="contact">
      <div class="contact-links">
          <ul>
              <li><a href="mailto:kyle.koivukangas@gmail.com" ><icon class="ico" name="envelope" scale="1" label="Email"></icon> Email</a></li>
              <li><a target="_blank" href="https://api.whatsapp.com/send?phone=17785354254" ><icon class="ico" name="whatsapp" scale="1" label="whatsapp"></icon> Whatsapp</a></li>
              <li><a target="_blank" href="https://github.com/Kyle-Koivukangas" ><icon class="ico" name="github" scale="1" label="github"></icon> Github</a></li>
              <li><a href="" ><icon class="ico" name="stack-overflow" scale="1" label="stack overflow"></icon> Stack Overflow</a></li>
              <li><a target="_blank" href="https://www.linkedin.com/in/kyle-koivukangas" ><icon class="ico" name="linkedin-square" scale="1" label="linkedin"></icon> LinkedIn</a></li>
          </ul>
      </div>
  </div> -->

  <v-container>
    <v-layout column align-center justify-center>
      <v-flex style="width: 100%" justify-center>
        <v-container class="contact-links">
          <ul>
            <li><a href="mailto:kyle.koivukangas@gmail.com" ><icon class="ico" name="envelope" scale="1" label="Email"></icon> Email</a></li>
            <li><a target="_blank" href="https://api.whatsapp.com/send?phone=17785354254" ><icon class="ico" name="whatsapp" scale="1" label="whatsapp"></icon> Whatsapp</a></li>
            <li><a target="_blank" href="https://github.com/Kyle-Koivukangas" ><icon class="ico" name="github" scale="1" label="github"></icon> Github</a></li>
            <li><a target="_blank" href="" ><icon class="ico" name="stack-overflow" scale="1" label="stack overflow"></icon> Stack Overflow</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/kyle-koivukangas" ><icon class="ico" name="linkedin-square" scale="1" label="linkedin"></icon> LinkedIn</a></li>
          </ul>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import "vue-awesome/icons/envelope";
import "vue-awesome/icons/github";
import "vue-awesome/icons/linkedin-square";
import "vue-awesome/icons/stack-overflow";
import "vue-awesome/icons/whatsapp";

export default {};
</script>

<style lang="scss" scoped>
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

$contentwidth: 900px;
.contact {
  width: $contentwidth;
  margin: 10px auto;
}
.hr {
  background-color: #aaa;
  opacity: 0.6;
  height: 2px;
  width: 100%;
  border-radius: 3px;
}
.contact-links {
  //   display: grid;
  width: 100%;
  margin: auto;
  & ul {
    columns: 3;
    margin: 0 auto;
    text-align: center;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  & li {
    display: inline-block;
    vertical-align: top;
    min-width: 30%;
    min-height: 30px;
    margin: 5px;

    & a {
      color: #333;
      text-decoration: none;

      display: block;

      &:hover {
        color: darken(#333, 20%);
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
      }
      & .ico:hover {
        -webkit-animation: pulse 1s;
        animation: pulse 1s;
      }
    }
  }
}
.ico {
  margin: auto;
  display: inline-block;
  & :hover {
    // -webkit-animation: fade 1s;
    // animation: fade 1s;
    -webkit-animation: pulse 1s;
    animation: pulse 1s;
  }
}

.sm-link-width {
  min-width: 90px;
}
</style>
