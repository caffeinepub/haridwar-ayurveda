import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Zap, Shield, Users, TrendingDown } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      description: 'Pure herbs and botanicals sourced from the Himalayas, formulated using ancient Ayurvedic wisdom.',
    },
    {
      icon: TrendingDown,
      title: 'Sustainable Weight Loss',
      description: 'Lose weight naturally without crash diets. Our approach focuses on long-term health and balance.',
    },
    {
      icon: Zap,
      title: 'Boost Metabolism',
      description: 'Enhance your body\'s natural fat-burning ability with herbs that ignite your digestive fire (Agni).',
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Beyond weight loss - improve digestion, energy levels, and overall vitality from within.',
    },
    {
      icon: Shield,
      title: 'No Side Effects',
      description: 'Safe, gentle formulations tested for purity. Free from harmful chemicals and artificial additives.',
    },
    {
      icon: Users,
      title: 'Expert Guidance',
      description: 'Personalized consultation with certified Ayurvedic practitioners to guide your wellness journey.',
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Ayurvedic Weight Loss?
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the power of nature's wisdom combined with modern science for sustainable, healthy weight management.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-soft group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
