<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <!-- <transition name="sidebarLogoFade">
      <svg-icon icon-class="shoujidiannao" class-name="sidebar-logo" />
      <h1 class="sidebar-title">{{ title }}</h1>
    </transition> -->
    <svg-icon icon-class="shoujidiannao" class-name="sidebar-logo" />
    <span class="sidebar-title">관리자 인터페이스</span>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      title: 'Vue Admin Template',
      logo: '../../../icons/svg/shoujidiannao.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #23262e;
  padding-left: 12px;
  // text-align: center;
  // overflow: hidden;

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
.sidebar-logo {
  margin-top: 8px;
  width: 32px !important;
  height: 32px !important;

  color: #fff;
}
.sidebar-title {
  display: inline-block;
  margin: 0;
  color: #fff;
  font-weight: 600;

  font-size: 14px;
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  vertical-align: top;
}
</style>
