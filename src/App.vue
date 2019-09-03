<template>
  <div id="app">
    
  
    <router-view />
  </div>
</template>

<style lang="scss">
@import "https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css";
@import "./assets/admin.scss";
// @import "~bootstrap/scss/bootstrap";


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 10px;
  margin-inline-end: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.background {
  position: absolute;
  background-image: url(../public/timj-EJ4qfFp1g8Q-unsplash.jpg);
  background-size: cover;
  background-color: black;
  background-repeat: no-repeat;
  opacity: 0.7;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}


</style>

<script>


export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
