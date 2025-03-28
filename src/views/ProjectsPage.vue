<template>
    <DefaultLayout>
        <section class="projects-page">
            <div class="container">
                <h1>Our Projects</h1>
                <p class="projects-intro">
                    Explore our portfolio of innovative embedded systems solutions. Each project demonstrates our
                    commitment to excellence, technical expertise, and client satisfaction.
                </p>
                <ProjectsShowcase />
                <div class="additional-projects">
                    <h2>Additional Case Studies</h2>
                    <div class="case-studies-grid">
                        <div class="case-study" v-for="(project, index) in additionalProjects" :key="index">
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.description }}</p>
                            <div class="project-details">
                                <div class="detail-item">
                                    <strong>Industry:</strong> {{ project.industry }}
                                </div>
                                <div class="detail-item">
                                    <strong>Technologies:</strong> {{ project.technologies }}
                                </div>
                                <div class="detail-item">
                                    <strong>Duration:</strong> {{ project.duration }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import ProjectsShowcase from '@/components/ProjectsShowcase.vue';

export default {
    components: {
        DefaultLayout,
        ProjectsShowcase
    },
    data() {
        return {
            additionalProjects: [
                {
                    title: 'Autonomous Agricultural System',
                    description: 'A smart irrigation and monitoring system for large-scale agricultural operations.',
                    industry: 'Agriculture',
                    technologies: 'ESP32, Sensors, Cloud Integration',
                    duration: '8 months'
                },
                {
                    title: 'Medical Device Firmware',
                    description: 'Firmware development for a novel patient monitoring device with regulatory compliance.',
                    industry: 'Healthcare',
                    technologies: 'ARM Cortex-M, FDA Compliance, Low Power Design',
                    duration: '12 months'
                },
                {
                    title: 'Automotive Control System',
                    description: 'Real-time control system for vehicle safety features with redundant operations.',
                    industry: 'Automotive',
                    technologies: 'RTOS, CAN Bus, ISO 26262 Compliance',
                    duration: '10 months'
                }
            ]
        };
    }
};
</script>

<style scoped>
.projects-page {
    padding: 4rem 0;
}

.projects-intro {
    max-width: 800px;
    margin: 1rem auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    color: #666;
}

.additional-projects {
    margin-top: 4rem;
}

.additional-projects h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.case-studies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

.case-study {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.case-study h3 {
    color: #007bff;
    margin-top: 0;
}

.project-details {
    margin-top: 1rem;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
}

.detail-item {
    margin-bottom: 0.5rem;
}
</style>