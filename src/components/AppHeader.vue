<template>
  <header class="app-header">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="IT-Vate Solutions Logo" />
    </div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/testimonials">Testimonials</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 50px;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.navigation a:hover {
  color: #007bff;
}
</style>