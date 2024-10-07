<template>
  <div class="employee-detail">
    <h2>Chi tiết nhân viên {{ $route.params.id }}</h2>
    <nav>
      <router-link :to="'/employees/' + $route.params.id + '/profile'"
        >Thông tin cá nhân</router-link
      >
      <router-link :to="'/employees/' + $route.params.id + '/projects'"
        >Dự án</router-link
      >
      <router-link :to="'/employees/' + $route.params.id + '/contact'"
        >Liên hệ</router-link
      >
    </nav>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  margin-top: 20px;
}
router-link {
  margin-right: 15px;
}
</style>
