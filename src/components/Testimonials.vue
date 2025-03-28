<template>
  <section class="testimonials">
    <h2>What Our Clients Say</h2>
    <div class="testimonial-list">
      <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
        <p class="quote">"{{ testimonial.quote }}"</p>
        <p class="author">- {{ testimonial.author }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          quote: 'IT-Vate Solutions transformed our embedded systems project with their expertise.',
          author: 'Client A'
        },
        {
          quote: 'Their attention to detail and innovative solutions were impressive.',
          author: 'Client B'
        },
        {
          quote: 'We highly recommend IT-Vate Solutions for any embedded systems needs.',
          author: 'Client C'
        }
      ]
    };
  }
};
</script>

<style scoped>
.testimonials {
  padding: 2rem;
  background-color: #f9f9f9;
  text-align: center;
}

.testimonial-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testimonial {
  margin: 1rem 0;
  max-width: 600px;
}

.quote {
  font-style: italic;
  font-size: 1.2rem;
}

.author {
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>