import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function ProductHighlights() {
  const products = [
    {
      name: 'Slim Herbal Tea',
      description: 'A refreshing blend of metabolism-boosting herbs that support natural weight loss and digestion.',
      benefits: ['Boosts metabolism', 'Aids digestion', 'Natural detox', 'Rich in antioxidants'],
      price: '₹499',
    },
    {
      name: 'Weight Balance Capsules',
      description: 'Powerful Ayurvedic formula with Triphala, Guggul, and other herbs for effective weight management.',
      benefits: ['Burns fat naturally', 'Reduces appetite', 'Improves energy', 'Balances doshas'],
      price: '₹899',
      featured: true,
    },
    {
      name: 'Detox Wellness Pack',
      description: 'Complete cleansing system to eliminate toxins and kickstart your weight loss journey.',
      benefits: ['Full body detox', 'Liver support', 'Improved immunity', 'Better skin health'],
      price: '₹1,299',
    },
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Signature Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Carefully crafted formulations using time-tested Ayurvedic recipes for optimal results.
          </p>
        </div>

        {/* Product showcase image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-soft">
          <img
            src="/assets/generated/product-mock-set.dim_1200x600.png"
            alt="Haridwar Ayurveda Product Range"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-soft ${
                product.featured
                  ? 'border-primary shadow-soft scale-105 md:scale-110'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {product.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground">per pack</span>
                  </div>
                  <Button
                    onClick={scrollToConsultation}
                    className={`w-full rounded-full ${
                      product.featured
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                  >
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
