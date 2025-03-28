<template>
  <section class="hero-section">
    <div class="hero-background">
      <div class="circuit-pattern"></div>
    </div>
    <div class="hero-content container">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="title-part">IT-</span><span class="title-highlight">VATE</span>
          <span class="title-part">SOLUTIONS</span>
        </h1>
        <p class="hero-tagline">Innovating the Future of Embedded Systems</p>
        <p class="hero-description">
          We design, develop, and deliver cutting-edge embedded solutions
          for industries that demand excellence and reliability.
        </p>
        <div class="hero-buttons">
          <Button label="Explore Our Services" icon="pi pi-arrow-right" class="p-button-raised"
            @click="$router.push('/services')" />
          <Button label="View Our Projects" icon="pi pi-external-link" class="p-button-outlined"
            @click="$router.push('/projects')" />
        </div>
      </div>
      <div class="hero-image">
        <div class="image-container">
          <img src="@/assets/images/circuit-board.svg" alt="Embedded Systems" class="floating">
        </div>
      </div>
    </div>
    <div class="wave-bottom">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
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
  position: relative;
  padding: 8rem 0 6rem;
  background: linear-gradient(120deg, #004d99, #0073e6, #2a9df4);
  color: white;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}

.circuit-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.title-highlight {
  color: #50e3c2;
  font-weight: 900;
}

.hero-tagline {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  opacity: 0.9;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
}

.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }

  50% {
    transform: translatey(-20px);
  }

  100% {
    transform: translatey(0px);
  }
}

.wave-bottom {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 3;
}

@media (max-width: 992px) {
  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-text {
    margin-top: 3rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-title {
    font-size: 3rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-tagline {
    font-size: 1.25rem;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }
}
</style>