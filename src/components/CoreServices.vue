<template>
  <section class="core-services">
    <div class="container">
      <div class="section-header">
        <h2>Our Core Services</h2>
        <p>We specialize in delivering end-to-end embedded systems solutions that meet the highest standards of quality
          and reliability.</p>
      </div>

      <div class="services-container">
        <Card v-for="(service, index) in services" :key="index" class="service-card">
          <template #header>
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
          </template>
          <template #title>
            <h3>{{ service.title }}</h3>
          </template>
          <template #content>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="(feature, fIndex) in service.features" :key="fIndex">
                {{ feature }}
              </li>
            </ul>
          </template>
          <template #footer>
            <Button label="Learn More" class="p-button-outlined p-button-sm" />
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoreServices',
  data() {
    return {
      services: [
        {
          title: "Embedded Systems Design",
          icon: "pi pi-cog",
          description: "We create innovative embedded systems tailored to meet your specific requirements and industry standards.",
          features: [
            "Hardware architecture design",
            "Schematic & PCB layout",
            "Component selection & optimization"
          ]
        },
        {
          title: "Embedded Systems Development",
          icon: "pi pi-code",
          description: "Our team develops robust embedded solutions that ensure high performance, reliability and efficiency.",
          features: [
            "Firmware & software development",
            "RTOS integration",
            "Driver development"
          ]
        },
        {
          title: "Embedded Systems Testing",
          icon: "pi pi-check-square",
          description: "We provide comprehensive testing services to ensure your embedded systems function flawlessly in all conditions.",
          features: [
            "Hardware testing & validation",
            "Software verification",
            "Performance analysis"
          ]
        }
      ]
    };
  }
}
</script>

<style scoped>
.core-services {
  padding: 5rem 0;
  background-color: white;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.services-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.service-card {
  border-radius: 10px !important;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #0073e6, #2a9df4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.service-icon i {
  font-size: 2.5rem;
  color: white;
}

:deep(.p-card-title) {
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #0073e6;
}

:deep(.p-card-content) {
  padding-bottom: 2rem;
}

.service-features {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.service-features li {
  margin-bottom: 0.5rem;
  position: relative;
}

:deep(.p-card-footer) {
  text-align: center;
  padding-top: 0;
}
</style>