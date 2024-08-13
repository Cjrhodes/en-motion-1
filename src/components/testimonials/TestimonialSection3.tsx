import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  img: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 3,
    img: "img/brfb.jpg",
    name: "Bonnie Lambert",
    text:  "Miguel's workouts are one of a kind. They're unique and push your limits without feeling like you're with a drill sergeant. Great online experience, highly recommend!",
  },
  {
    id: 4,
    img: "img/crfb.jpg",
    name: "Chris Rhodes",
    text: "Over the past two years, Miguel has been an amazing trainer. He helped me drop over 60 pounds and recover from knee and shoulder injuries. What I really like is how he pays close attention to my form while still pushing me in a safe way. I wholeheartedly recommend Miguel to anyone seeking a knowledgeable, supportive, and results-driven trainer.",
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section style={{ backgroundColor: '#000', color: '#fff', padding: '3rem 0' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>What Our Clients Say</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4 mb-4">
              <div style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '1rem', borderRadius: '0.5rem' }} className="card testimonial-card h-100">
                <div className="card-body text-center">
                  <img src={testimonial.img} alt={testimonial.name} style={{ borderRadius: '50%', marginBottom: '1rem', width: '100px', height: '100px' }} />
                  <h5 className="card-title">{testimonial.name}</h5>
                  <i className="fas fa-quote-left quote-icon mb-3" style={{ color: '#ffd700' }}></i>
                  <p className="card-text">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
