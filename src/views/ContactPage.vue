<template>
    <DefaultLayout>
        <section class="contact-page">
            <div class="container">
                <h1>Get in Touch</h1>
                <div class="contact-content">
                    <div class="contact-form">
                        <h2>Send Us a Message</h2>
                        <form @submit.prevent="submitForm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" v-model="form.name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="form.email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" v-model="form.subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" v-model="form.message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="submit-button">Send Message</button>
                        </form>
                    </div>
                    <div class="contact-info">
                        <h2>Contact Information</h2>
                        <div class="info-item">
                            <strong>Address:</strong>
                            <p>123 Tech Avenue, Innovation District, CA 94123</p>
                        </div>
                        <div class="info-item">
                            <strong>Email:</strong>
                            <p>info@it-vate-solutions.com</p>
                        </div>
                        <div class="info-item">
                            <strong>Phone:</strong>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div class="info-item">
                            <strong>Working Hours:</strong>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
    components: {
        DefaultLayout
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', this.form);
            alert('Thank you for your message! We will get back to you soon.');
            this.resetForm();
        },
        resetForm() {
            this.form = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        }
    }
};
</script>

<style scoped>
.contact-page {
    padding: 4rem 0;
}

.contact-content {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.contact-form,
.contact-info {
    flex: 1;
    min-width: 300px;
}

.form-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

input,
textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
}

.submit-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #0056b3;
}

.contact-info {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 4px;
}

.info-item {
    margin-bottom: 1.5rem;
}

.info-item p {
    margin: 0.25rem 0 0;
}
</style>