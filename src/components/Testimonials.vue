<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2>What Our Clients Say</h2>
        <p>Don't just take our word for it - see what our clients have to say about our embedded systems expertise</p>
      </div>

      <div class="testimonial-cards">
        <Card v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card"
          :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'" :data-aos-delay="index * 100">
          <template #header>
            <div class="testimonial-quote">
              <i class="pi pi-quote-right"></i>
            </div>
          </template>
          <template #content>
            <p class="quote">{{ testimonial.quote }}</p>
            <div class="testimonial-author">
              <div class="author-avatar" :style="{ backgroundColor: getAvatarColor(index) }">
                {{ getInitials(testimonial.author) }}
              </div>
              <div class="author-info">
                <h4>{{ testimonial.author }}</h4>
                <p>{{ testimonial.position }}</p>
              </div>
            </div>
          </template>
        </Card>
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
          quote: 'IT-Vate Solutions transformed our manufacturing process with their innovative embedded systems approach. Their expertise and attention to detail resulted in a 30% increase in operational efficiency.',
          author: 'Thomas Anderson',
          position: 'CTO, TechManufacturing Inc.'
        },
        {
          quote: 'The team at IT-Vate consistently delivered beyond our expectations. Their embedded solutions for our medical devices met all regulatory requirements while maintaining exceptional performance.',
          author: 'Sarah Johnson',
          position: 'VP of Engineering, MediTech Solutions'
        },
        {
          quote: 'Working with IT-Vate Solutions has been a game-changer for our IoT product line. Their expertise in embedded systems allowed us to bring our products to market 40% faster than projected.',
          author: 'Michael Chen',
          position: 'Product Director, ConnectedFuture'
        }
      ]
    };
  },
  methods: {
    getInitials(name) {
      return name.split(' ').map(part => part[0]).join('');
    },
    getAvatarColor(index) {
      const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#F44336'];
      return colors[index % colors.length];
    }
  }
};
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.section-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.testimonial-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

:deep(.testimonial-card) {
  border-radius: 10px !important;
  transition: transform 0.3s, box-shadow 0.3s;
}

:deep(.testimonial-card:hover) {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
}

:deep(.testimonial-card .p-card-header) {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
}

.testimonial-quote {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #0073e6, #2a9df4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -30px;
  box-shadow: 0 5px 15px rgba(0, 115, 230, 0.3);
}

.testimonial-quote i {
  font-size: 1.8rem;
  color: white;
}

.quote {
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  position: relative;
}

.testimonial-author {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.author-info h4 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.author-info p {
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
  color: #666;
}
</style>