<template>
  <div class="employee-list">
    <h1>Danh sách nhân viên</h1>
    <ul>
      <li v-for="employee in employees" :key="employee.id">
        <router-link :to="'/employees/' + employee.id">
          {{ employee.name }} - {{ employee.position }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const employees = [
  { id: 1, name: "Nguyen Van A", position: "Developer" },
  { id: 2, name: "Tran Thi B", position: "Designer" },
  { id: 3, name: "Le Van C", position: "Project Manager" },
  { id: 4, name: "Hoang D", position: "QA Engineer" },
];
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
