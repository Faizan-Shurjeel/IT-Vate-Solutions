<template>
    <DefaultLayout>
        <section class="services-page">
            <div class="container">
                <div class="page-header" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <p class="page-intro">
                        IT-Vate Solutions offers comprehensive embedded systems services tailored to your specific
                        industry requirements.
                        Our expertise spans from initial concept design to deployment and maintenance.
                    </p>
                </div>

                <CoreServices />

                <div class="additional-services" data-aos="fade-up">
                    <h2>Our Approach</h2>
                    <div class="approach-steps">
                        <div class="step" data-aos="fade-right" data-aos-delay="100">
                            <div class="step-number">01</div>
                            <h3>Consultation & Requirements Analysis</h3>
                            <p>We begin by understanding your exact needs, technical constraints, and business goals to
                                create the perfect embedded solution.</p>
                        </div>
                        <div class="step" data-aos="fade-right" data-aos-delay="200">
                            <div class="step-number">02</div>
                            <h3>Design & Architecture</h3>
                            <p>Our engineers create detailed designs that optimize performance, reliability, and
                                cost-effectiveness for your specific use case.</p>
                        </div>
                        <div class="step" data-aos="fade-right" data-aos-delay="300">
                            <div class="step-number">03</div>
                            <h3>Development & Implementation</h3>
                            <p>Using industry best practices, we develop robust hardware and software solutions with
                                clean, maintainable code.</p>
                        </div>
                        <div class="step" data-aos="fade-right" data-aos-delay="400">
                            <div class="step-number">04</div>
                            <h3>Testing & Quality Assurance</h3>
                            <p>Comprehensive testing ensures your embedded system meets all requirements and performs
                                reliably in real-world conditions.</p>
                        </div>
                        <div class="step" data-aos="fade-right" data-aos-delay="500">
                            <div class="step-number">05</div>
                            <h3>Deployment & Support</h3>
                            <p>We provide smooth deployment and ongoing support to ensure your systems continue to
                                function optimally.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import CoreServices from '@/components/CoreServices.vue';

export default {
    components: {
        DefaultLayout,
        CoreServices
    }
};
</script>

<style scoped>
.services-page {
    padding-top: 6rem;
    padding-bottom: 4rem;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-header h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #333;
}

.page-intro {
    max-width: 800px;
    margin: 0 auto 2rem;
    font-size: 1.2rem;
    color: #666;
    line-height: 1.6;
}

.additional-services {
    margin-top: 5rem;
}

.additional-services h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.2rem;
    color: #333;
}

.approach-steps {
    max-width: 900px;
    margin: 0 auto;
}

.step {
    position: relative;
    padding-left: 60px;
    margin-bottom: 3rem;
    padding-bottom: 1rem;
}

.step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 50px;
    bottom: -10px;
    width: 2px;
    background: linear-gradient(to bottom, #0073e6, transparent);
}

.step-number {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #0073e6, #2a9df4);
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
}

.step h3 {
    color: #0073e6;
    margin: 0 0 0.75rem;
}

.step p {
    color: #666;
    line-height: 1.6;
    margin: 0;
}
</style>