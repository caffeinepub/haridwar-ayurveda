import { Button } from '@/components/ui/button';
import { Leaf, Heart, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <Leaf size={16} />
              <span>100% Natural Ayurvedic Solutions</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your Body with{' '}
              <span className="text-primary">Ancient Wisdom</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Experience sustainable weight loss through time-tested Ayurvedic formulations. 
              Haridwar Ayurveda brings you natural, holistic solutions for a healthier, happier you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('products')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 text-base"
              >
                Explore Products
              </Button>
              <Button
                onClick={() => scrollToSection('consultation')}
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-base border-2"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">100% Natural</div>
                  <div className="text-sm text-muted-foreground">No chemicals</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart className="text-accent" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Safe & Effective</div>
                  <div className="text-sm text-muted-foreground">Clinically tested</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">5000+ Happy</div>
                  <div className="text-sm text-muted-foreground">Customers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src="/assets/generated/hero-banner.dim_1600x900.png"
                alt="Ayurvedic weight loss journey"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border-2 border-border rounded-2xl p-4 shadow-soft">
              <div className="text-3xl font-bold text-primary">15kg+</div>
              <div className="text-sm text-muted-foreground">Average weight loss</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
