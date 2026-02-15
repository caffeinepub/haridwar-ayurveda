import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQ() {
  const faqs = [
    {
      question: 'How does Ayurvedic weight loss work?',
      answer: 'Ayurvedic weight loss focuses on balancing your body\'s doshas (Vata, Pitta, Kapha) and improving digestive fire (Agni). Our natural herbs boost metabolism, reduce toxins, and promote sustainable fat loss without harsh chemicals or crash diets.',
    },
    {
      question: 'Are there any side effects?',
      answer: 'Our products are made from 100% natural herbs and are generally safe with no known side effects when taken as directed. However, we recommend consulting with our Ayurvedic practitioners, especially if you have existing health conditions or are on medication.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary by individual, but most customers notice improvements in energy and digestion within 2-3 weeks. Visible weight loss typically begins after 4-6 weeks of consistent use combined with a balanced diet and lifestyle.',
    },
    {
      question: 'Do I need to follow a strict diet?',
      answer: 'While our products work best with a balanced, wholesome diet, we don\'t require extreme restrictions. Our consultation includes personalized dietary recommendations based on your body type and lifestyle that are practical and sustainable.',
    },
    {
      question: 'Can I take these products with other medications?',
      answer: 'While our products are natural, it\'s important to inform our practitioners about any medications you\'re taking during your consultation. They will guide you on the best approach to avoid any potential interactions.',
    },
    {
      question: 'What makes Haridwar Ayurveda different?',
      answer: 'We combine authentic Ayurvedic wisdom with modern quality standards. Our herbs are sourced from the Himalayas, formulations are clinically tested, and each customer receives personalized guidance from certified Ayurvedic practitioners.',
    },
    {
      question: 'Is the consultation really free?',
      answer: 'Yes! We offer a complimentary initial consultation to understand your health goals and body type. This helps us recommend the most suitable products and lifestyle modifications for your unique needs.',
    },
    {
      question: 'How do I place an order?',
      answer: 'Simply fill out the consultation form above, and our team will contact you within 24 hours. After your consultation, we\'ll recommend the best products for you and guide you through the ordering process.',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Ayurvedic weight loss
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
