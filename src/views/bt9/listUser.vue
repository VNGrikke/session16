<template>
  <div class="user-list">
    <div class="user-card" v-for="user in users" :key="user.id">
      <p><strong>ID:</strong> {{ user.id }}</p>
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Address:</strong> {{ user.address }}</p>
      <button @click="userDetail(user.id)">Xem chi tiết</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const users = [
  { id: 1, name: "Vuong", email: "Vuong@gmail.com", address: "HCM" },
  { id: 2, name: "Ha", email: "Ha@gmail.com", address: "HN" },
  { id: 3, name: "Minh", email: "Minh@gmail.com", address: "Hanoi" },
  { id: 4, name: "Vu", email: "Vu@gmail.com", address: "Da Nang" },
];

const userDetail = (id) => {
  router.push(`/user/${id}`);
};
</script>

<style>
.user-list {
  margin: 50px auto;
}

.user-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.user-card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.user-card p {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
