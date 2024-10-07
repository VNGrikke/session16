<template>
  <div>
    <h1>Trang chi tiết người dùng</h1>
    <p>ID: {{ user.id }}</p>
    <p>Họ và tên: {{ user.name }}</p>
    <p>Địa chỉ: {{ user.address }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const users = [
  { id: 1, name: "Vuong", email: "Vuong@gmail.com", address: "HCM" },
  { id: 2, name: "Ha", email: "Ha@gmail.com", address: "HN" },
  { id: 3, name: "Minh", email: "Minh@gmail.com", address: "Hanoi" },
  { id: 4, name: "Vu", email: "Vu@gmail.com", address: "Da Nang" },
];
const route = useRoute();
const userId = parseInt(route.params.id);

const user = users.find((user) => user.id === userId);
</script>

<style>
</style>
