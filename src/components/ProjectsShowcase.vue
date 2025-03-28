<template>
  <div class="projects-showcase">
    <div class="projects-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
        </div>
        <div class="project-details">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span>Technologies used:</span>
            <ul>
              <li v-for="(tech, tIndex) in project.technologies" :key="tIndex">{{ tech }}</li>
            </ul>
          </div>
          <button class="project-btn">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import placeholder SVGs instead of JPGs
import industrialIoT from '@/assets/images/industrial-iot.jpg.svg';
import smartHome from '@/assets/images/smart-home.jpg.svg';
import wearableHealth from '@/assets/images/wearable-health.jpg.svg';

export default {
  name: 'ProjectsShowcase',
  data() {
    return {
      projects: [
        {
          title: 'Industrial IoT Monitoring System',
          description: 'Advanced monitoring system for industrial equipment with real-time analytics and predictive maintenance capabilities.',
          image: industrialIoT,
          technologies: ['ARM Cortex-M4', 'FreeRTOS', 'MQTT', 'Edge Computing']
        },
        {
          title: 'Smart Home Automation Controller',
          description: 'Centralized embedded system for managing and controlling smart home devices with energy-efficient operation.',
          image: smartHome,
          technologies: ['ESP32', 'Zigbee', 'WiFi', 'BLE', 'Custom PCB Design']
        },
        {
          title: 'Wearable Health Monitoring Device',
          description: 'Medical-grade wearable device for continuous health monitoring with FDA-compliant firmware and secure data transmission.',
          image: wearableHealth,
          technologies: ['Ultra Low Power MCU', 'Bluetooth 5.0', 'RTOS', 'Sensor Fusion']
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects-showcase {
  margin: 2rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-details {
  padding: 1.5rem;
}

.project-details h3 {
  color: #007bff;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.project-tech {
  margin: 1rem 0;
}

.project-tech span {
  font-weight: 500;
}

.project-tech ul {
  margin: 0.5rem 0 0;
  padding-left: 1.5rem;
}

.project-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.project-btn:hover {
  background-color: #0056b3;
}
</style>