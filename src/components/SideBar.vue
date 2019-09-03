<template>
  <nav class="site-header">
    <div class="logo">
      <h1>Website</h1>
    </div>
    <div class="menu">
      <ul>
        <li v-for="(link, index) in menuItems[0]['navLinks']" :key="index" :id="link.id" v-on:click="changeSection">
          <a>{{ link.text }}
          </a>
          <i :class="link.icon" />
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["menuItems", "linkColor"],
  methods:{
    changeSection: function(){
      this.$emit('changeSection', '');
    }
  }
};
</script>


<style scoped lang="scss">
*{
    margin: 0; padding:0; box-sizing: border-box;
    display: f
}
.site-header {
  width: 100%;
  height: 100vh;
  background: #ffffff;
  background: linear-gradient(1deg, #f5f7fa, #c3cfe2);
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
}

nav {
  position: relative;
  width: 100%;
  height: 100px;
  // background-color:  red;
  display: flex;
  color: #434343;
  .logo{
    width: 50%;
    height: 100px;
    h1{
      line-height: 100px;
      padding-left: 50px;
    }
  }
}

.menu{
  width: 50%; height: 100px;
  ul{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:  center;
    li{
      list-style: none;
      font-size: 23px;
      font-weight: bold;
      cursor: pointer;
      opacity: 0.7;
    }
    li:hover{
      opacity: 1;
    }
  }
}


</style>