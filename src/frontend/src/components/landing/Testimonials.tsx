import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      image: '👩',
      rating: 5,
      text: 'Lost 12kg in 3 months! The products are amazing and the consultation helped me understand my body type. No side effects, just natural results.',
      result: '12kg lost',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      image: '👨',
      rating: 5,
      text: 'I was skeptical at first, but Haridwar Ayurveda changed my life. My energy levels are up, digestion improved, and I feel healthier than ever.',
      result: '18kg lost',
    },
    {
      name: 'Anita Desai',
      location: 'Bangalore',
      image: '👩',
      rating: 5,
      text: 'The personalized approach made all the difference. The herbs are pure, effective, and I love that it\'s all natural. Highly recommend!',
      result: '10kg lost',
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur',
      image: '👨',
      rating: 5,
      text: 'After trying countless diets, I finally found something sustainable. The Ayurvedic approach addresses the root cause, not just symptoms.',
      result: '15kg lost',
    },
    {
      name: 'Meera Patel',
      location: 'Ahmedabad',
      image: '👩',
      rating: 5,
      text: 'The detox pack was a game-changer. I feel lighter, more energetic, and my skin has never looked better. Thank you Haridwar Ayurveda!',
      result: '8kg lost',
    },
    {
      name: 'Arjun Reddy',
      location: 'Hyderabad',
      image: '👨',
      rating: 5,
      text: 'Excellent products and customer service. The consultation was thorough and the results speak for themselves. Worth every rupee!',
      result: '20kg lost',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            Real people, real results. See how Haridwar Ayurveda has transformed lives across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-soft"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="text-primary/20" size={32} />
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-accent fill-accent" size={16} />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{testimonial.result}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
