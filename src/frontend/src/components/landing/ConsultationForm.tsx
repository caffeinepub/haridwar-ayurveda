import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitConsultationRequest } from '@/hooks/useConsultationRequest';
import { Loader2, CheckCircle2, Phone, Mail, MessageSquare } from 'lucide-react';

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { mutate: submitRequest, isPending } = useSubmitConsultationRequest();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact information is required';
    } else if (
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.contact) &&
      !/^[0-9]{10}$/.test(formData.contact)
    ) {
      newErrors.contact = 'Please enter a valid email or 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    submitRequest(
      {
        name: formData.name.trim(),
        contact: formData.contact.trim(),
        message: formData.message.trim(),
      },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setFormData({ name: '', contact: '', message: '' });
          setErrors({});
          setTimeout(() => setShowSuccess(false), 5000);
        },
        onError: (error) => {
          setErrors({ submit: error.message || 'Failed to submit. Please try again.' });
        },
      }
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="consultation" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground">
              Start your weight loss journey today. Our Ayurvedic experts will create a personalized plan just for you.
            </p>
          </div>

          <Card className="border-2 shadow-soft">
            <CardHeader className="text-center pb-6">
              <CardTitle className="font-serif text-2xl">Book Your Consultation</CardTitle>
              <CardDescription>
                Fill in your details and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="mx-auto text-primary" size={64} />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Your consultation request has been received. Our team will contact you shortly to schedule your personalized session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-primary" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={errors.name ? 'border-destructive' : ''}
                      disabled={isPending}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact" className="flex items-center gap-2">
                      <Phone size={16} className="text-primary" />
                      <Mail size={16} className="text-primary" />
                      Email or Phone *
                    </Label>
                    <Input
                      id="contact"
                      placeholder="your@email.com or 9876543210"
                      value={formData.contact}
                      onChange={(e) => handleChange('contact', e.target.value)}
                      className={errors.contact ? 'border-destructive' : ''}
                      disabled={isPending}
                    />
                    {errors.contact && (
                      <p className="text-sm text-destructive">{errors.contact}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare size={16} className="text-primary" />
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your weight loss goals and any health concerns..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`min-h-32 ${errors.message ? 'border-destructive' : ''}`}
                      disabled={isPending}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <p className="text-sm text-destructive">{errors.submit}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={20} />
                        Submitting...
                      </>
                    ) : (
                      'Submit Consultation Request'
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive communication from Haridwar Ayurveda
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
