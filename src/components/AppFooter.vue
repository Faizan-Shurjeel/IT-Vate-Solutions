<template>
  <footer class="app-footer">
    <div class="wave-top">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f8f9fa" fill-opacity="1"
          d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,170.7C672,181,768,235,864,234.7C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
        </path>
      </svg>
    </div>

    <div class="footer-main">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <img src="@/assets/logo.svg" alt="IT-Vate Solutions Logo" class="footer-logo" />
            <p>Innovating the Future of Embedded Systems</p>
            <div class="social-links">
              <a href="#" class="social-icon"><i class="pi pi-linkedin"></i></a>
              <a href="#" class="social-icon"><i class="pi pi-twitter"></i></a>
              <a href="#" class="social-icon"><i class="pi pi-github"></i></a>
              <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
            </div>
          </div>

          <div class="footer-links">
            <div class="links-column">
              <h3>Quick Links</h3>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/services">Services</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/testimonials">Testimonials</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>

            <div class="links-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Embedded Design</a></li>
                <li><a href="#">Firmware Development</a></li>
                <li><a href="#">IoT Solutions</a></li>
                <li><a href="#">PCB Design</a></li>
                <li><a href="#">System Integration</a></li>
              </ul>
            </div>

            <div class="links-column">
              <h3>Contact Us</h3>
              <ul class="contact-info">
                <li><i class="pi pi-map-marker"></i> 123 Tech Avenue, CA 94123</li>
                <li><i class="pi pi-envelope"></i> info@it-vate-solutions.com</li>
                <li><i class="pi pi-phone"></i> +1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>&copy; {{ currentYear }} IT-Vate Solutions. All rights reserved.</p>
        <p class="footer-legal">
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a>
        </p>
      </div>
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
  position: relative;
  margin-top: 2rem;
}

.wave-top {
  position: relative;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.footer-main {
  background-color: #004080;
  color: white;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  height: 60px;
  margin-bottom: 1rem;
  filter: brightness(0) invert(1);
}

.footer-brand p {
  margin-bottom: 1.5rem;
  opacity: 0.8;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #50e3c2;
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.links-column h3 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
}

.links-column h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 2px;
  background-color: #50e3c2;
}

.links-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-column ul li {
  margin-bottom: 0.75rem;
}

.links-column a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.links-column a:hover {
  color: #50e3c2;
}

.contact-info li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-info i {
  margin-right: 10px;
  color: #50e3c2;
}

.footer-bottom {
  background-color: #003366;
  padding: 1.5rem 0;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-bottom p {
  margin: 0;
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #50e3c2;
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-brand {
    text-align: center;
    align-items: center;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom .container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>