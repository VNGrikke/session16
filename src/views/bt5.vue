<template>
  <div class="not-found-container">
    <div class="error-code">404</div>
    <div class="error-message">Not Found</div>
  </div>
</template>

<script setup>
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.not-found-container {
  text-align: center;
  color: #333;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  color: #ff6b6b;
  margin-bottom: 20px;
}

.error-message {
  font-size: 24px;
  font-weight: 500;
  color: #555;
}
</style>
