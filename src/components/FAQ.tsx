import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What countries do you cover?",
    answer: "Activ8Pay offers global coverage through its extensive network of European, UK, and US acquiring banks, as well as trusted international payment providers. Whether your business operates locally or across multiple regions, we help you connect to the right acquirer or payment partner to accept payments worldwide.",
  },
  {
    question: "How fast can I start receiving payments?",
    answer: "Once your application and due diligence documents are complete, merchant account approval can take as little as 5 to 9 business days, depending on your business type and jurisdiction. Activ8Pay assists you throughout the process: from collecting the right documentation to choosing the most suitable acquiring partner so you can start processing quickly and smoothly.",
  },
  {
    question: "Who are your partners?",
    answer: "We collaborate with a broad network of Payment Service Providers (PSPs), gateways, and acquiring banks, including several top-tier European financial institutions. Our partnerships allow us to offer tailored payment solutions for each merchant profile, from low-risk to high-risk industries, ensuring flexibility and stability.",
  },
  {
    question: "What industries do you support?",
    answer: "Activ8Pay works with a wide range of industries, including: eCommerce and digital goods, Subscription and SaaS businesses, Dating and adult entertainment, iGaming and betting, Crypto and fintech projects, CBD and nutraceuticals. If your industry isn't listed, feel free to contact us, we can often find a suitable acquirer or banking solution.",
  },
  {
    question: "Do you help with banking or IBAN accounts?",
    answer: "Yes. In addition to payment acquiring, Activ8Pay also assists businesses with corporate banking and multi-currency IBANs, allowing you to manage settlements and operational funds securely across Europe and beyond.",
  },
  {
    question: "Do you support crypto or stablecoin payments?",
    answer: "Absolutely. Activ8Pay offers crypto payment routes and stablecoin settlement options, giving merchants flexibility to accept or receive funds in digital currencies through regulated partners.",
  },
  {
    question: "What makes Activ8Pay different?",
    answer: "Activ8Pay stands out by combining: A network of over 25 acquiring banks, Deep industry expertise across regulated and high-growth sectors, Tailored onboarding support and documentation guidance, Access to both traditional and alternative payment methods. We're not just another payment provider — we're your strategic partner to grow and secure your payment ecosystem.",
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
