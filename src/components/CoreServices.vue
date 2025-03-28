<template>
  <section class="core-services">
    <h2>Our Core Services</h2>
    <div class="services-container">
      <div class="service">
        <h3>Embedded Systems Design</h3>
        <p>We specialize in designing innovative embedded systems tailored to meet your specific needs.</p>
      </div>
      <div class="service">
        <h3>Embedded Systems Development</h3>
        <p>Our team develops robust embedded systems that ensure high performance and reliability.</p>
      </div>
      <div class="service">
        <h3>Embedded Systems Testing</h3>
        <p>We provide comprehensive testing services to ensure your embedded systems function flawlessly.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoreServices',
}
</script>

<style scoped>
.core-services {
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.services-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.service {
  flex: 1 1 30%;
  margin: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 1.5rem;
}

h3 {
  margin-top: 0;
}
</style>