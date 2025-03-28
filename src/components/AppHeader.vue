<template>
  <header class="app-header" :class="{ 'scrolled': scrolled }">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.svg" alt="IT-Vate Solutions Logo" />
        </router-link>
      </div>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="navigation" :class="{ 'active': menuOpen }">
        <ul>
          <li v-for="(item, index) in menuItems" :key="index">
            <router-link :to="item.path" @click="menuOpen = false" :class="{ 'active': isActive(item.path) }">
              {{ item.title }}
            </router-link>
          </li>
          <li class="contact-button">
            <Button label="Contact Us" class="p-button-sm" @click="$router.push('/contact'); menuOpen = false" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      menuItems: [
        { title: 'Home', path: '/' },
        { title: 'Services', path: '/services' },
        { title: 'Projects', path: '/projects' },
        { title: 'Testimonials', path: '/testimonials' },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    isActive(path) {
      // Exact match for home, prefix match for other pages
      if (path === '/') {
        return this.$route.path === '/';
      }
      return this.$route.path.startsWith(path);
    }
  }
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.app-header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.scrolled .logo img {
  height: 40px;
}

.scrolled .navigation a {
  color: #333;
}

.scrolled .navigation a.active {
  color: #0073e6;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
  transition: all 0.3s ease;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
}

.navigation a {
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.navigation a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #50e3c2;
  transition: width 0.3s ease;
}

.navigation a:hover::after,
.navigation a.active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 102;
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  margin: 5px 0;
  transition: all 0.3s ease;
}

.scrolled .menu-toggle span {
  background: #333;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navigation {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: white;
    padding: 80px 20px 20px;
    transition: right 0.3s ease;
    z-index: 101;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  .navigation.active {
    right: 0;
  }

  .navigation ul {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .navigation a {
    color: #333;
    font-size: 1.2rem;
    width: 100%;
    display: block;
    padding: 10px 0;
  }

  .contact-button {
    margin-top: 1rem;
    width: 100%;
  }

  .contact-button button {
    width: 100%;
  }
}
</style>