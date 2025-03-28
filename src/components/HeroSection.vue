<template>
  <section class="hero-section">
    <div class="hero-content">
      <img src="@/assets/logo.svg" alt="IT-Vate Solutions Logo" class="hero-logo" />
      <h1 class="hero-title">IT-Vate Solutions</h1>
      <p class="hero-tagline">Innovating Embedded Systems Engineering</p>
      <router-link to="/services" class="cta-button">Explore Our Services</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #007bff, #6610f2);
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 600px;
}

.hero-logo {
  width: 150px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 3rem;
  margin: 0;
}

.hero-tagline {
  font-size: 1.5rem;
  margin: 10px 0 20px;
}

.cta-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #218838;
}
</style>