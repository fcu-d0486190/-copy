<template>
  <div class="home">
    <div class="background"></div>
    <sidebar v-bind:menuItems="menuItems" v-bind:sectionPage="sectionPage" v-on:changeSection="updatachange($event)"/>
    <section v-show="sectionPage === '1'">
      <div class="leftside">
        <img src="../assets/undraw_investing_7u74.svg" />
      </div>
      <div class="rightside">
        <h1>Our Models Website</h1>
        <p>歡迎使用我們的產品，本產品用愛在發電的</p>
        <button>Welcome</button>
      </div>
    </section>
    <section v-show="sectionPage === '2'">
      <login v-on:register="register($event)"/>
    </section>
    <section v-show="sectionPage === '3'">
      <register />
    </section>
  </div>
</template>

<script>
import sidebar from "../components/SideBar.vue";
import login from "../components/Login.vue";
import register from "../components/Register.vue";

export default {
  name: "home",
  data() {
    return {
      sectionPage: '1'
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
          {
            navLinks: [
              {
                text: "介紹",
                path: "/introduction",
                icon: "ion-ios-alert",
                id: "1"
              },
              {
                text: "登入",
                path: "/Login",
                icon: "ion-ios-contact",
                id: "2"
              },
              {
                text: "註冊",
                path: "/Register",
                icon: "ion-ios-person-add",
                id: "3"
              }
            ]
          }
        ];
      return menuItems;
    }
  },
  methods:{
    updatachange(){
      console.log(this.sectionPage);
      if (event.path[1].id != ''){
        this.sectionPage = event.path[1].id;
      }
    },
    register(){
      this.sectionPage = "3";
    }
  },
  components: {
    sidebar,
    login,
    register
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  position: absolute;
  top: 20%;
  width: 100%;
  height: auto;
  display: flex;
  .register{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leftside {
    width: 45%;
    height: auto;
    overflow: hidden;
    margin-top: 20px;
  }

  .leftside img {
    width: 600px;
    height: 500px;
  }

  .rightside {
    width: 55%;
    height: 300px;
    color: white;
    text-align: center;
    margin-top: 80px;
    padding: 40px;
    h1 {
      text-align: center;
      color: #ffffff;
      font-size: 50px;
      font-weight: 900;
    }
    p {
      color: #2a5298;
      font-size: 1.1rem;
      padding: 30px 0;
    }
    button {
      font-size: 17px;
      font-weight: 600;
      color: #1e4d92;
      text-transform: uppercase;
      
      border-radius: 4px !important;
      overflow: hidden;
      padding: 20px 35px;
      button:hover {
        background: linear-gradient(57deg, #1e4d92, #00c6a7);
      }
    }
  }
}
</style>
