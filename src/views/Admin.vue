<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a href="#" id="toggle-sidebar" @click="closemenu" class="show-sidebar btn btn-sm btn-dark">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <div id="close-sidebar" @click="closemenu">
              <i class="fas fa-bars"></i>
            </div>
            <a href="#">webSide</a>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="../assets/boy.svg" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-name">
                王
                <strong>小明</strong>
              </span>
              <span class="user-role">Administrator</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
              </span>
            </div>
          </div>

          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>
              <li>
                <router-link to="/admin/userprofile">
                  <i class="fa fa-id-card"></i>
                  <span class="menu-text">個人資訊</span>
                </router-link>
              </li>
              <li class="sidebar-dropdown" @click="dropdown">
                <router-link to="/admin/models">
                  <i class="fa fa-tachometer-alt"></i>
                  <span class="menu-text">模型管理</span>
                </router-link>
                <div class="sidebar-submenu">
                  <ul>
                    <li>
                      <router-link to="/admin/introduction">模型介紹</router-link>
                    </li>
                    <li>
                      <router-link to="/admin/createmodel">模型建立</router-link>
                    </li>
                    <li>
                      <router-link to="/admin/prediction">模型預測</router-link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/admin/dataset">
                  <i class="fa fa-folder"></i>
                  <span class="menu-text">資料集管理</span>
                </router-link>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  components: {},
  methods: {
    closemenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    dropdown(){
      $(".sidebar-submenu").slideUp(200);
      if ($(".sidebar-dropdown > a").parent().hasClass("active")) {
          $(".sidebar-dropdown").removeClass("active");
          $(".sidebar-dropdown > a").parent().removeClass("active");
      } else {
          $(".sidebar-dropdown").removeClass("active");
          $(".sidebar-dropdown > a").next(".sidebar-submenu").slideDown(200);
          $(".sidebar-dropdown > a").parent().addClass("active");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.background {
  position: absolute;
  background-image: url("~/public/timj-EJ4qfFp1g8Q-unsplash.jpg");
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