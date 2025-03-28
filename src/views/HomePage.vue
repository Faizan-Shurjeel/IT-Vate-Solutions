<template>
  <DefaultLayout>
    <HeroSection />
    <CoreServices />
    <ProjectsShowcase />
    <Testimonials />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HeroSection from '@/components/HeroSection.vue';
import CoreServices from '@/components/CoreServices.vue';
import ProjectsShowcase from '@/components/ProjectsShowcase.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
  components: {
    DefaultLayout,
    HeroSection,
    CoreServices,
    ProjectsShowcase,
    Testimonials,
  },
};
</script>

<style scoped>
/* Add any specific styles for the HomePage here */
</style>