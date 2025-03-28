<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} IT-Vate Solutions. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.app-footer {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content p {
  margin: 0;
}

.footer-content nav ul {
  list-style: none;
  padding: 0;
}

.footer-content nav ul li {
  display: inline;
  margin: 0 15px;
}

.footer-content nav ul li a {
  text-decoration: none;
  color: #007bff;
}

.footer-content nav ul li a:hover {
  text-decoration: underline;
}
</style>