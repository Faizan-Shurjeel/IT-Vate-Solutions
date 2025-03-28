<template>
    <DefaultLayout>
        <section class="testimonials-page">
            <div class="container">
                <h1>Client Testimonials</h1>
                <p class="testimonials-intro">
                    Don't just take our word for it. Here's what our clients have to say about working with IT-Vate
                    Solutions.
                </p>
                <Testimonials />
                <div class="featured-testimonials">
                    <h2>Featured Success Stories</h2>
                    <div class="testimonial-grid">
                        <div class="testimonial-card" v-for="(testimonial, index) in featuredTestimonials" :key="index">
                            <div class="testimonial-header">
                                <div class="client-info">
                                    <h3>{{ testimonial.clientName }}</h3>
                                    <p class="client-position">{{ testimonial.position }}, {{ testimonial.company }}</p>
                                </div>
                            </div>
                            <div class="testimonial-body">
                                <p>"{{ testimonial.quote }}"</p>
                            </div>
                            <div class="testimonial-footer">
                                <p class="project-type">{{ testimonial.projectType }}</p>
                                <p class="testimonial-date">{{ testimonial.date }}</p>
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
import Testimonials from '@/components/Testimonials.vue';

export default {
    components: {
        DefaultLayout,
        Testimonials
    },
    data() {
        return {
            featuredTestimonials: [
                {
                    clientName: "Sarah Johnson",
                    position: "CTO",
                    company: "InnoTech Solutions",
                    quote: "The embedded system solution provided by IT-Vate Solutions has revolutionized our manufacturing process. Their expertise and attention to detail resulted in a system that exceeded our expectations in terms of both functionality and efficiency.",
                    projectType: "Manufacturing Automation",
                    date: "January 2025"
                },
                {
                    clientName: "Michael Chen",
                    position: "Product Manager",
                    company: "HealthTech Innovations",
                    quote: "IT-Vate Solutions' team demonstrated exceptional technical knowledge and professionalism throughout our project. They delivered a complex medical device firmware on time and within budget, while ensuring full regulatory compliance.",
                    projectType: "Medical Device Firmware",
                    date: "November 2024"
                },
                {
                    clientName: "Elizabeth Torres",
                    position: "Director of Engineering",
                    company: "Smart Living Inc.",
                    quote: "We've worked with several embedded systems consultants in the past, but none have delivered the quality and reliability that IT-Vate Solutions provides. Their smart home system framework has been instrumental in our product line expansion.",
                    projectType: "Smart Home Systems",
                    date: "March 2024"
                }
            ]
        };
    }
};
</script>

<style scoped>
.testimonials-page {
    padding: 4rem 0;
}

.testimonials-intro {
    max-width: 800px;
    margin: 1rem auto 3rem;
    text-align: center;
    font-size: 1.1rem;
    color: #666;
}

.featured-testimonials {
    margin-top: 4rem;
}

.featured-testimonials h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.client-info h3 {
    margin: 0;
    color: #007bff;
}

.client-position {
    color: #666;
    font-style: italic;
    margin: 0.25rem 0 0;
}

.testimonial-body {
    margin: 1rem 0;
    flex-grow: 1;
}

.testimonial-body p {
    font-style: italic;
    line-height: 1.6;
}

.testimonial-footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    padding-top: 1rem;
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #666;
}
</style>