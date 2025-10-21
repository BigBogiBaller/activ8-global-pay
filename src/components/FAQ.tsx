import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What industries do you support?",
    answer: "We support a wide range of industries including e-commerce, digital goods, dating and adult, iGaming, crypto, and other high-growth verticals. Our partnerships with 25 acquiring banks allow us to provide tailored solutions for various business models.",
  },
  {
    question: "How fast is the onboarding process?",
    answer: "Our onboarding process is designed to be fast and efficient. We work with top EU and US acquirers to provide quick approval times, typically within a few business days depending on your business type and documentation.",
  },
  {
    question: "What payment methods do you support?",
    answer: "We support major card networks including Visa, Mastercard, Cartes Bancaires, Amex, and JCB. Additionally, we offer stablecoin payments (USDT, USDC, EURS) and multi-currency IBAN solutions with SWIFT, SEPA, SEPA Instant, and UK Faster Payments.",
  },
  {
    question: "How do you handle fraud prevention?",
    answer: "We provide comprehensive fraud prevention through real-time alerts, automated dispute handling, and AI-driven fraud scoring. Our integrated tools help reduce chargebacks and improve approval ratios across your payment service providers.",
  },
  {
    question: "Can you help with chargeback management?",
    answer: "Yes, we offer dedicated chargeback and fraud prevention solutions with real-time alerts and automated dispute handling to protect your revenue and maintain healthy merchant accounts.",
  },
  {
    question: "What makes Activ8Pay different?",
    answer: "As an ISO partnered with 25 acquiring banks including top-tier European institutions, we provide unmatched flexibility in choosing the right acquiring and banking partners. We offer personalized guidance and support to help you operate safely and scale globally.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-foreground mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Frequently Asked Questions
        </h2>
        <Accordion 
          type="single" 
          collapsible 
          className={`w-full transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
